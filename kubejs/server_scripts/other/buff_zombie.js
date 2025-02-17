LevelEvents.tick(event => {
	event.level.getEntities().forEach(entity => {
		if (entity.tags.contains("Kubejs_Buff")) {
			if (entity.age % 5 == 0) {
				let width = entity.getBbWidth()
				let height = entity.getBbHeight()
				event.level.spawnParticles(
					"minecraft:block minecraft:nether_wart_block",
					true,
					entity.x,
					entity.y+height/2,
					entity.z,
					width/4,
					height/4,
					width/4,
					(height+width)*2,
					0
				)
			}
		}
	})
})