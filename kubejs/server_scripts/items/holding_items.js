
PlayerEvents.tick(event => {
	if (event.level.time % 20 == 0) {

		let player = event.player

		player.getHandSlots().forEach(e => {
			if (e.hasTag("kubejs:heated")) {
				player.remainingFireTicks = 100
				player.attack(player.damageSources().onFire(),2)
			}
			if (e.hasTag("kubejs:radioactive")) {
				player.potionEffects.add("wither",100,1,false,true)
			}
		})
	}
})
