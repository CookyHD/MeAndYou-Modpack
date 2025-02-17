//TAGS

ServerEvents.tags('block', event => {

	event.removeAll('cucumber:mineable/paxel')
	event.add('cucumber:mineable/paxel',Block.getTaggedIds('minecraft:mineable/shovel'))
	event.add('cucumber:mineable/paxel',Block.getTaggedIds('minecraft:mineable/pickaxe'))
	event.add("kubejs:ladder",['chipped:mossy_ladder', 'chipped:metal_ladder', 'chipped:crooked_ropeplank_ladder', 'chipped:crooked_plank_ladder', 'chipped:crooked_ladder', 'createdeco:zinc_ladder', 'createdeco:industrial_iron_ladder', 'createdeco:iron_ladder', 'minecraft:ladder', 'create:copper_ladder', 'create:brass_ladder', 'create:andesite_ladder', 'chipped:strong_ladder', 'chipped:roped_ladder', 'chipped:rope_planked_ladder', 'chipped:railed_ladder', 'chipped:plank_ladder'])

})

ServerEvents.loaded(event => {
	event.server.runCommandSilent("reload") //Block Tags Fix, Makes Worlds Load Longer Tho
})

ServerEvents.tags('item', event => {

	event.add('forge:slimeballs','thermal:tar')
	event.add('minecraft:powders',['minecraft:gunpowder','minecraft:redstone','minecraft:glowstone_dust'])
	event.add('forge:dusts/zinc', 'kubejs:zinc_dust')
	event.add('forge:dusts/brass', 'kubejs:brass_dust')
	event.add('forge:nuggets/uranium', 'kubejs:uranium_nugget')

	event.remove('forge:chests','enderchests:ender_chest')
	event.remove('forge:chests/ender','enderchests:ender_chest')

	event.add('kubejs:star_repair','kubejs:star_ingot')
	event.add('kubejs:tech_repair','kubejs:tech_ingot')
	event.add('kubejs:creativ_repair','kubejs:creativ_ingot')

	event.add('forge:bread','kubejs:bread_ingot')
	event.add('minecraft:bookshelf_books',['ftbquests:book','kubejs:library'])

	let arr = [
		'extractinator:cobblestone',
		'extractinator:common_drops',
		'extractinator:common_gravel_drops',
		'extractinator:common_snow_drops',
		'extractinator:rare_drops',
		'extractinator:rare_sand_drops',
		'extractinator:stones',
		'extractinator:very_rare_drops',
		'extractinator_platform:cobblestone',
		'extractinator_platform:gravel',
		'extractinator_platform:netherrack',
		'extractinator_platform:stone',
		'extractinator_platform:dust/bauxite',
		'extractinator_platform:dust/chrome',
		'extractinator_platform:dust/zinc',
		'extractinator_platform:gems/ruby',
		'extractinator_platform:gems/sapphire',
		'extractinator_platform:raw_materials/antimony',
		'extractinator_platform:raw_materials/iridium',
		'extractinator_platform:raw_materials/lead',
		'extractinator_platform:raw_materials/nickel',
		'extractinator_platform:raw_materials/osmium',
		'extractinator_platform:raw_materials/platinum',
		'extractinator_platform:raw_materials/silver',
		'extractinator_platform:raw_materials/tin',
		'extractinator_platform:raw_materials/titanium',
		'extractinator_platform:raw_materials/tungsten',
		'extractinator_platform:raw_materials/uranium'
	].forEach(e => {
		event.removeAll(e)
	})

	event.add('kubejs:input_cobblestone','minecraft:cobblestone')
	event.add('kubejs:input_gravel','minecraft:gravel')
	event.add('kubejs:input_sand','minecraft:sand')
	event.add('kubejs:input_dust','kubejs:dust')
	event.add('kubejs:input_dirt','minecraft:dirt')
	event.add('kubejs:input_grass','minecraft:grass_block')
	event.add('kubejs:input_netherrack','minecraft:netherrack')

	event.add('kubejs:output_cobblestone_common',['minecraft:iron_nugget', 'create:copper_nugget', 'minecraft:gold_nugget', 'kubejs:uranium_nugget', 'create:zinc_nugget', 'thermal:nickel_nugget', 'thermal:silver_nugget', 'thermal:lead_nugget', 'thermal:tin_nugget'])
	event.add('kubejs:output_cobblestone_rare',['create:crushed_raw_tin', 'create:crushed_raw_uranium', 'create:crushed_raw_lead', 'create:crushed_raw_zinc', 'create:crushed_raw_nickel', 'create:crushed_raw_iron', 'create:crushed_raw_gold', 'create:crushed_raw_silver', 'create:crushed_raw_copper'])

	event.add('kubejs:output_dust',['minecraft:redstone', 'minecraft:gunpowder', 'minecraft:glowstone_dust', 'thermal:nickel_dust', 'thermal:silver_dust', 'thermal:lead_dust', 'thermal:gold_dust', 'thermal:copper_dust', 'thermal:iron_dust', 'kubejs:zinc_dust', 'biggerreactors:uranium_dust', 'thermal:tin_dust'])

	event.add('kubejs:output_gravel_common',['thermal:sulfur', 'minecraft:quartz', 'thermal:cinnabar', 'minecraft:flint', 'minecraft:lapis_lazuli', 'minecraft:amethyst_shard', 'thermal:niter', 'minecraft:coal', 'thermal:apatite'])
	event.add('kubejs:output_gravel_rare',['minecraft:emerald', 'minecraft:diamond'])

	event.add('kubejs:output_sand_common',['minecraft:leather', 'minecraft:spider_eye', 'minecraft:rotten_flesh', 'minecraft:string', 'minecraft:bone', 'minecraft:feather'])
	event.add('kubejs:output_sand_rare',['minecraft:ghast_tear', 'minecraft:blaze_powder', 'thermal:blizz_powder', 'thermal:blitz_powder', 'thermal:basalz_powder'])

	event.add('kubejs:output_dirt',['farmersdelight:tomato_seeds', 'farmersdelight:rice', 'thermal:barley_seeds', 'minecraft:potato', 'minecraft:nether_wart', 'minecraft:beetroot_seeds', 'minecraft:melon_seeds', 'minecraft:pumpkin_seeds', 'minecraft:wheat_seeds', 'thermal:strawberry_seeds', 'thermal:amaranth_seeds', 'thermal:sadiroot_seeds', 'thermal:frost_melon_seeds', 'thermal:flax_seeds', 'thermal:corn_seeds', 'thermal:eggplant_seeds', 'thermal:green_bean_seeds', 'thermal:peanut_seeds', 'thermal:spinach_seeds', 'thermal:bell_pepper_seeds', 'thermal:radish_seeds', 'thermal:tea_seeds', 'minecraft:carrot', 'farmersdelight:onion', 'farmersdelight:cabbage_seeds'])
	event.add('kubejs:output_grass',['biomesoplenty:dead_sapling', 'minecraft:cherry_sapling', 'minecraft:dark_oak_sapling', 'minecraft:acacia_sapling', 'minecraft:jungle_sapling', 'biomesoplenty:rainbow_birch_sapling', 'biomesoplenty:willow_sapling', 'biomesoplenty:origin_sapling', 'biomesoplenty:magic_sapling', 'biomesoplenty:yellow_autumn_sapling', 'minecraft:oak_sapling', 'minecraft:birch_sapling', 'biomesoplenty:umbran_sapling', 'biomesoplenty:snowblossom_sapling', 'biomesoplenty:redwood_sapling', 'biomesoplenty:mahogany_sapling', 'biomesoplenty:flowering_oak_sapling', 'minecraft:spruce_sapling', 'biomesoplenty:palm_sapling', 'biomesoplenty:jacaranda_sapling', 'biomesoplenty:orange_autumn_sapling', 'biomesoplenty:maple_sapling', 'biomesoplenty:fir_sapling', 'biomesoplenty:hellbark_sapling', 'thermal:rubberwood_sapling'])
	event.add('kubejs:output_netherrack','minecraft:netherite_scrap')

	event.add('kubejs:heated',['kubejs:tech_stage_3','kubejs:incomplete_tech_ingot'])

	event.add('quad:immune/explosion',['kubejs:creativ_block', 'kubejs:seal_creativ', 'kubejs:creativ_compound', 'kubejs:creativ_unstable', 'kubejs:creativ_ingot', 'kubejs:creativ_dust', 'kubejs:creativ_pickaxe', 'kubejs:bedrock_dust'])

	event.add('kubejs:gem',['kubejs:gem_green', 'kubejs:gem_red', 'kubejs:gem_pink', 'kubejs:gem_blue'])
	event.add('kubejs:nessie',['kubejs:nessie_green', 'kubejs:nessie_red', 'kubejs:nessie_pink', 'kubejs:nessie_blue'])
	event.add('kubejs:nessie_enchanted',['kubejs:nessie_green_enchanted', 'kubejs:nessie_red_enchanted', 'kubejs:nessie_pink_enchanted', 'kubejs:nessie_blue_enchanted'])

	event.add('kubejs:hammers',[
		'kubejs:star_hammer',
		'kubejs:tech_hammer',
		"kubejs:wooden_hammer",
		"kubejs:stone_hammer",
		"kubejs:iron_hammer",
		"kubejs:golden_hammer",
		"kubejs:diamond_hammer",
		"kubejs:netherite_hammer",
		"kubejs:bread_hammer",
		'redstone_arsenal:flux_hammer'
	])

	event.add("kubejs:scraps",[
		"irons_spellbooks:arcane_salvage",
		"minecraft:netherite_scrap"
	])

	event.add("curios:tank",[
		'create_sa:small_filling_tank',
		'create_sa:medium_filling_tank',
		'create_sa:large_filling_tank',
		'create_sa:small_fueling_tank',
		'create_sa:medium_fueling_tank',
		'create_sa:large_fueling_tank',
		'create_sa:creative_filling_tank'
	])

	event.add("kubejs:ladder",['chipped:mossy_ladder', 'chipped:metal_ladder', 'chipped:crooked_ropeplank_ladder', 'chipped:crooked_plank_ladder', 'chipped:crooked_ladder', 'createdeco:zinc_ladder', 'createdeco:industrial_iron_ladder', 'createdeco:iron_ladder', 'minecraft:ladder', 'create:copper_ladder', 'create:brass_ladder', 'create:andesite_ladder', 'chipped:strong_ladder', 'chipped:roped_ladder', 'chipped:rope_planked_ladder', 'chipped:railed_ladder', 'chipped:plank_ladder'])

	event.add("forge:planks/driftwood","aquaculture:driftwood")
	event.add("forge:planks/rubber","thermal:rubberwood_planks")
	event.add("forge:rubber","thermal:cured_rubber")

	let helmets = [
		'mowziesmobs:wrought_helmet',
		'create_sa:copper_helmet',
		'create_sa:slime_helmet',
		'create_sa:zinc_helmet',
		'create_sa:brass_helmet',
		'kubejs:tech_helmet',
		'redstone_arsenal:flux_helmet',
		'thermal:hazmat_helmet',
		'thermal:diving_helmet',
		'create:netherite_diving_helmet',
		'create:copper_diving_helmet',
		'kubejs:star_helmet',
		'kubejs:bloody_helmet',
		'thermal:beekeeper_helmet'
	].forEach(e => {
		event.add("forge:armor",e)
		event.add("forge:armors",e)
		event.add("forge:armors/helmets",e)
		event.add("forge:helmets",e)
	})

	let chestplate = [
		'thermal:beekeeper_chestplate', 
		'thermal:diving_chestplate',
		'thermal:hazmat_chestplate',
		'redstone_arsenal:flux_chestplate',
		'kubejs:tech_chestplate',
		'kubejs:bloody_chestplate',
		'create_sa:brass_chestplate',
		'create_sa:zinc_chestplate',
		'create_sa:copper_chestplate',
		'create_sa:netherite_jetpack_chestplate',
		'create_sa:brass_exoskeleton_chestplate',
		'create_sa:brass_jetpack_chestplate',
		'kubejs:star_chestplate'
	].forEach(e => {
		event.add("forge:armor",e)
		event.add("forge:armors",e)
		event.add("forge:armors/chestplate",e)
		event.add("forge:chestplate",e)
	})

	let leggings = [
		'create_sa:zinc_leggings',
		'create_sa:brass_leggings',
		'kubejs:bloody_leggings',
		'kubejs:star_leggings',
		'kubejs:tech_leggings',
		'redstone_arsenal:flux_leggings',
		'thermal:hazmat_leggings',
		'thermal:diving_leggings',
		'thermal:beekeeper_leggings',
		'create_sa:copper_leggings'
	].forEach(e => {
		event.add("forge:armor",e)
		event.add("forge:armors",e)
		event.add("forge:armors/leggings",e)
		event.add("forge:leggings",e)
	})

	let boots = [
		'redstone_arsenal:flux_boots',
		'kubejs:tech_boots',
		'kubejs:star_boots',
		'kubejs:bloody_boots',
		'cloudboots:diamond_cloud_boots',
		'cloudboots:netherite_cloud_boots',
		'thermal:beekeeper_boots',
		'thermal:diving_boots',
		'thermal:hazmat_boots',
		'create_sa:slime_boots',
		'create:copper_diving_boots',
		'create:netherite_diving_boots',
		'create_sa:zinc_boots',
		'create_sa:brass_boots',
		'create_sa:copper_boots',
		'cloudboots:gold_cloud_boots',
		'cloudboots:iron_cloud_boots',
		'cloudboots:cloud_boots',
		'usefulslime:slime_boots'
	].forEach(e => {
		event.add("forge:armor",e)
		event.add("forge:armors",e)
		event.add("forge:armors/boots",e)
		event.add("forge:boots",e)
	})

	let wrenches = [
		"kubejs:key_wrench",
		'redstone_arsenal:flux_wrench'
	].forEach(e => {
		event.add('forge:tools',e)
		event.add('forge:tools/wrench',e)
		event.add('forge:wrenches',e)
		event.add('minecraft:tools',e)
		event.add('minecraft:breaks_decorated_pots',e)
	})

	event.add("minecraft:trimmable_armor",[
		'create_sa:zinc_leggings',
		'create_sa:copper_leggings',
		'redstone_arsenal:flux_chestplate',
		'kubejs:tech_chestplate',
		'kubejs:bloody_chestplate',
		'kubejs:star_chestplate',
		'create_sa:brass_chestplate',
		'create_sa:zinc_chestplate',
		'create_sa:copper_chestplate',
		'kubejs:bloody_helmet',
		'kubejs:tech_helmet',
		'create_sa:brass_helmet',
		'kubejs:star_helmet',
		'create_sa:copper_helmet',
		'redstone_arsenal:flux_helmet',
		'create:netherite_diving_helmet',
		'create:copper_diving_helmet',
		'create_sa:zinc_helmet',
		'cloudboots:cloud_boots',
		'cloudboots:gold_cloud_boots',
		'create_sa:brass_leggings',
		'kubejs:star_leggings',
		'kubejs:tech_leggings',
		'cloudboots:iron_cloud_boots',
		'kubejs:bloody_leggings',
		'redstone_arsenal:flux_leggings',
		'create:netherite_diving_boots',
		'usefulslime:slime_boots',
		'redstone_arsenal:flux_boots',
		'kubejs:tech_boots',
		'kubejs:star_boots',
		'create_sa:copper_boots',
		'create_sa:zinc_boots',
		'create_sa:brass_boots',
		'kubejs:bloody_boots',
		'create:copper_diving_boots',
		'cloudboots:diamond_cloud_boots',
		'cloudboots:netherite_cloud_boots'
	])

	event.add("forge:armor",'redstone_arsenal:flux_elytra')
	event.add("forge:chestplate",'redstone_arsenal:flux_elytra')
	event.add("forge:elytra",'redstone_arsenal:flux_elytra')

	let sword = [
		'redstone_arsenal:flux_sword',
		'create_sa:copper_sword',
		'create_sa:zinc_sword',
		'kubejs:bread_sword',
		'kubejs:star_sword',
		'kubejs:lagacy_sword',
		'create_sa:rose_quartz_sword',
		'create_sa:experience_sword',
		'create_sa:brass_sword',
		'kubejs:redstone_sword',
		'kubejs:tech_sword',
		'kubejs:scattered_sword'
	].forEach(e => {
		event.add('forge:tools',e)
		event.add('minecraft:swords',e)
		event.add('minecraft:tools',e)
		event.add('minecraft:breaks_decorated_pots',e)
	})

	let axe = [
		'create_sa:copper_axe',
		'create_sa:experience_axe',
		'kubejs:bread_axe',
		'kubejs:tech_axe',
		'kubejs:farmer_axe',
		'redstone_arsenal:flux_axe',
		'kubejs:star_axe',
		'create_sa:blazing_axe',
		'create_sa:rose_quartz_axe',
		'create_sa:zinc_axe',
		'create_sa:brass_axe'
	].forEach(e => {
		event.add('forge:tools',e)
		event.add('forge:tools/axes',e)
		event.add('minecraft:axes',e)
		event.add('minecraft:tools',e)
		event.add('minecraft:breaks_decorated_pots',e)
	})

	let pickaxe = [
		'create_sa:rose_quartz_pickaxe',
		'create_sa:zinc_pickaxe',
		'redstone_arsenal:flux_pickaxe',
		'create_sa:copper_pickaxe',
		'create_sa:blazing_pickaxe',
		'kubejs:creativ_pickaxe',
		'kubejs:star_pickaxe',
		'kubejs:bread_pickaxe',
		'kubejs:tech_pickaxe',
		'create_sa:experience_pickaxe',
		'create_sa:brass_pickaxe'
	].forEach(e => {
		event.add('forge:tools',e)
		event.add('forge:tools/wrench',e)
		event.add('minecraft:swords',e)
		event.add('minecraft:tools',e)
		event.add('minecraft:breaks_decorated_pots',e)
		event.add('aether:slider_damaging_items',e)
		event.add("minecraft:cluster_max_harvestables",e)
	})

	let shovel = [
		'create_sa:brass_shovel',
		'create_sa:rose_quartz_shovel',
		'create_sa:blazing_shovel',
		'kubejs:star_shovel',
		'kubejs:bread_shovel',
		'create_sa:experience_shovel',
		'create_sa:copper_shovel',
		'create_sa:zinc_shovel',
		'redstone_arsenal:flux_excavator',
		'redstone_arsenal:flux_shovel',
		'kubejs:tech_shovel'
	].forEach(e => {
		event.add('forge:tools',e)
		event.add('forge:tools/shovels',e)
		event.add('minecraft:shovels',e)
		event.add('minecraft:tools',e)
		event.add('minecraft:breaks_decorated_pots',e)
	})

	let hoe = [
		'kubejs:tech_hoe',
		'kubejs:bread_hoe',
		'kubejs:star_hoe',
		'create_sa:brass_hoe',
		'create_sa:zinc_hoe',
		'create_sa:copper_hoe',
		'redstone_arsenal:flux_sickle'
	].forEach(e => {
		event.add('forge:tools',e)
		event.add('minecraft:hoes',e)
		event.add('minecraft:tools',e)
		event.add('minecraft:breaks_decorated_pots',e)
	})

	let fishingrod = [
		'redstone_arsenal:flux_fishing_rod',
		'reliquary:rod_of_lyssa'
	].forEach(e => {
		event.add('forge:tools',e)
		event.add('forge:tools/fishing_rods',e)
		event.add('forge:fishing_rods',e)
	})

	event.add('forge:tools','redstone_arsenal:flux_shield')
	event.add('forge:tools/shields','redstone_arsenal:flux_shield')
	event.add('forge:shields','redstone_arsenal:flux_shield')

	event.add('forge:tools','redstone_arsenal:flux_bow')
	event.add('forge:tools/bows','redstone_arsenal:flux_bow')
	event.add('forge:bows','redstone_arsenal:flux_bow')

	event.add('forge:tools','redstone_arsenal:flux_crossbow')
	event.add('forge:tools/bows','redstone_arsenal:flux_crossbow')
	event.add('forge:tools/crossbows','redstone_arsenal:flux_crossbow')
	event.add('forge:crossbows','redstone_arsenal:flux_crossbow')

	event.add('forge:tools','redstone_arsenal:flux_trident')
	event.add('forge:tools/trident','redstone_arsenal:flux_trident')
	event.add('forge:spears','redstone_arsenal:flux_trident')
	event.add('minecraft:breaks_decorated_pots','redstone_arsenal:flux_trident')
	event.add('minecraft:tools','redstone_arsenal:flux_trident')

	event.add("create:upright_on_belt",["kubejs:beer","kubejs:jar_of_tears"])

})