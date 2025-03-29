let ANCHOR_PICKAXE = {}

ANCHOR_PICKAXE.cahrge_item = 'minecraft:lapis_lazuli'
ANCHOR_PICKAXE.charge_count = 3
ANCHOR_PICKAXE.cooldown = 300
ANCHOR_PICKAXE.cast_damage = 8
ANCHOR_PICKAXE.cast_range = 6

ItemEvents.rightClicked('kubejs:anchor_pickaxe', event => {

	let player = event.player
	let level = event.level
	
	let box = AABB.ofSize(player.getPosition(1),ANCHOR_PICKAXE.cast_range*2,1,ANCHOR_PICKAXE.cast_range*2)
	let half_cast_range = ANCHOR_PICKAXE.cast_range / 2

	if (event.hand == 'MAIN_HAND') {
		if (global.consumePlayerItem(player,ANCHOR_PICKAXE.cahrge_item,ANCHOR_PICKAXE.charge_count)) {
			global.itemDamageAndBreak(level,player,1)
			global.itemAddCooldown(player,'kubejs:anchor_pickaxe',ANCHOR_PICKAXE.cooldown)
			level.getEntitiesWithin(box).filter(e => {
				if (e.living && e.username != player.username) return true
				else return false
			}).forEach(target => {
				let distance = 1.1 - ((player.distanceToEntity(target) - (target.bbWidth / 2)) / ANCHOR_PICKAXE.cast_range)
				target.attack(level.damageSources().playerAttack(player),ANCHOR_PICKAXE.cast_damage*distance)
				target.knockback(1.25*distance,player.x-target.x,player.z-target.z)
				target.potionEffects.add("slowness",100,2,false,false)
				if (level.dimension == "minecraft:the_nether") target.setRemainingFireTicks(300)
				else target.setTicksFrozen(300)
			})
			global.playSound(level,[player.x,player.y,player.z],"minecraft:item.trident.return","player",1,0.5)
			level.spawnParticles("dust_color_transition 0 0.5 1 1 0 1 1",false,player.x,player.y+0.5,player.z,half_cast_range,0.25,half_cast_range,300,0)
			level.spawnParticles("cloud",false,player.x,player.y+0.5,player.z,half_cast_range,0.25,half_cast_range,20,0.1)
			player.potionEffects.add("slowness",ANCHOR_PICKAXE.cooldown / 2,1,false,false)
			player.swing()
			player.sweepAttack()
		} else {
			player.setStatusMessage(Text.red("No Lapis Lazuli Available!"))
		}
	}

})