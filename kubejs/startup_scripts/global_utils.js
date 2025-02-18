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
	level.runCommandSilent(`playsound ${sound_name} ${type} ${target} ${pos[0]} ${pos[1]} ${pos[2]} ${volume} ${pitch}`)
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
	"CannonHandShot",
	"RememberMe",
	"HardMobs"
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