

ItemEvents.rightClicked("minecraft:brick",event => {
	if (!event.player.creative) event.item.count--
	event.player.addItemCooldown("minecraft:brick",10)
	event.player.swing()
	let obj = global.projectVellocity(event.player,0.8,0)
	let snowball = event.level.createEntity("snowball")
	snowball.setNbt({Item:{id:"minecraft:brick",Count:1}})
	snowball.setOwner(event.player)
	snowball.tags.add("Kubejs_Brick")
	snowball.setPosition(obj.x,obj.y,obj.z)
	snowball.setMotion(obj.xV,obj.yV,obj.zV)
	snowball.spawn()
	global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"minecraft:entity.snowball.throw","player",0.5,0.5)
})

ItemEvents.rightClicked("kubejs:mud_ball",event => {
	if (!event.player.creative) event.item.count--
	event.player.addItemCooldown("kubejs:mud_ball",20)
	event.player.swing()
	let obj = global.projectVellocity(event.player,1,0)
	let snowball = event.level.createEntity("snowball")
	snowball.setNbt({Item:{id:"kubejs:mud_ball",Count:1}})
	snowball.setOwner(event.player)
	snowball.tags.add("Kubejs_Mudball")
	snowball.setPosition(obj.x,obj.y,obj.z)
	snowball.setMotion(obj.xV,obj.yV,obj.zV)
	snowball.spawn()
	
	global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"minecraft:entity.snowball.throw","player",0.5,0.5)
})

ItemEvents.rightClicked("minecraft:snowball",event => {
	event.player.addItemCooldown("minecraft:snowball",5)
})

ItemEvents.rightClicked("minecraft:egg",event => {
	event.player.addItemCooldown("minecraft:egg",5)
})

global.projectileImpacts.push(
	/**
	* @param {Internal.ProjectileImpactEvent} event
	*/
(event) => {
	if (event.entity.tags.contains("Kubejs_Brick")) {
		if (event.rayTraceResult.type == "entity") {
			let target = event.rayTraceResult.entity
			target.attack(target.level.damageSources().playerAttack(event.entity.getOwner()),3)
		}
		if (event.rayTraceResult.type == "block") {
			let block = event.entity.level.getBlock(event.rayTraceResult.blockPos)
			if (block.hasTag("forge:glass") || block.hasTag("forge:glass_panes")) {
				block.level.destroyBlock(block.pos,false)
			}
		}
	}
})

ItemEvents.rightClicked("kubejs:brick_weapon",event => {
	let count = 0
	let strength = 1
	let amethyst = false
	let offhand = event.player.getOffHandItem()
	if ((event.item.count >= 4 || event.player.creative) && event.player.isShiftKeyDown()) {
		strength = 0.8
		count = 4
	} else {
		count = 1
	}
	event.item.count -= count
	global.itemAddCooldown(event.player,"kubejs:brick_weapon",30*count)
	if (offhand.id == "minecraft:redstone") {
		if (global.consumePlayerItem(event.player,"minecraft:redstone",count)) {
			event.player.addItemCooldown("kubejs:brick_weapon",0)
		}
	}
	if (offhand.id == "minecraft:amethyst_shard") {
		if (global.consumePlayerItem(event.player,"minecraft:amethyst_shard",count)) {
			amethyst = true
		}
	}
	if (offhand.id == "minecraft:slime_ball") {
		if (
			global.consumePlayerItem(event.player,"minecraft:slime_ball",count,false) &&
			global.consumePlayerItem(event.player,"minecraft:amethyst_shard",count,false) &&
			global.consumePlayerItem(event.player,"minecraft:redstone",count,false)
		) {
			global.consumePlayerItem(event.player,"minecraft:slime_ball",count)
			global.consumePlayerItem(event.player,"minecraft:amethyst_shard",count)
			global.consumePlayerItem(event.player,"minecraft:redstone",count)
			event.player.addItemCooldown("kubejs:brick_weapon",0)
			amethyst = true
		}
	}
	event.player.swing()
	let obj = global.projectVellocity(event.player,strength,0)
	let snowball = event.level.createEntity("snowball")
	snowball.setNbt({Item:{id:"kubejs:brick_weapon",Count:1}})
	snowball.setOwner(event.player)
	snowball.tags.add("Kubejs_BrickWeapon")
	if (count > 1) snowball.tags.add("Kubejs_!Cluster")
	if (amethyst == true) snowball.tags.add("Kubejs_!Amethyst")
	snowball.setPosition(obj.x,obj.y,obj.z)
	snowball.setMotion(obj.xV,obj.yV,obj.zV)
	snowball.spawn()
	global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"minecraft:entity.tnt.primed","player",1,1)
	global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"minecraft:entity.snowball.throw","player",0.5,0.5)
})

global.projectileImpacts.push(
	/**
	* @param {Internal.ProjectileImpactEvent} event
	*/
(event) => {
	if (event.entity.tags.contains("Kubejs_BrickWeapon")) {
		let entity = event.entity
		entity.level.createExplosion(entity.x,entity.y,entity.z)
		.explosionMode("tnt")
		.strength(3)
		.explode()
		if (entity.tags.contains("Kubejs_!Cluster")) {
			for (let i = 1; i <= 4; i++) {
				let snowball = entity.level.createEntity("snowball")
				snowball.setNbt({Item:{id:"kubejs:brick_weapon",Count:1}})
				snowball.tags.add("Kubejs_BrickWeapon")
				if (entity.tags.contains("Kubejs_!Amethyst")) snowball.tags.add("Kubejs_!Amethyst")
				snowball.setPosition(entity.x,entity.y+1,entity.z)
				snowball.setMotion(
					((Math.random()-0.5)*0.75),
					(0.25),
					((Math.random()-0.5)*0.75)
				)
				snowball.spawn()
			}
		}
		if (event.entity.tags.contains("Kubejs_!Amethyst") && !entity.tags.contains("Kubejs_!Cluster")) {
			for (let i = 1; i <= 8; i++) {
				let snowball = entity.level.createEntity("snowball")
				snowball.setNbt({Item:{id:"minecraft:amethyst_shard",Count:1}})
				snowball.tags.add("Kubejs_Amethyst")
				snowball.setPosition(entity.x,entity.y+1,entity.z)
				snowball.setMotion(
					((Math.random()-0.5)*2),
					(0.2),
					((Math.random()-0.5)*2)
				)
				snowball.spawn()
			}
		}
	}
})

global.projectileImpacts.push(
	/**
	* @param {Internal.ProjectileImpactEvent} event
	*/
(event) => {
	if (event.entity.tags.contains("Kubejs_Amethyst")) {
		if (event.rayTraceResult.type == "entity") {
			let target = event.rayTraceResult.entity
			if (target.isLiving()) {
				target.attack(7)
			}
		}
		if (event.rayTraceResult.type == "block") {
			if (global.chance(1,16)) {
				let item = event.entity.level.createEntity("item")
				item.setNbt({Item:{id:"minecraft:amethyst_shard",Count:1}})
				item.setPosition(event.entity.x,event.entity.y,event.entity.z)
				item.spawn()
			}
		}
	}
})

global.projectileImpacts.push(
	/**
	* @param {Internal.ProjectileImpactEvent} event
	*/
(event) => {
	if (event.entity.tags.contains("Kubejs_Mudball")) {
		if (event.rayTraceResult.type == "entity") {
			let target = event.rayTraceResult.entity
			if (target.isLiving()) {
				target.potionEffects.add("minecraft:blindness",60,0,false,true)
				target.potionEffects.add("minecraft:slowness",100,2,false,true)
			}
		}
	}
})