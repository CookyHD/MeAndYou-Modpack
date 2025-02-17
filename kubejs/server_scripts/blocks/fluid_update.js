
LevelEvents.tick(event => {

	event.level.getEntities().forEach(entity => {
	
		if (entity.block.id == "kubejs:heavy_fluid" || entity.block.up.id == "kubejs:heavy_fluid") {
			entity.remainingFireTicks = 300
			entity.attack(event.level.damageSources().onFire(),6)
		}
	
		if (entity.block.id == "kubejs:bloody_tear_fluid" || entity.block.up.id == "kubejs:bloody_tear_fluid") {
			entity.remainingFireTicks = 0
			if (event.level.time%10 == 0) {
				entity.heal(0.5)
			}
		}
	
		if (entity.block.id == "kubejs:fluid_bread" || entity.block.up.id == "kubejs:fluid_bread") {
			entity.remainingFireTicks = 300
			entity.attack(event.level.damageSources().starve(),2)
			if (event.level.time%20 == 0) {
				entity.addFood(2,0)
				entity.saturation += 1
			}
		}
	})

})



