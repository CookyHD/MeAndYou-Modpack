
PlayerEvents.tick(event => {

	let player = event.player
	
	function check() {
		let bool = false
		player.getHandSlots().forEach(e => {
			if (e.hasTag("kubejs:heated")) bool = true
		})
		return bool
	}

	if (check()) {
		player.remainingFireTicks = 100
		player.attack(player.damageSources().onFire(),0.5)
	}
})
