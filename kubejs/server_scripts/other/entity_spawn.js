
let ENTITY_SPAWN = {

	creeper_chance : 5,
	spider_inv_chance : 10,
	spider_web_chance : 25,
	skeleton_chance : 25,
	wither_skeleton_chance : 50,
	zombie_chance : 25
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
	}
	
	if (spider && global.chance(ENTITY_SPAWN.spider_inv_chance,100)) {
		ENTITY_SPAWN.spider_effect(event.entity)
	}

	if (spider && global.chance(ENTITY_SPAWN.spider_web_chance,100)) {
		event.entity.tags.add("Kubejs_Weber")
	}

	if (zombie && global.chance(ENTITY_SPAWN.zombie_chance,100)) {
		if (event.entity.getNbt()["IsBaby"] != 1) {
			event.entity.tags.add("Kubejs_Buff")
			event.entity.modifyAttribute("minecraft:generic.movement_speed",global.randomUUID(),0.13,"addition")
			event.entity.setAttributeBaseValue("minecraft:generic.max_health",40)
			event.entity.setAttributeBaseValue("minecraft:generic.armor",6)
			event.entity.setAttributeBaseValue("minecraft:generic.attack_damage",6)
			event.entity.setAttributeBaseValue("minecraft:generic.attack_knockback",2)
			event.entity.setHealth(40)
		}
	}

	let war = false

	if (skeleton && global.chance(ENTITY_SPAWN.skeleton_chance,100)) {
		if (!event.entity.getMainHandItem().isEnchanted()) {
			event.entity.tags.add("Kubejs_Warrior")
			event.entity.setMainHandItem("minecraft:bow")
			war = true
		}
	}

	if (!war && event.entity.type == "minecraft:wither_skeleton" && global.chance(ENTITY_SPAWN.wither_skeleton_chance,100)) {
		if (!event.entity.getMainHandItem().isEnchanted()) event.entity.setMainHandItem("minecraft:bow")
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

