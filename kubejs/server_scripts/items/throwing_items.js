

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