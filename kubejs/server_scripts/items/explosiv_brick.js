global.consumeOffhandItem = (player,id,amount) => {
	let bool = false
	let offhand = player.getOffhandItem()
	if (offhand.id == id) {
		if (!player.creative) {
			if (offhand.count >= amount) {
				offhand.count -= amount
				bool = true
			}
		} else bool = true
	}
	return bool
}

let EXPLOSIV_BRICK = {}

EXPLOSIV_BRICK.fireBrick = (level,player,cluster,mode,tex) => {
	let obj = global.projectVellocity(player,1,0)
	let snowball = level.createEntity("snowball")
	snowball.setNbt({Item:{id:tex,Count:1}})
	snowball.setOwner(player)
	snowball.tags.add("Kubejs_BrickWeapon")
	if (mode) snowball.tags.add("Kubejs_!"+mode)
	if (cluster) snowball.tags.add("Kubejs_!Cluster")
	snowball.setPosition(obj.x,obj.y,obj.z)
	snowball.setMotion(obj.xV,obj.yV,obj.zV)
	snowball.spawn()
	global.playSound(level,[player.x,player.y,player.z],"minecraft:entity.tnt.primed","player",1,1)
	global.playSound(level,[player.x,player.y,player.z],"minecraft:entity.snowball.throw","player",0.5,0.5)
}

ItemEvents.rightClicked("kubejs:multi_brick_weapon",event => {
	let mode = null
	if (!event.player.creative) event.item.count--
	if (global.consumeOffhandItem(event.player,"minecraft:amethyst_shard",4)) mode = "Amethyst"
	if (global.consumeOffhandItem(event.player,"minecraft:fire_charge",4)) mode = "Fire"
	if (global.consumeOffhandItem(event.player,"minecraft:mud",4)) mode = "Mud"
	if (global.consumeOffhandItem(event.player,"minecraft:arrow",16)) mode = "Arrow"
	if (global.consumeOffhandItem(event.player,"minecraft:ink_sac",4)) mode = "Smoke"
	EXPLOSIV_BRICK.fireBrick(event.level,event.player,true,mode,"kubejs:multi_brick_weapon")
	global.itemAddCooldown(event.player,["kubejs:multi_brick_weapon","kubejs:brick_weapon"],30)
	event.player.swing()
})

ItemEvents.rightClicked("kubejs:brick_weapon",event => {
	let mode = null
	if (!event.player.creative) event.item.count--
	if (global.consumeOffhandItem(event.player,"minecraft:amethyst_shard",1)) mode = "Amethyst"
	if (global.consumeOffhandItem(event.player,"minecraft:fire_charge",1)) mode = "Fire"
	if (global.consumeOffhandItem(event.player,"minecraft:mud",1)) mode = "Mud"
	if (global.consumeOffhandItem(event.player,"minecraft:arrow",4)) mode = "Arrow"
	if (global.consumeOffhandItem(event.player,"minecraft:ink_sac",1)) mode = "Smoke"
	EXPLOSIV_BRICK.fireBrick(event.level,event.player,false,mode,"kubejs:brick_weapon")
	global.itemAddCooldown(event.player,["kubejs:multi_brick_weapon","kubejs:brick_weapon"],30)
	event.player.swing()
})

global.projectileImpacts.push(
	/**
	* @param {Internal.ProjectileImpactEvent} event
	*/
(event) => {
	if (event.entity.tags.contains("Kubejs_BrickWeapon")) {
		let entity = event.entity
		let expo = entity.level.createExplosion(entity.x,entity.y,entity.z)
		if (entity.tags.contains("Kubejs_!Smoke")) {
			expo.explosionMode("none")
			expo.strength(1)
		} else {
			expo.explosionMode("tnt")
			expo.strength(3)
		}
		if (entity.tags.contains("Kubejs_!Fire")) expo.causesFire(true)
		expo.explode()
		if (entity.tags.contains("Kubejs_!Cluster")) {
			for (let i = 1; i <= 4; i++) {
				let snowball = entity.level.createEntity("snowball")
				snowball.setNbt({Item:{id:"kubejs:brick_weapon",Count:1}})
				snowball.tags.add("Kubejs_BrickWeapon")
				if (entity.tags.contains("Kubejs_!Amethyst")) snowball.tags.add("Kubejs_!Amethyst")
				if (entity.tags.contains("Kubejs_!Fire")) snowball.tags.add("Kubejs_!Fire")
				if (entity.tags.contains("Kubejs_!Mud")) snowball.tags.add("Kubejs_!Mud")
				if (entity.tags.contains("Kubejs_!Arrow")) snowball.tags.add("Kubejs_!Arrow")
				if (entity.tags.contains("Kubejs_!Smoke")) snowball.tags.add("Kubejs_!Smoke")
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
				snowball.setNbt({Item:{id:"kubejs:amethyst_piece",Count:1}})
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
		if (event.entity.tags.contains("Kubejs_!Mud") && !entity.tags.contains("Kubejs_!Cluster")) {
			for (let i = 1; i <= 4; i++) {
				let snowball = entity.level.createEntity("snowball")
				snowball.setNbt({Item:{id:"kubejs:mud_ball",Count:1}})
				snowball.tags.add("Kubejs_Mudball")
				snowball.setPosition(entity.x,entity.y+1,entity.z)
				snowball.setMotion(
					((Math.random()-0.5)*2),
					(0.2),
					((Math.random()-0.5)*2)
				)
				snowball.spawn()
			}
		}
		if (event.entity.tags.contains("Kubejs_!Arrow") && !entity.tags.contains("Kubejs_!Cluster")) {
			for (let i = 1; i <= 4; i++) {
				let arrow = entity.level.createEntity("arrow")
				arrow.setNbt({"crit":1,"pickup":0,"damage":1.5})
				arrow.setPosition(entity.x,entity.y+1,entity.z)
				arrow.setMotion(
					((Math.random()-0.5)*5),
					(0.25),
					((Math.random()-0.5)*5)
				)
				arrow.spawn()
			}
		}
		if (event.entity.tags.contains("Kubejs_!Smoke") && !entity.tags.contains("Kubejs_!Cluster")) {
			for (let i = 1; i <= 4; i++) {
				let marker = entity.level.createEntity("marker")
				marker.tags.add("Kubejs_PuffFlower")
				marker.tags.add("Kubejs_ColorBlack")
				marker.tags.add("Kubejs_SizeNormal")
				marker.setPosition(entity.x,entity.y,entity.z)
				marker.spawn()
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
			if (global.chance(25,100)) {
				let item = event.entity.level.createEntity("item")
				item.setNbt({Item:{id:"kubejs:amethyst_piece",Count:1}})
				item.setPosition(event.entity.x,event.entity.y,event.entity.z)
				item.spawn()
			}
		}
	}
})