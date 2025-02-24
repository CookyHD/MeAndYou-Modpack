
let FULL_SET = {}

FULL_SET.set_update = function(event,prefix,callback) {
	let player = event.player
	let helmet = player.getHeadArmorItem().id.includes(prefix)
	let chestplate = player.getChestArmorItem().id.includes(prefix)
	let leggings = player.getLegsArmorItem().id.includes(prefix)
	let boots = player.getFeetArmorItem().id.includes(prefix)
	if (helmet && chestplate && leggings && boots) {
		callback()
	}
}

PlayerEvents.tick(event => {
	if (event.level.time % 20 == 0) {
		FULL_SET.set_update(event,"kubejs:tech_",() => {
			event.player.getPotionEffects().add("strength",20,0,true,false)
		})
		FULL_SET.set_update(event,"kubejs:star_",() => {
			if ((event.player.health / event.player.maxHealth) <= 0.2) {
				event.player.getPotionEffects().add("strength",20,1,true,false)
				event.player.getPotionEffects().add("speed",20,0,true,false)
				event.player.getPotionEffects().add("regeneration",60,0,true,false)
			}	
		})
		FULL_SET.set_update(event,"kubejs:bloody_",() => {
			event.player.heal(0.5)
			if ((event.player.health / event.player.maxHealth) <= 0.2) {
				event.player.getPotionEffects().add("strength",20,0,true,false)
				event.player.getPotionEffects().add("speed",20,0,true,false)
				event.player.getPotionEffects().add("regeneration",60,1,true,false)
			}
		})
	}
})