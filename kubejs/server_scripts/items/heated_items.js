
PlayerEvents.tick(event => {
	if (event.level.time % 20 == 0) {

		let player = event.player
		
		let bool = false
		player.getHandSlots().forEach(e => {
			if (e.hasTag("kubejs:heated")) bool = true
		})
	
		if (bool) {
			player.remainingFireTicks = 100
			player.attack(player.damageSources().onFire(),2)
		}
	}
})
