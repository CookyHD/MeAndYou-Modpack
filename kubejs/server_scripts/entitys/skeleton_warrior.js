
LevelEvents.tick(event => {
	if (global.getSetting("HardMobs") && event.level.time % 5 == 0) event.level.getEntities().filter(e => e.tags.contains("Kubejs_Warrior")).forEach(entity => {
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
	})
})
