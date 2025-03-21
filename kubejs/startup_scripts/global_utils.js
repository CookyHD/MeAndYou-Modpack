// priority: 100

const $UUID = Java.loadClass("java.util.UUID")
global.randomUUID = function () {
	return $UUID.randomUUID()
}

/**
 * @param {Internal.Level} level
 * @param {number[]} pos
 * @param {string} sound_name
 * @param {string} type
 * @param {number} volume
 * @param {number} pitch
 * @return {void}
 */
global.playSound = function (level,pos,sound_name,type,volume,pitch,target) {
	if (volume == null) volume = 1
	if (pitch == null) pitch = 1
	if (target == null) target = "@a"
	//Temp Fix
	level.server.runCommandSilent(`execute in ${level.dimension} run playsound ${sound_name} ${type} ${target} ${pos[0]} ${pos[1]} ${pos[2]} ${volume} ${pitch}`)
}

/**
 * @param {Internal.Player} player
 * @param {Internal.Item_} id
 * @param {number} amount
 * @returns {boolean}
 */
global.consumePlayerItem = function (player,id,amount) {
	let bool = false
	if (!player.creative) {
		player.inventory.getAllItems().forEach(item => {
			if(!bool && item.id == id && item.count >= amount) {
				bool = true
				item.count -= amount
			}
		})
	} else {
		bool = true
	}
	return bool
}

/**
 * @param {Internal.Level} level
 * @param {Internal.Player} player
 * @param {number} amount
 * @return {void}
 */
global.itemDamageAndBreak = function (level,player,amount) {
	if (!player.creative) player.damageHeldItem('MAIN_HAND',amount , () => {
		level.broadcastEntityEvent(player,47)
	})
}

/**
 * @param {Internal.Player} player
 * @param {Internal.Item_[]} items
 * @param {number} ticks
 * @return {void}
 */
global.itemAddCooldown = function (player,ids,ticks) {

	let arr = []
	if (ids.forEach != null) arr = ids
	else arr[0] = ids

	if (!player.creative && !player.fake) {
		arr.forEach(e => {
			player.addItemCooldown(e, ticks)
		})
	}
}

/**
 * @param {Internal.Entity} entity
 * @param {number} power
 * @param {number} distance
 * @return {object}
 */
global.projectVellocity = function (entity,power,distance) {
	if (distance == null) distance = 0
	let lookAngle = entity.getLookAngle()
	let x = entity.x + (lookAngle.x() * distance)
	let y = (entity.y + entity.getEyeHeight()) + (lookAngle.y() * distance)
	let z = entity.z + (lookAngle.z() * distance)
	let xV = (lookAngle.x() * power) + entity.motionX
	let yV = (lookAngle.y() * power) + entity.motionY
	let zV = (lookAngle.z() * power) + entity.motionZ
	return {"x":x, "y":y, "z":z, "xV":xV, "yV":yV, "zV":zV}
}

/**
 * @param {Internal.Block} block
 * @return {boolean}
 */
global.isAir = function (block) {
	let bool = false
	switch (block.id) {
		case "minecraft:air":
		case "minecraft:cave_air":
		case "minecraft:void_air":
			bool = true
	}
	return bool
}

/**
 * @param {number} power
 * @return {number}
 */
global.calcLight = function (power) {
	return (1 / 15) * power
}

global.NessieColors = [
	'green',
	'red',
	'pink',
	'blue'
]

global.SettingsNames = [
	"StartingItems",
	"CreativeCrafting",
	"CustomCapes",
	"CustomParticle",
	"CannonHandShot",
	"RememberMe",
	"HardMobs",
	"DebugTickOff"
]

/**
 * @param {string} name
 * @param {boolean} mode
 * @return {void}
 */
global.setSetting = function (name,mode) {
	let data = {}
	global.SettingsNames.forEach(e => {
		if (e == name) {
			data[e] = mode
		} else {
			data[e] = global.getSetting(e) ? global.getSetting(e) : false
		}
	})
	JsonIO.write('kubejs/game_settings/config.json',data)
}

/**
 * @param {number} num
 * @return {number}
 */
global.random = (num) => {

	let randnum = Math.random() * num
	if (randnum > (num / 2)) {
		return Math.ceil(randnum)
	} else {
		return Math.floor(randnum)
	}
}

/**
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */
global.chance = (min,max) => {

	let bool = false
	let num = global.random(max)
	if (min > num) bool = true
	return bool
}

/**
 * @param {string} name
 * @return {boolean}
 */
global.getSetting = function (name) {
	let data = JsonIO.read('kubejs/game_settings/config.json')
	return data[name]
}

/**
 * @param {Internal.Level} level
 * @param {Internal.Player} player
 * @param {number} laser_lenght
 * @param {number} laser_width
 * @param {number} laser_damage
 * @param {number} laser_pirce
 * @param {number} cause_fire
 * @param {function(number,number,number,number)} each_func
 * @param {function(Internal.Entity,number,number,number)} entity_func
 * @return {void}
 */
global.laser = function (level,player,laser_lenght,laser_width,laser_damage,laser_pirce,cause_fire,each_func,entity_func) {

	//Laser Settings
	let LASER_LENGHT = laser_lenght
	let LASER_DAMAGE = laser_damage
	let LASER_PIRCE = laser_pirce
	let CAUSE_FIRE = cause_fire
	let LASER_WIDTH = laser_width

	let pos = player.getPosition(1)
	let angle = player.getLookAngle()
	let eye = player.getEyeHeight()

	for (let i = 1; i < LASER_LENGHT; i += 0.1) {

		let x = pos.x() + angle.x() * i
		let y = pos.y() + eye + angle.y() * i
		let z = pos.z() + angle.z() * i

		let box = AABB.ofSize(new Vec3d(x,y,z),LASER_WIDTH,LASER_WIDTH,LASER_WIDTH)

		level.getBlockCollisions(player,box).forEach(voxel => {
			if (box.intersect(voxel.bounds())) {
				i += LASER_LENGHT
			}
		})
		level.getEntitiesWithin(box).forEach(e => {
			if (e.username != player.username && e.living) {
				if (e.attack(level.damageSources().playerAttack(player),LASER_DAMAGE)) {
					if (CAUSE_FIRE > 0) e.remainingFireTicks += CAUSE_FIRE
					if (LASER_PIRCE <= 0) i += LASER_LENGHT
					LASER_PIRCE--
				}
				if (entity_func) entity_func(e,x,y,z)
			}
		})
		if (each_func) each_func(i,x,y,z)
	}
}