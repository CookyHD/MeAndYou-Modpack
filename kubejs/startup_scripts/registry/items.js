ItemEvents.toolTierRegistry(event => {
	event.add('star', tier => {
		tier.uses = 3385
		tier.speed = 12
		tier.attackDamageBonus = 5
		tier.level = 4
		tier.enchantmentValue = 22
		tier.repairIngredient = '#kubejs:star_repair'
	})

	event.add('creativ', tier => {
		tier.uses = 5080
		tier.speed = 14
		tier.attackDamageBonus = 6
		tier.level = 4
		tier.enchantmentValue = 22
		tier.repairIngredient = '#kubejs:creativ_repair'
	})

	event.add('tech', tier => {
		tier.uses = 780
		tier.speed = 8
		tier.attackDamageBonus = 3
		tier.level = 3
		tier.enchantmentValue = 14
		tier.repairIngredient = '#kubejs:tech_repair'
	})

	event.add('bread', tier => {
		tier.uses = 131
		tier.speed = 4
		tier.attackDamageBonus = 1
		tier.level = 2
		tier.enchantmentValue = 5
		tier.repairIngredient = '#forge:bread'
	})
})

ItemEvents.armorTierRegistry(event => {
	event.add('star', tier => {
		tier.durabilityMultiplier = 56
		tier.slotProtections = [5, 8, 10, 5]
		tier.enchantmentValue = 25
		tier.equipSound = 'minecraft:item.armor.equip_diamond'
		tier.repairIngredient = '#kubejs:star_repair'
		tier.toughness = 3
		tier.knockbackResistance = 0.1
	})

	event.add('tech', tier => {
		tier.durabilityMultiplier = 22
		tier.slotProtections = [3, 6, 8, 3]
		tier.enchantmentValue = 9
		tier.equipSound = 'minecraft:item.armor.equip_iron'
		tier.repairIngredient = '#kubejs:tech_repair'
		tier.toughness = 1
		tier.knockbackResistance = 0
	})

	event.add('bloody', tier => {
		tier.durabilityMultiplier = 56
		tier.slotProtections = [3, 6, 8, 3]
		tier.enchantmentValue = 25
		tier.equipSound = 'minecraft:item.armor.equip_diamond'
		tier.repairIngredient = '#kubejs:star_repair'
		tier.toughness = 3
		tier.knockbackResistance = 0
	})
})

