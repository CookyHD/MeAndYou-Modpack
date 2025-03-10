ItemEvents.rightClicked('kubejs:xp_wand', event => {

	if (event.hand == 'MAIN_HAND') {

		let player = event.player
		let level = event.level
		let box = AABB.ofSize(player.getPosition(1),12,6,12)
		let entitys = level.getEntitiesWithin(box).filter(e =>  {
			if (e.living && e.username != player.username && !e.potionEffects.isActive("kubejs:xp_transform")) return true
			return false
		})
		if (!entitys.isEmpty()) {
			entitys.forEach(entity => {
				entity.potionEffects.add("kubejs:xp_transform",3600,0,false,false)
			})
			global.playSound(level,[player.x,player.y,player.z],"minecraft:block.beacon.power_select","player",1,1)
			global.itemDamageAndBreak(level,player,1)
			global.itemAddCooldown(player,'kubejs:xp_wand',20)
			event.player.swing()
		} else {
			player.setStatusMessage(Text.red("No Tagets Found!"))
		}

	}
})

EntityEvents.death(event => {
	if (event.entity.potionEffects.isActive("kubejs:xp_transform")) {
		event.entity.skipDropExperience()
	}
})

EntityEvents.drops(event => {
	if (event.entity.potionEffects.isActive("kubejs:xp_transform")) {
		let xp_amount = Math.ceil(event.entity.getExperienceReward() / 3)
		event.addDrop(xp_amount+"x create:experience_nugget",1)
	}
})