ItemEvents.rightClicked('kubejs:xp_wand', event => {

	if (event.hand == 'MAIN_HAND') {

		let player = event.player
		let level = event.level
		let box = AABB.ofSize(player.getPosition(1),10,5,10)
		let damage_count = 0
		level.getEntitiesWithin(box).forEach(entity => {
			if (entity.living && entity.username != player.username && !entity.tags.contains("Kubejs_XpDrop")) {
				entity.tags.add("Kubejs_XpDrop")
				damage_count++
				
			}
		})
		global.playSound(level,[player.x,player.y,player.z],"minecraft:block.beacon.power_select","player",1,1)
		global.itemDamageAndBreak(level,player,damage_count)
		global.itemAddCooldown(player,'kubejs:xp_wand',20)
		event.player.swing()

	}
})

EntityEvents.death(event => {

	if (event.entity.tags.contains("Kubejs_XpDrop")) {
		event.entity.skipDropExperience()
		let pos = event.entity.getPosition(1)
		let xp_amount = (event.entity.getExperienceReward() / 3)
		let item = event.level.createEntity("minecraft:item")
		item.setNbt({Item:{"id":"create:experience_nugget","Count":1 + xp_amount}})
		item.setPosition(pos.x(),pos.y(),pos.z())
		item.spawn()
	}
})