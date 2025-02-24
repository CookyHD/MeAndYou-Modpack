
let FARMER_AXE = {}

FARMER_AXE.axe_cahrge_item = 'minecraft:wheat'
FARMER_AXE.axe_cooldown = 120

FARMER_AXE.randomAnimal = function() {
	let entity_list = [
		'minecraft:sheep',
		'minecraft:cow',
		'minecraft:pig',
		'minecraft:chicken',
		'minecraft:bat',
		'minecraft:squid'
	]
	return entity_list[Math.ceil((Math.random()*entity_list.length)-1)]
}

ItemEvents.entityInteracted('kubejs:farmer_axe', event => {

	let player = event.player
	let level = event.level
	let target = event.target

	if (event.hand == "MAIN_HAND" && !player.cooldowns.isOnCooldown('kubejs:farmer_axe')) {
		if (!target.tags.contains("Kubejs_DeathTransform") && !target.tags.contains("Kubejs_CantTransform") && target.living) {
			if (global.consumePlayerItem(player,FARMER_AXE.axe_cahrge_item,1)) {
				target.addTag("Kubejs_DeathTransform")
				global.itemDamageAndBreak(level,player,1)
				global.itemAddCooldown(player,'kubejs:farmer_axe',FARMER_AXE.axe_cooldown)
				global.playSound(level,[player.x,player.y,player.z],"minecraft:block.beacon.power_select","player")
				player.swing()
			} else {
				player.setStatusMessage(Text.red("No Wheat Available!"))
			}
		} else if (target.living) {
			player.setStatusMessage(Text.red("Has no Effect on this Entity"))
		}
	}

})

EntityEvents.death(event => {
	if (event.entity.tags.contains("Kubejs_DeathTransform")) {
		let entity = event.entity
		let mob = event.level.createEntity(FARMER_AXE.randomAnimal())
		mob.tags.add("Kubejs_CantTransform")
		mob.setPosition(entity.x,entity.y,entity.z)
		mob.spawn()
		global.playSound(event.level,[entity.x,entity.y,entity.z],"minecraft:entity.zombie_villager.cure","neutral")
	}
})