StartupEvents.registry("item", (event) => {

	let StarPrefix = "Starrite "
	let TechPrefix = "Techit "

	function RegHammer(name,display,tier) {
		return event.create(name,"paxel")
		.displayName(display)
		.attackDamageBaseline(1)
		.tier(tier)
	}

	event.create("xp_converter_rel")
	.displayName("Xp Convorter")
	.unstackable()

	event.create("xp_converter_knw")
	.displayName("Xp Convorter")
	.unstackable()

	event.create("logo")
	.displayName("Logo")
	.unstackable()

	event.create("needle_gun")
	.displayName("Needle Gun")
	.maxDamage(1536)
	.modifyAttribute("minecraft:generic.attack_damage",global.randomUUID(),1,"addition")


	event.create("needle_ammo")
	.displayName("Needle Ammo")
	.maxStackSize(16)

	event.create("needle_magazine")
	.displayName("Needle Magazine")
	.maxStackSize(16)

	event.create("sharpnell")
	.displayName("Sharpnell")
	.maxStackSize(16)

	event.create("xp_wand")
	.displayName("Rod of Xp")
	.maxDamage(512)
	.unstackable()

	event.create("mud_ball")
	.displayName("Mud Ball")
	.maxStackSize(16)

	event.create("ship_locator")
	.displayName("Ship Locator")
	.maxDamage(12)
	.unstackable()

	event.create("copper_compass")
	.displayName("Copper Compass")
	.maxDamage(4)
	.unstackable()

	event.create("bedrock_remover")
	.displayName("Bedrock Charge")
	.maxDamage(8)
	.unstackable()

	let reach = global.randomUUID()
	let konckback = global.randomUUID()

	event.create("redstone_sword","sword")
	.displayName("Redstone Sword")
	.tier('star')
	.speedBaseline(-3.2)
	.attackDamageBaseline(7)
	.modifyAttribute("generic.attack_knockback",konckback,0.5,"ADDITION")
	.modifyAttribute("generic.armor",global.randomUUID(),2,"ADDITION")
	.modifyAttribute("forge:entity_reach",reach,2,"ADDITION")

	event.create("farmer_axe","axe")
	.displayName("Farmer Axe")
	.tier('star')
	.speedBaseline(-3.7)
	.attackDamageBaseline(12)
	.modifyAttribute("generic.attack_knockback",konckback,0.5,"ADDITION")
	.modifyAttribute("forge:entity_reach",reach,2,"ADDITION")

	event.create("tech_sword","sword")
	.displayName(TechPrefix + "Sword")
	.tier('tech')
	.maxDamage(390)

	event.create("scattered_sword","sword")
	.displayName("Scattered Sword")
	.tier('tech')
	.speedBaseline(-2.2)
	.attackDamageBaseline(1)
	.maxDamage(390)

	event.create("tech_axe","axe")
	.displayName(TechPrefix + "Axe")
	.tier('tech')
	.speedBaseline(-3)
	.attackDamageBaseline(5)

	event.create("tech_shovel","shovel")
	.displayName(TechPrefix + "Shovel")
	.tier('tech')

	event.create("tech_pickaxe","pickaxe")
	.displayName(TechPrefix + "Pickaxe")
	.tier('tech')

	event.create("tech_hoe","hoe")
	.displayName(TechPrefix + "Hoe")
	.tier('tech')
	.speedBaseline(0)
	.attackDamageBaseline(-3)

	RegHammer("tech_hammer",TechPrefix + "Smasher","tech")

	event.create("bread_sword","sword")
	.displayName("Bread Sword")
	.tier('bread')

	event.create("bread_axe","axe")
	.displayName("Bread Axe")
	.tier('bread')
	.speedBaseline(-3.2)
	.attackDamageBaseline(7)

	event.create("bread_shovel","shovel")
	.displayName("Bread Shovel")
	.tier('bread')

	event.create("bread_pickaxe","pickaxe")
	.displayName("Bread Pickaxe")
	.tier('bread')

	event.create("bread_hoe","hoe")
	.displayName("Bread Hoe")
	.tier('bread')
	.speedBaseline(-2)
	.attackDamageBaseline(-1)

	RegHammer("bread_hammer","Bread Smasher","bread")

	event.create("tech_helmet", "helmet")
	.displayName(TechPrefix + "Helmet")
	.tier('tech')

	event.create("tech_chestplate", "chestplate")
	.displayName(TechPrefix + "Chestplate")
	.tier('tech')

	event.create("tech_leggings", "leggings")
	.displayName(TechPrefix + "Leggings")
	.tier('tech')

	event.create("tech_boots", "boots")
	.displayName(TechPrefix + "Boots")
	.tier('tech')

	event.create("star_sword","sword")
	.displayName(StarPrefix + "Sword")
	.tier('star')

	event.create("star_axe","axe")
	.displayName(StarPrefix + "Axe")
	.tier('star')
	.speedBaseline(-2.9)
	.attackDamageBaseline(5)

	event.create("star_shovel","shovel")
	.displayName(StarPrefix + "Shovel")
	.tier('star')

	event.create("star_pickaxe","pickaxe")
	.displayName(StarPrefix + "Pickaxe")
	.tier('star')

	event.create("star_hoe","hoe")
	.displayName(StarPrefix + "Hoe")
	.tier('star')
	.speedBaseline(1)
	.attackDamageBaseline(-5)

	RegHammer("star_hammer",StarPrefix + "Smasher","star")

	event.create("star_helmet", "helmet")
	.displayName(StarPrefix + "Crown")
	.tier('star')

	event.create("star_chestplate", "chestplate")
	.displayName(StarPrefix + "Chestplate")
	.tier('star')

	event.create("star_leggings", "leggings")
	.displayName(StarPrefix + "Leggings")
	.tier('star')

	event.create("star_boots", "boots")
	.displayName(StarPrefix + "Boots")
	.tier('star')

	event.create("bloody_helmet", "helmet")
	.displayName("Bloody Crown")
	.tier('bloody')
	.modifyAttribute("generic.max_health",global.randomUUID(),3,"ADDITION")

	event.create("bloody_chestplate", "chestplate")
	.displayName("Bloody Chestplate")
	.tier('bloody')
	.modifyAttribute("generic.max_health",global.randomUUID(),8,"ADDITION")

	event.create("bloody_leggings", "leggings")
	.displayName("Bloody Leggings")
	.tier('bloody')
	.modifyAttribute("generic.max_health",global.randomUUID(),6,"ADDITION")

	event.create("bloody_boots", "boots")
	.displayName("Bloody Boots")
	.tier('bloody')
	.modifyAttribute("generic.max_health",global.randomUUID(),3,"ADDITION")

	event.create("key_wrench")
	.displayName("Bone Wrench")
	.unstackable()
	.modifyAttribute("generic.attack_damage",global.randomUUID(),2,"ADDITION")

	event.create("creativ_pickaxe","pickaxe")
	.displayName("Creativium Pickaxe")
	.tier('creativ')

	event.create("lagacy_sword","sword")
	.displayName("Lagacy Sword")
	.tier('creativ')
	.attackDamageBaseline(-1)
	.speedBaseline(16)
	.maxDamage(250)

	event.create("dragon_food")
	.displayName("Energised Meat")
	.maxStackSize(16)

	event.create("library")
	.displayName("Pocket Library")
	.unstackable()

	RegHammer("wooden_hammer","Wooden Smasher","wood")
	RegHammer("stone_hammer","Stone Smasher","stone")
	RegHammer("iron_hammer","Iron Smasher","iron")
	RegHammer("golden_hammer","Golden Smasher","gold")
	RegHammer("diamond_hammer","Diamond Smasher","diamond")
	RegHammer("netherite_hammer","Netherite Smasher","netherite")

	event.create('nugget_compound')
	.displayName("Chicken Nugget Compound")
	.food(food => {
		food
		.effect('minecraft:hunger', 600, 0, 1)
		.effect('minecraft:poison', 200, 0, 0.5)
		.hunger(5)
		.saturation(0.3)
	})

	event.create('nugget')
	.displayName("Chicken Nugget")
	.food(food => {
		food
		.hunger(3)
		.saturation(0.2)
		.fastToEat()
	})

	event.create('enriched_nugget')
	.displayName("Enriched Chicken Nugget")
	.food(food => {
		food
		.effect('minecraft:regeneration', 100, 0, 1)
		.hunger(3)
		.saturation(0.8)
		.fastToEat()
		.alwaysEdible()
	})

	event.create('golden_cookie')
	.displayName("Golden Cookie")
	.food(food => {
		food
		.effect('minecraft:absorption', 2400, 0, 1)
		.effect('minecraft:speed', 200, 1, 1)
		.hunger(2)
		.saturation(1.2)
		.alwaysEdible()
	})

	event.create('super_cookie')
	.displayName("Super Cookie")
	.food(food => {
		food
		.effect('minecraft:haste', 1200, 0, 1)
		.hunger(2)
		.saturation(0.8)
		.alwaysEdible()
	})

	event.create('charged_cookie')
	.displayName("Charged Cookie")
	.food(food => {
		food
		.effect('minecraft:haste', 2400, 0, 1)
		.effect('minecraft:regeneration', 200, 1, 1)
		.hunger(2)
		.saturation(1.2)
		.alwaysEdible()
	})

	event.create('charged_matter')
	.displayName("Charged Matter")
	.maxStackSize(16)

	event.create('copper_spool')
	.displayName("Copper Spool")

	event.create('incomplete_galaxy_cookie', 'create:sequenced_assembly')
	.displayName("Incomplete Galaxy Cookie")

	event.create('galaxy_cookie')
	.displayName("Galaxy Cookie")
	.unstackable()
	.food(food => {
		food
		.effect('minecraft:haste', 4800, 1, 1)
		.effect('minecraft:absorption', 4800, 1, 1)
		.effect('minecraft:regeneration', 400, 2, 1)
		.effect('minecraft:speed', 400, 2, 1)
		.effect("minecraft:fire_resistance", 12000, 0, 1)
		.hunger(20)
		.saturation(1)
		.alwaysEdible()
	})

	event.create('galaxy_dust')
	.displayName("Galaxy Dust")

	event.create('bedrock_dust')
	.displayName("Bedrock Dust")

	event.create('star_dust')
		.displayName(StarPrefix + "Dust")

	event.create('star_nugget')
		.displayName(StarPrefix + "Nugget")

	event.create('star_ingot')
		.displayName(StarPrefix + "Ingot")

	event.create('rainbow_ingot')
	.displayName("Rainbow Ingot")
	.glow(true)

	event.create('creativ_compound')
	.displayName("Creativium Compound")
	.glow(true)

	event.create('creativ_unstable')
	.displayName("Creativium Unstable")
	.glow(true)

	event.create('creativ_ingot')
	.displayName("Creativium Ingot")
	.glow(true)

	event.create('creativ_nugget')
	.displayName("Creativium Nugget")
	.glow(true)

	event.create('creativ_dust')
	.displayName("Creativium Dust")
	.glow(true)

	let tech_steps = [
		["tech_stage_1a","Stage I Part A"],
		["tech_stage_1b","Stage I Part B"],
		["tech_stage_2","Stage II"],
		["tech_stage_3","Stage III §4(Heated!)"],
	].forEach(e => {
		event.create(e[0])
			.displayName("Unfinished " + TechPrefix +  "Ingot")
			.tooltip("§7"+e[1])
			.unstackable()
	})

	event.create('stick_blend')
	.displayName("Instant Glue")

	event.create('incomplete_tech_ingot', 'create:sequenced_assembly')
	.displayName("Incomplete " + TechPrefix + "Ingot")

	event.create('incomplete_seal_creativ', 'create:sequenced_assembly')
	.displayName("Incomplete Sealed Creativium")

	event.create('tech_ingot')
	.displayName(TechPrefix + "Ingot")

	event.create('tech_nugget')
	.displayName(TechPrefix + "Nugget")

	event.create('tech_dust')
	.displayName(TechPrefix + "Dust")

	event.create('reinforced_handle')
	.displayName("Reinforced Handle")

	event.create('redstone_ingot')
	.displayName("Redium Ingot")

	event.create('farmer_ingot')
	.displayName("Farmit Ingot")

	event.create('power_dust')
	.displayName("Growth Dust")

	event.create("powdered_wheat")
	.displayName("Powdered Wheat Seeds")

	event.create("powdered_beans")
	.displayName("Powdered Beans")

	event.create("magic_beans")
	.displayName("Magic Infused Beans")

	event.create("magic_wheat")
	.displayName("Magic Infused Wheat")

	event.create("rich_beans")
	.displayName("Inriched Beans")

	event.create("rich_wheat")
	.displayName("Inriched Wheat")

	event.create('bloody_tear')
	.displayName("Bloody Tear")

	event.create('gue')
	.displayName("Hardend Gue")

	event.create('droplet')
	.displayName("Droplet Shard")

	event.create("zinc_dust")
	.displayName("Zinc Dust")

	event.create("brass_dust")
	.displayName("Brass Dust")

	event.create("uranium_nugget")
	.displayName("Uranium Nugget")

	event.create("bread_ingot")
	.displayName("Bread Ingot")
	.food(food => {
		food
		.hunger(5)
		.saturation(0.6)	
	})

	global.NessieColors.forEach( element => {
		event.create('nessie_'+element)
			.displayName('Nessie')
			.unstackable()
		event.create('nessie_'+element+'_enchanted')
			.displayName('Nessie')
			.unstackable()
			.glow(true)
		event.create('gem_'+element)
			.displayName('Colored Gem')
			.unstackable()
	})

	event.create("little_star")
	.displayName("Little Nether Star")
	.glow(true)
	.rarity("uncommon")

	event.create("jar_of_tears")
	.displayName("Jar of Tears")
	.finishUsing((item,level,entity) => {
		if (entity.isPlayer()) {
			let player = level.getServer().getPlayer(entity.username)
			if (!player.creative) item = Item.of('minecraft:glass_bottle')
			entity.heal(20)
		}
		return item
	})
	.use((level,player,hand) => {
		if (hand == "MAIN_HAND") return true
		return false
	})
	.useDuration(item => 100)
	.useAnimation("drink")
	.unstackable()

	event.create("beer")
	.displayName("Beer")
	.finishUsing((item,level,entity) => {
		if (entity.isPlayer()) {
			let player = level.getServer().getPlayer(entity.username)
			if (!player.creative) item = Item.of('minecraft:glass_bottle')
			entity.potionEffects.add("minecraft:nausea",20*90,2,false,true)
			entity.potionEffects.add("minecraft:resistance",20*30,1,false,true)
			entity.potionEffects.add("minecraft:strength",20*30,0,false,true)
		}
		return item
	})
	.use((level,player,hand) => {
		if (hand == "MAIN_HAND") return true
		return false
	})
	.useDuration(item => 60)
	.useAnimation("drink")
	.unstackable()

	event.create("cobalt_ingot")
	.displayName("Cobalt Ingot")

	event.create("cobalt_nugget")
	.displayName("Cobalt Nugget")

	event.create("cobalt_dust")
	.displayName("Cobalt Dust")

	event.create("raw_cobalt")
	.displayName("Raw Cobalt")

	event.create("crushed_raw_cobalt")
	.displayName("Crushed Raw Cobalt")

	event.create("manyullyn_ingot")
	.displayName("Manyullyn Ingot")

	event.create("manyullyn_nugget")
	.displayName("Manyullyn Nugget")

	event.create("manyullyn_dust")
	.displayName("Manyullyn Dust")

})

ItemEvents.modification(event => {

	event.modify('kubejs:wooden_hammer', item => {
		item.setBurnTime(200)
	})

	event.modify('quarryplus:repeat_tick_module', item => {
		item.maxStackSize = 8
	})

	event.modify('quarryplus:fuel_module_normal', item => {
		item.maxStackSize = 4
	})
})