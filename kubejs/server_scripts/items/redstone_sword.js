let REDSTONE_SWORD = {}

REDSTONE_SWORD.cahrge_item = 'minecraft:redstone'
REDSTONE_SWORD.charge_count = 3
REDSTONE_SWORD.cooldown = 60
REDSTONE_SWORD.cast_damage = 9
REDSTONE_SWORD.cast_range = 5


ItemEvents.rightClicked('kubejs:redstone_sword', event => {

	let player = event.player
	let level = event.level
	
	let box = AABB.ofSize(player.getPosition(1),REDSTONE_SWORD.cast_range*2,1,REDSTONE_SWORD.cast_range*2)
	let half_cast_range = REDSTONE_SWORD.cast_range / 2
	let part_amount = 25 * REDSTONE_SWORD.cast_range

	if (event.hand == 'MAIN_HAND') {
		if (global.consumePlayerItem(player,REDSTONE_SWORD.cahrge_item,REDSTONE_SWORD.charge_count)) {
			global.itemDamageAndBreak(level,player,1)
			global.itemAddCooldown(player,'kubejs:redstone_sword',REDSTONE_SWORD.cooldown)
			level.getEntitiesWithin(box).forEach(target => {
				if (target.living && target.username != player.username) {
					let distance = 1.1 - ((player.distanceToEntity(target) - (target.bbWidth / 2))  / REDSTONE_SWORD.cast_range)
					target.attack(level.damageSources().playerAttack(player),REDSTONE_SWORD.cast_damage*distance)
				}
			})
			global.playSound(level,[player.x,player.y,player.z],"minecraft:item.trident.return","player",1,2)
			level.spawnParticles("dust_color_transition 1 0 0 1 1 1 1",false,player.x,player.y+0.5,player.z,half_cast_range,0.5,half_cast_range,part_amount,0)
			level.spawnParticles("dust 1 0 0 0.5",false,player.x,player.y+0.5,player.z,half_cast_range,0.5,half_cast_range,part_amount*4,0)
			player.swing()
			player.sweepAttack()
		} else {
			player.setStatusMessage(Text.red("No Redstone Dust Available!"))
		}
	}

})