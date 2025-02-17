let SCATTERED_SWORD = {}

SCATTERED_SWORD.spawnSarpnell = function (event,power) {
	let obj = global.projectVellocity(event.player,0.8,0)
	let snowball = event.level.createEntity("snowball")
	snowball.setNbt({Tags:["Kubejs_Sharpnell"],Item:{id:"kubejs:sharpnell",Count:1}})
	snowball.setOwner(event.player)
	snowball.setPosition(obj.x,obj.y,obj.z)
	let vec = new Vec3d(obj.xV,obj.yV,obj.zV).offsetRandom(event.level.getRandom(),power)
	snowball.setMotion(vec.x(),vec.y(),vec.z())
	snowball.spawn()
}

ItemEvents.rightClicked('kubejs:scattered_sword', event => {
	
	if (event.hand == "MAIN_HAND") {
		if (global.consumePlayerItem(event.player,'kubejs:sharpnell',1)) {
			global.itemDamageAndBreak(event.level,event.player,1)
			global.itemAddCooldown(event.player,'kubejs:scattered_sword',22)
			for (let i = 0; i < 3; i++) {
				SCATTERED_SWORD.spawnSarpnell(event,0.4)
			}
			event.player.sweepAttack()
			event.player.swing()
			global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"minecraft:entity.player.attack.sweep","player",1,1)
		} else {
			event.player.setStatusMessage(Text.red("No Sharpnell Available!"))
		}
	}
})

ItemEvents.destroyed("kubejs:tech_sword", event => {
	
	let new_item = Item.of("kubejs:scattered_sword")
	new_item.setNbt(event.item.getNbt())
	new_item.setDamageValue(0)

	event.server.scheduleInTicks(1, () => {
		event.player.give(new_item)
	})
})

global.projectileImpacts.push(
	/**
	* @param {Internal.ProjectileImpactEvent} event
	*/
(event) => {
	if (event.entity.tags.contains("Kubejs_Sharpnell")) {
		if (event.rayTraceResult.type == "entity") {
			let target = event.rayTraceResult.entity
			if (!target.attack(target.level.damageSources().playerAttack(event.entity.getOwner()),5)) {
				event.setCanceled(true)
			}

		}
	}
})