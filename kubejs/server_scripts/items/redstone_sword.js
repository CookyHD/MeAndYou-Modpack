let REDSTONE_SWORD = {}

REDSTONE_SWORD.cahrge_item = 'minecraft:redstone'
REDSTONE_SWORD.charge_count = 3
REDSTONE_SWORD.cooldown = 100
REDSTONE_SWORD.laser_damage = 16
REDSTONE_SWORD.cast_damage = 8
REDSTONE_SWORD.cast_range = 4

/**
 * @param {Internal.ItemClickedEventJS} event
 */
REDSTONE_SWORD.shoot_laser = (event) => {
	global.laser(
		event.level,
		event.player,
		16,
		0.5,
		REDSTONE_SWORD.laser_damage,
		0,
		0,
		(i,x,y,z) => {
			if (i % 1 <= 0.1) event.level.spawnParticles("end_rod",false,x,y,z,0.1,0.1,0.1,1,0)
			if (i % 2 <= 0.1) event.level.spawnParticles("dust_color_transition 1 0 0 1 1 0 0.5",false,x,y,z,0.25,0.25,0.25,8,0)
		},
		null
	)
}

ItemEvents.rightClicked('kubejs:redstone_sword', event => {

	let player = event.player
	let level = event.level
	
	let box = AABB.ofSize(player.getPosition(1),REDSTONE_SWORD.cast_range*2,1,REDSTONE_SWORD.cast_range*2)
	let half_cast_range = REDSTONE_SWORD.cast_range / 2

	if (event.hand == 'MAIN_HAND') {
		if (global.consumePlayerItem(player,REDSTONE_SWORD.cahrge_item,REDSTONE_SWORD.charge_count)) {
			global.itemDamageAndBreak(level,player,1)
			global.itemAddCooldown(player,'kubejs:redstone_sword',REDSTONE_SWORD.cooldown)
			REDSTONE_SWORD.shoot_laser(event)
			level.getEntitiesWithin(box).filter(e => {
				if (e.living && e.username != player.username) return true
				else return false
			}).forEach(target => {
				let distance = 1.1 - ((player.distanceToEntity(target) - (target.bbWidth / 2)) / REDSTONE_SWORD.cast_range)
				target.attack(level.damageSources().playerAttack(player),REDSTONE_SWORD.cast_damage*distance)
				player.knockback(0.75*distance,player.x-target.x,player.z-target.z)
			})
			global.playSound(level,[player.x,player.y,player.z],"minecraft:item.trident.return","player",1,2)
			level.spawnParticles("dust_color_transition 1 0 0 1 1 0 0.5",false,player.x,player.y+0.5,player.z,half_cast_range,0.25,half_cast_range,200,0)
			level.spawnParticles("end_rod",false,player.x,player.y+0.5,player.z,half_cast_range,0.25,half_cast_range,20,0)
			player.potionEffects.add("slowness",REDSTONE_SWORD.cooldown / 2,1,false,false)
			player.swing()
			player.sweepAttack()
		} else {
			player.setStatusMessage(Text.red("No Redstone Dust Available!"))
		}
	}

})