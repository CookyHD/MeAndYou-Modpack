
LevelEvents.tick(event => {
	if (global.getSetting("HardMobs") && event.level.time % 5 == 0) event.level.getEntities().filter(e => e.tags.contains("Kubejs_Weber")).forEach(entity => {
		if (entity.age % 100 <= 5) {
			let target = entity.target
			if (target != null) {
				let distance = entity.distanceToEntity(target)
				if (distance <= 16 && entity.hasLineOfSight(target)) {
					global.playSound(event.level,[entity.x,entity.y,entity.z],"minecraft:entity.snowball.throw","hostile",1,1)
					event.level.spawnParticles("cloud",true,entity.x,entity.y+entity.eyeHeight,entity.z,0.25,0.25,0.25,10,0.1)
					let angle = entity.getPosition(1).vectorTo(Vec3d(target.x + target.motionX,target.y + target.motionY + (distance * 0.16),target.z + target.motionZ)).normalize()
					let power = 1
					let snowball = event.level.createEntity("snowball")
					snowball.setNbt({Item:{id:"minecraft:cobweb",Count:1}})
					snowball.setOwner(entity)
					snowball.tags.add("Kubejs_Cobweb")
					snowball.setPosition(entity.x,entity.y + entity.eyeHeight,entity.z)
					snowball.setMotion(angle.x()*power,angle.y()*power,angle.z()*power)
					snowball.spawn()
				}
			}
		}
	})
})

global.projectileImpacts.push(
	/**
	* @param {Internal.ProjectileImpactEvent} event
	*/
(event) => {
	if (event.entity.tags.contains("Kubejs_Cobweb")) {
		let web = (block) => {
			block.set("cobweb")
			event.entity.server.scheduleInTicks(200 + Math.floor(1000 * Math.random()), () => {
				if (block.id == "minecraft:cobweb") {
					block.level.destroyBlock(block.pos,false)
				}
			})
		}
		if (event.rayTraceResult.type == "entity") {
			let target = event.rayTraceResult.entity
			switch (target.type) {
				case "minecraft:spider":
				case "minecraft:cave_spider":
					event.setCanceled(true)
					break
				default:
					if (global.isAir(target.block) && target.block.up.id != "minecraft:cobweb") {
						web(target.block)
					} else if (global.isAir(target.block.up) && target.block.id != "minecraft:cobweb") {
						web(target.block.up)
					} else if (target.block.id != "minecraft:cobweb") if (target.block.up.id != "minecraft:cobweb") {
						target.potionEffects.add("minecraft:slowness",100,1,false,true)
					}
			}
		}
		if (event.rayTraceResult.type == "block") {
			if (global.isAir(event.entity.block)){
				web(event.entity.block)
			}
		}
	}
})

