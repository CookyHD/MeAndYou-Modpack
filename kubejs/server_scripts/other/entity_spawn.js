
let ENTITY_SPAWN = {

	creeper_chance : 5,
	spider_inv_chance : 10,
	spider_web_chance : 15,
	skeleton_chance : 15,
	wither_skeleton_chance : 25,
	zombie_chance : 15
}


/**
* @param {Internal.LivingEntity} entity
*/
ENTITY_SPAWN.spider_effect = (entity) => {

	let num = global.random(100)
	let effects = [
		"minecraft:speed",
		"minecraft:strength",
		"minecraft:regeneration",
		"minecraft:invisibility"
	]

	let noEffect = true
	effects.forEach(e => {
		if (entity.potionEffects.isActive(e)) noEffect = false
	})

	if (noEffect) {
		if (num < 40) entity.potionEffects.add("minecraft:speed",-1,0,false,true)
		else if (num < 60) entity.potionEffects.add("minecraft:strength",-1,0,false,true)
		else if (num < 80) entity.potionEffects.add("minecraft:regeneration",-1,0,false,true)
		else if (num < 100) entity.potionEffects.add("minecraft:invisibility",-1,0,false,true)
	}
} 


EntityEvents.spawned(event => {

	if (global.getSetting("HardMobs") && !event.entity.tags.contains("Kubejs_MobEdit")) {

		let edit = false

		let spider = false
		if (event.entity.type == "minecraft:spider") spider = true
		if (event.entity.type == "minecraft:cave_spider") spider = true

		let skeleton = false
		if (event.entity.type == "minecraft:skeleton") skeleton = true
		if (event.entity.type == "minecraft:wither_skeleton") skeleton = true
		if (event.entity.type == "minecraft:stray") skeleton = true

		let zombie = false
		if (event.entity.type == "minecraft:zombie") zombie = true
		if (event.entity.type == "minecraft:husk") zombie = true

		if (event.entity.type == "minecraft:creeper" && global.chance(ENTITY_SPAWN.creeper_chance,100)) {
			let NBT = event.entity.getNbt()
			NBT["powered"] = true
			event.entity.setNbt(NBT)
			edit = true
		}
		
		if (spider && global.chance(ENTITY_SPAWN.spider_inv_chance,100)) {
			ENTITY_SPAWN.spider_effect(event.entity)
			edit = true
		}

		if (spider && global.chance(ENTITY_SPAWN.spider_web_chance,100)) {
			event.entity.tags.add("Kubejs_Weber")
			edit = true
		}

		if (zombie && global.chance(ENTITY_SPAWN.zombie_chance,100)) {
			if (event.entity.getNbt()["IsBaby"] != 1) {
				event.entity.tags.add("Kubejs_Buff")
				event.entity.setAttributeBaseValue("minecraft:generic.movement_speed",0.3450000062584877)
				event.entity.setAttributeBaseValue("minecraft:generic.max_health",40)
				event.entity.setAttributeBaseValue("minecraft:generic.armor",4)
				event.entity.setAttributeBaseValue("minecraft:generic.attack_damage",5)
				event.entity.setHealth(40)
				edit = true
			}
		}

		let war = false

		if (skeleton && global.chance(ENTITY_SPAWN.skeleton_chance,100)) {
			if (!event.entity.getMainHandItem().isEnchanted()) {
				event.entity.tags.add("Kubejs_Warrior")
				event.entity.setMainHandItem("minecraft:bow")
				war = true
				edit = true
			}
		}

		if (!war && event.entity.type == "minecraft:wither_skeleton" && global.chance(ENTITY_SPAWN.wither_skeleton_chance,100)) {
			if (!event.entity.getMainHandItem().isEnchanted()) {
				event.entity.setMainHandItem("minecraft:bow")
				edit = true
			}
		}

		if (edit) event.entity.tags.add("Kubejs_MobEdit")
	}

	if (event.entity.type == "iceandfire:dragon_arrow") {
		let NBT = event.entity.getNbt()
		NBT["damage"] *= 0.4
		event.entity.setNbt(NBT)
	}

	if (event.entity.type == "iceandfire:ghost") {
		event.entity.setAttributeBaseValue("minecraft:generic.attack_damage",1)
		event.entity.setAttributeBaseValue("minecraft:generic.max_health",10)
	}
})

