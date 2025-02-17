let ROTARY_CANNON = {}

ROTARY_CANNON.cooldown = 8

ROTARY_CANNON.shoot_bullet = function (event) {
	let obj = global.projectVellocity(event.player,4,0)
	let bullet = event.level.createEntity("immersive_aircraft:bullet")
	bullet.setOwner(event.player)
	bullet.setPosition(obj.x,obj.y,obj.z)
	bullet.setMotion(obj.xV,obj.yV,obj.zV)
	bullet.spawn()
}

ItemEvents.rightClicked('immersive_aircraft:rotary_cannon', event => {

	if (event.hand == "MAIN_HAND" && global.getSetting("CannonHandShot")) {
		let player = event.player
		if (global.consumePlayerItem(player,'minecraft:gunpowder',1)) {
			ROTARY_CANNON.shoot_bullet(event)
			global.playSound(event.level,[player.x,player.y,player.z],"immersive_aircraft:cannon","player")
			if (player.offHandItem.id == 'immersive_aircraft:rotary_cannon') global.itemAddCooldown(player,'immersive_aircraft:rotary_cannon',ROTARY_CANNON.cooldown/2)
			else global.itemAddCooldown(player,'immersive_aircraft:rotary_cannon',ROTARY_CANNON.cooldown)
			event.player.swing()
		} else {
			event.player.setStatusMessage(Text.white("Out of ammo!"))
		}
	}
})