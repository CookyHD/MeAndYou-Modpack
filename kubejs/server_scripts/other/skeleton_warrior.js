LevelEvents.tick(event => {
	event.level.getEntities().forEach(entity => {
		if (entity.tags.contains("Kubejs_Warrior")) {
			if (entity.age % 5 == 0) {
				let target = entity.target
				if (target != null) {
					let main_hand = entity.getMainHandItem()
					let axe = ""
					let buffer = 0
					if (entity.type == "minecraft:wither_skeleton") {
						axe = "minecraft:stone_axe"
						buffer = 7
					} else {
						axe = "minecraft:wooden_axe"
						buffer = 5
					}
					let bow = "minecraft:bow"
					let distance = entity.distanceToEntity(target)
					if (distance <= buffer && main_hand.id != axe) {
						entity.setMainHandItem(axe)
					}
					else if (distance >= buffer && main_hand.id != bow) {
						entity.setMainHandItem(bow)
					}
				}
			}
			if (entity.age % 5 == 0) {
				let width = entity.getBbWidth()
				let height = entity.getBbHeight()
				event.level.spawnParticles(
					"soul_fire_flame",
					true,
					entity.x,
					entity.y+height/2,
					entity.z,
					width/4,
					height/4,
					width/4,
					(height+width)/2,
					0
				)
			}
		}
	})
})