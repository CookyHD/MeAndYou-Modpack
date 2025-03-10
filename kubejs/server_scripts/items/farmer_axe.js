
let FARMER_AXE = {}

FARMER_AXE.axe_cahrge_item = 'minecraft:wheat'
FARMER_AXE.axe_cooldown = 100

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

ItemEvents.rightClicked('kubejs:farmer_axe', event => {

	if (event.hand == 'MAIN_HAND') {

		let player = event.player
		let level = event.level
		let box = AABB.ofSize(player.getPosition(1),8,4,8)
		let entitys = level.getEntitiesWithin(box).filter(e =>  {
			if (e.living && e.username != player.username && !e.potionEffects.isActive("kubejs:mob_death") && !e.tags.contains("Kubejs_CantTransform")) return true
			return false
		})
		if (!entitys.isEmpty()) {
			if (global.consumePlayerItem(player,FARMER_AXE.axe_cahrge_item,3)) {
				entitys.forEach(entity => {
					entity.potionEffects.add("kubejs:mob_death",3600,0,false,false)
				})
				global.playSound(level,[player.x,player.y,player.z],"minecraft:block.beacon.power_select","player",1,1)
				global.itemDamageAndBreak(level,player,1)
				global.itemAddCooldown(player,'kubejs:farmer_axe',FARMER_AXE.axe_cooldown)
				event.player.swing()
			} else {
				player.setStatusMessage(Text.red("No Wheat Available!"))
			}
		} else {
			player.setStatusMessage(Text.red("No Tagets Found!"))
		}

	}
})

EntityEvents.death(event => {
	if (event.entity.potionEffects.isActive("kubejs:mob_death")) {
		let entity = event.entity
		let mob = event.level.createEntity(FARMER_AXE.randomAnimal())
		mob.tags.add("Kubejs_CantTransform")
		mob.setPosition(entity.x,entity.y,entity.z)
		mob.spawn()
		global.playSound(event.level,[entity.x,entity.y,entity.z],"minecraft:entity.zombie_villager.cure","neutral")
	}
})