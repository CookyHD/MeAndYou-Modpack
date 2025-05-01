global.ghast_shoot = (entity,player,distance) => {
	let lookAnglePlayer = player.getLookAngle()
	let lookAngleEntity = entity.getLookAngle()
	let x = entity.x + (lookAngleEntity.x() * distance)
	let y = (entity.y + 0.8) + (lookAngleEntity.y() * distance)
	let z = entity.z + (lookAngleEntity.z() * distance)
	let xV = (lookAnglePlayer.x() * 0.12) + entity.motionX
	let yV = (lookAnglePlayer.y() * 0.12) + entity.motionY
	let zV = (lookAnglePlayer.z() * 0.12) + entity.motionZ
	return {"x":x, "y":y, "z":z, "xV":xV, "yV":yV, "zV":zV}
}

ItemEvents.rightClicked("kubejs:fire_wand",event => {
	if (event.hand == "MAIN_HAND") {
		let player = event.player
		if (event.player.vehicle && event.player.vehicle.type == "happyghastmod:happy_ghast") {
			let entity = event.player.getVehicle()
			let obj = global.ghast_shoot(entity,player,3)
			let snowball = event.level.createEntity("fireball")
			snowball.setOwner(entity)
			snowball.setNbt({"power":[obj.xV,obj.yV,obj.zV],"ExplosionPower":1})
			snowball.setPosition(obj.x,obj.y,obj.z)
			snowball.spawn()
			global.playSound(event.level,[entity.x,entity.y,entity.z],"minecraft:entity.ghast.warn","player")
			global.playSound(event.level,[entity.x,entity.y,entity.z],"minecraft:entity.ghast.shoot","player")
			player.swing()
			global.itemDamageAndBreak(event.level,player,1)
			global.itemAddCooldown(player,"kubejs:fire_wand",300)
		} else {
			let box = AABB.ofSize(player.getPosition(1),32,128,32)
			let entitys = event.level.getEntitiesWithin(box).filter(e => {
				return (e.type == "happyghastmod:happy_ghast" || e.type == "happyghastmod:ghastling")
			})
			if (!entitys.isEmpty()) {
				entitys.forEach(entity => {
					let distance = entity.distanceToEntity(player)
					let angle = entity.getPosition(1).vectorTo(player.getPosition(1))
					entity.setMotion((angle.x()*distance)*0.008,(angle.y()*distance)*0.008,(angle.z()*distance)*0.008)
				})
				player.swing()
				global.playSound(event.level,[player.x,player.y,player.z],"minecraft:entity.ghast.shoot","player")
				global.itemDamageAndBreak(event.level,player,1)
				global.itemAddCooldown(player,'kubejs:fire_wand',20)
			} else {
				player.setStatusMessage(Text.red("No Ghast to Pull"))
			}

		}
	}
})