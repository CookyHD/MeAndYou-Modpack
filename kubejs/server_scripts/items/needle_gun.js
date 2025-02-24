let NEEDLE_GUN = {}

NEEDLE_GUN.ammo = "kubejs:needle_ammo"
NEEDLE_GUN.magazine = "kubejs:needle_magazine"
NEEDLE_GUN.cooldown = 10

NEEDLE_GUN.shoot_needle = (event) => {
	let obj = global.projectVellocity(event.player,6,0)
	let arrow = event.level.createEntity("arrow")
	arrow.setNbt({Silent:1,pickup:0,damage:2,PierceLevel:3})
	arrow.tags.add("Kubejs_Arrow")
	arrow.setOwner(event.player)
	arrow.setPosition(obj.x,obj.y,obj.z)
	arrow.setMotion(obj.xV,obj.yV,obj.zV)
	arrow.spawn()
}

ItemEvents.rightClicked("kubejs:needle_gun", event => {

	if (event.hand == "MAIN_HAND") {

		if (event.item.hasNBT()) {

			let item = event.item
			let player = event.player
			let level = event.level
	
			let NBT = item.getNbt()

			if (NBT["Ammo"] == 0) {
				if (global.consumePlayerItem(player,NEEDLE_GUN.ammo,1)) {
					global.itemAddCooldown(player,"kubejs:needle_gun",NEEDLE_GUN.cooldown * 2)
					global.playSound(level,[player.x,player.y,player.z],"item.spyglass.use","player",1.5,0.5)
					player.swing()
					NBT["Ammo"] = 12
					player.setStatusMessage(Text.blue("Ammo: " + NBT["Ammo"]))
				} else {
					player.setStatusMessage(Text.red("No Ammo reserves!"))
				}
			} else {
				if (NBT["Ammo"] == 1 && !player.creative) player.give(NEEDLE_GUN.magazine)
				global.itemAddCooldown(player,"kubejs:needle_gun",NEEDLE_GUN.cooldown)
				global.itemDamageAndBreak(level,player,1)
				global.playSound(level,[player.x,player.y,player.z],"entity.snowball.throw","player",0.8,1.8)
				NEEDLE_GUN.shoot_needle(event)
				player.swing()
				NBT["Ammo"]--
				player.setStatusMessage(Text.blue("Ammo: " + NBT["Ammo"]))
			}

			if (item.damageValue == item.maxDamage && NBT["Ammo"] > 1) {
				event.server.scheduleInTicks(1, () => {
					player.give(NEEDLE_GUN.magazine)
					player.give(Math.floor(NBT["Ammo"] / 2)+"x arrow")
				})
			}

			item.setNbt(NBT)
		}
	}
})

global.projectileImpacts.push(
	/**
	* @param {Internal.ProjectileImpactEvent} event
	*/
(event) => {
	if (event.entity.tags.contains("Kubejs_Arrow")) {
		if (event.rayTraceResult.type == "entity") {
			let target = event.rayTraceResult.entity
			let NBT = event.entity.getNbt()
			if (target.isLiving() && event.entity.getNbt()["PierceLevel"] > 0) {
				target.setRemainingFireTicks(300)
			}
			NBT["PierceLevel"]--
			event.entity.setNbt(NBT)
		}
		if (event.rayTraceResult.type == "block") {
			event.entity.kill()
		}
	}
})