//RECIPES

ServerEvents.recipes(event => {

	let removeInAndOut = id => {
		event.remove({ output: `${id}` })
		event.remove({ input: `${id}` })
	}

	let inter

	let ban = [
		'littlelogistics:tee_junction_rail',
		'littlelogistics:car_dock_rail',
		'littlelogistics:switch_rail',
		'littlelogistics:tug_route',
		'littlelogistics:vacuum_barge',
		'littlelogistics:fluid_barge',
		'littlelogistics:fishing_barge',
		'littlelogistics:barrel_barge',
		'littlelogistics:junction_rail',
		'littlelogistics:conductors_wrench',
		'littlelogistics:fluid_hopper',
		'littlelogistics:guide_rail_tug',
		'littlelogistics:vessel_detector',
		'littlelogistics:energy_tug',
		'littlelogistics:barge_dock',
		'littlelogistics:tug_dock',
		'littlelogistics:chest_car',
		'littlelogistics:rapid_hopper',
		'littlelogistics:barrel_car',
		'littlelogistics:vessel_charger',
		'littlelogistics:tug',
		'littlelogistics:locomotive_dock_rail',
		'littlelogistics:seater_barge',
		'littlelogistics:guide_rail_corner',
		'littlelogistics:fluid_car',
		'littlelogistics:barge',
		'littlelogistics:spring',
		'biomesoplenty:anomaly',
		'biomesoplenty:liquid_null_bucket',
		'biomesoplenty:null_plant',
		'biomesoplenty:null_leaves',
		'biomesoplenty:null_block',
		'biomesoplenty:null_end_stone',
		'biomesoplenty:unmapped_end_stone',
		'mace_port:heavy_core',
		'biomesoplenty:orange_sandstone_slab',
		'biomesoplenty:white_sandstone_slab',
		'biomesoplenty:black_sandstone_slab',
		'immersive_aircraft:quadrocopter',
		'immersive_aircraft:airship',
		'immersive_aircraft:biplane',
		'man_of_many_planes:economy_plane',
		'man_of_many_planes:scarlet_biplane',
		'immersive_aircraft:cargo_airship',
		'immersive_aircraft:industrial_gears',
		'immersive_aircraft:engine',
		'immersive_aircraft:sturdy_pipes',
		'immersive_aircraft:rotary_cannon',
		'immersive_aircraft:bomb_bay',
		'immersive_aircraft:heavy_crossbow',
		'immersive_aircraft:hull',
		'immersive_aircraft:gyrodyne',
		'immersive_aircraft:warship',
		'immersive_aircraft:sail',
		'immersive_aircraft:propeller',
		'tesseract:tesseract',
		'thermal:lumium_activator_rail',
		'thermal:lumium_detector_rail',
		'thermal:crossover_rail',
		'thermal:prismarine_rail',
		'thermal:prismarine_crossover_rail',
		'thermal:prismarine_powered_rail',
		'thermal:prismarine_activator_rail',
		'thermal:prismarine_detector_rail',
		'thermal:lumium_rail',
		'thermal:lumium_powered_rail',
		'thermal:lumium_crossover_rail',
		'quarryplus:marker16',
		'quarryplus:pump_module',
		'quarryplus:exp_module',
		'quarryplus:solid_fuel_quarry',
		'quarryplus:filter_module',
		'quarryplus:mini_quarry',
		'quarryplus:waterlogged_marker16',
		'quarryplus:waterlogged_flex_marker',
		'quarryplus:waterlogged_marker',
		'quarryplus:placer_plus',
		'quarryplus:spawner_controller',
		'quarryplus:creative_generator',
		'quarryplus:workbench',
		'quarryplus:replacer',
		'quarryplus:exp_pump',
		'quarryplus:adv_pump',
		'quarryplus:adv_quarry',
		'quarryplus:pump_plus',
		'quarryplus:status_checker',
		'quarryplus:mover',
		'quarryplus:mining_well',
		'quarryplus:fuel_module_normal',
		'quarryplus:y_setter',
		'quarryplus:filler',
		'quarryplus:remote_placer',
		'quarryplus:replacer_module',
		'quarryplus:remove_bedrock_module',
		'quarryplus:filler_module',
		'sfm:manager',
		'sfm:cable',
		'sfm:disk',
		'sfm:printing_press',
		'sfm:xp_goop',
		'sfm:xp_shard',
		'sfm:water_tank',
		"create_sa:slime_helmet",
		'usefulslime:slippery_slime_block',
		'usefulslime:slime_chestplate',
		'usefulslime:slime_helmet',
		'usefulslime:slime_leggings',
		'usefulslime:jello',
		'create_sa:copper_exoskeleton_chestplate',
		'createdeco:brass_support',
		'createdeco:andesite_support',
		'createdeco:iron_support',
		'createdeco:copper_support',
		'createdeco:zinc_support',
		'createdeco:industrial_iron_support',
		'measurements:tape_measure',
		'create_sa:copper_jetpack_chestplate',
		'create_sa:grapplin_whisk',
		'create_sa:portable_drill',
		'create_sa:drone_controller',
		'create_sa:brass_drone_item',
		'create_sa:block_picker', 
		'create_sa:hydraulic_engine',
		'create_sa:heat_engine',
		'create_sa:flamethrower',
		'create_sa:copper_magnet',
		'create_sa:vault_component',
		'create_sa:fan_component', 
		'create_sa:brass_drill_head',
		'create_sa:brass_cube',
		'create_sa:steam_engine',
		'create_sa:andesite_jetpack_chestplate',
		'create_sa:andesite_exoskeleton_chestplate',
		'torchmaster:dreadlamp',
		'torchmaster:feral_flare_lantern',
		'torchmaster:frozen_pearl',
		'railways:blue_conductor_cap',
		'railways:cyan_conductor_cap',
		'railways:light_blue_conductor_cap',
		'railways:green_conductor_cap',
		'railways:lime_conductor_cap',
		'railways:yellow_conductor_cap',
		'railways:orange_conductor_cap',
		'railways:red_conductor_cap',
		'railways:purple_conductor_cap',
		'railways:light_gray_conductor_cap',
		'railways:gray_conductor_cap',
		'railways:magenta_conductor_cap',
		'railways:pink_conductor_cap',
		'railways:brown_conductor_cap',
		'railways:white_conductor_cap',
		'railways:black_conductor_cap',
		'comforts:hammock_light_gray',
		'comforts:hammock_gray',
		'comforts:hammock_pink',
		'comforts:hammock_lime',
		'comforts:hammock_yellow',
		'comforts:hammock_light_blue',
		'comforts:hammock_magenta',
		'comforts:hammock_orange',
		'comforts:hammock_white',
		'comforts:hammock_cyan',
		'comforts:hammock_purple',
		'comforts:hammock_blue',
		'comforts:hammock_brown',
		'comforts:hammock_green',
		'comforts:hammock_red',
		'comforts:hammock_black',
		'colossalchests:colossal_chest_copper',
		'colossalchests:interface_obsidian',
		'colossalchests:chest_wall_silver',
		'colossalchests:colossal_chest_diamond',
		'colossalchests:interface_diamond',
		'colossalchests:colossal_chest_obsidian',
		'colossalchests:interface_gold',
		'colossalchests:colossal_chest_gold',
		'colossalchests:interface_wood',
		'colossalchests:colossal_chest_wood',
		'colossalchests:interface_silver',
		'colossalchests:colossal_chest_silver',
		'colossalchests:interface_iron',
		'colossalchests:colossal_chest_iron',
		'colossalchests:interface_copper',
		'ftbquests:task_screen_configurator',
		'ftbquests:screen_7',
		'ftbquests:screen_5',
		'ftbquests:screen_3',
		'ftbquests:screen_1',
		'ftbquests:loot_crate_opener',
		'moreminecarts:piston_lifter_rail',
		'moreminecarts:piston_pushcart',
		'moreminecarts:sticky_piston_pushcart',
		'moreminecarts:pearl_stasis_minecart',
		'moreminecarts:pearl_stasis_chamber',
		'moreminecarts:high_speed_upgrade',
		'moreminecarts:holo_scaffold_generator',
		'moreminecarts:holo_remote',
		'moreminecarts:backwards_holo_remote',
		'moreminecarts:coupler',
		'moreminecarts:simple_holo_remote',
		'moreminecarts:broken_holo_remote',
		'railways:wooden_headstock_screwlink_coupler',
		'railways:wooden_headstock_split_knuckle_coupler',
		'railways:wooden_headstock_knuckle_coupler',
		'railways:wooden_headstock_link_and_pin_linkless',
		'railways:wooden_headstock_link_and_pin',
		'railways:wooden_headstock_buffer',
		'railways:wooden_headstock',
		'railways:copycat_headstock_screwlink_coupler',
		'railways:copycat_headstock_split_knuckle_coupler',
		'railways:copycat_headstock_knuckle_coupler',
		'railways:copycat_headstock_link_and_pin_linkless',
		'railways:copycat_headstock_link_and_pin',
		'railways:copycat_headstock_buffer',
		'railways:copycat_headstock',
		'railways:small_buffer',
		'railways:big_buffer',
		'railways:screwlink_coupler',
		'railways:split_knuckle_coupler',
		'railways:knuckle_coupler',
		'railways:link_and_pin_linkless',
		'railways:link_and_pin',
		'railways:handcar',
		'railways:buffer',
		'railways:fuel_tank',
		'railways:portable_fuel_interface'
	].forEach(e => {
		event.remove({ output: `${e}` })
	})

	let cultBan = [
		'thermal:rice_seeds',
		'thermal:rice',
		'thermal:onion_seeds',
		'thermal:rice_block',
		'thermal:tomato_block',
		'thermal:onion',
		'thermal:tomato',
		'thermal:tomato_seeds',
		'thermal:onion_block',
		'thermal:beetroot_block',
		'thermal:potato_block',
		'thermal:carrot_block',
		'thermal:apple_block'
	].forEach(e => {
		event.remove({ output: `${e}` })
	})

	let iafBan = [
		'iceandfire:silver_ingot',
		'iceandfire:raw_silver',
		'iceandfire:copper_nugget',
		'iceandfire:sapphire_gem',
		'iceandfire:witherbone',
		'iceandfire:copper_hoe',
		'iceandfire:copper_axe',
		'iceandfire:copper_pickaxe',
		'iceandfire:copper_shovel',
		'iceandfire:copper_sword',
		'iceandfire:hippocampus_slapper',
		'iceandfire:hippocampus_fin',
		'iceandfire:siren_flute',
		'iceandfire:siren_tear', 'iceandfire:shiny_scales',
		'iceandfire:mountain_troll_leather_boots',
		'iceandfire:gorgon_head',
		'iceandfire:stone_statue',
		'iceandfire:pixie_dust',
		'iceandfire:pixie_wings',
		'iceandfire:pixie_wand',
		'iceandfire:ambrosia',
		'iceandfire:cyclops_eye',
		'iceandfire:deathworm_chitin_yellow',
		'iceandfire:earplugs',
		'iceandfire:deathworm_white_leggings',
		'iceandfire:deathworm_white_chestplate',
		'iceandfire:deathworm_white_helmet',
		'iceandfire:deathworm_yellow_boots',
		'iceandfire:deathworm_yellow_leggings',
		'iceandfire:deathworm_yellow_chestplate',
		'iceandfire:deathworm_yellow_helmet',
		'iceandfire:deathworm_chitin_red',
		'iceandfire:deathworm_chitin_white',
		'iceandfire:deathworm_gauntlet_yellow',
		'iceandfire:deathworm_tounge',
		'iceandfire:deathworm_egg_giant',
		'iceandfire:deathworm_egg',
		'iceandfire:deathworm_red_boots',
		'iceandfire:deathworm_red_leggings',
		'iceandfire:deathworm_red_chestplate',
		'iceandfire:deathworm_red_helmet',
		'iceandfire:deathworm_white_boots',
		'iceandfire:myrmex_desert_resin',
		'iceandfire:myrmex_jungle_egg',
		'iceandfire:myrmex_desert_egg',
		'iceandfire:troll_tusk',
		'iceandfire:mountain_troll_leather_leggings',
		'iceandfire:mountain_troll_leather_chestplate',
		'iceandfire:mountain_troll_leather_helmet',
		'iceandfire:deathworm_gauntlet_red',
		'iceandfire:deathworm_gauntlet_white',
		'iceandfire:troll_leather_mountain',
		'iceandfire:myrmex_jungle_swarm',
		'iceandfire:amphithere_feather',
		'iceandfire:amphithere_arrow',
		'iceandfire:amphithere_macuahuitl',
		'iceandfire:dread_knight_sword',
		'iceandfire:lich_staff',
		'iceandfire:dread_shard',
		'iceandfire:banner_pattern_fae',
		'iceandfire:banner_pattern_troll',
		'iceandfire:banner_pattern_weezer',
		'iceandfire:banner_pattern_dread',
		'iceandfire:banner_pattern_hippocampus',
		'iceandfire:cockatrice_skull',
		'iceandfire:amphithere_skull',
		'iceandfire:troll_weapon_axe',
		'iceandfire:troll_weapon_column_forest',
		'iceandfire:banner_pattern_amphithere',
		'iceandfire:dread_queen_staff',
		'iceandfire:dread_queen_sword',
		'iceandfire:banner_pattern_gorgon',
		'iceandfire:banner_pattern_mermaid',
		'iceandfire:cyclops_skull',
		'iceandfire:dread_sword',
		'iceandfire:troll_skull',
		'iceandfire:troll_weapon_column',
		'iceandfire:dread_key',
		'iceandfire:banner_pattern_eye',
		'iceandfire:myrmex_jungle_resin',
		'iceandfire:myrmex_desert_chitin',
		'iceandfire:myrmex_jungle_chitin',
		'iceandfire:myrmex_stinger',
		'iceandfire:myrmex_desert_sword',
		'iceandfire:myrmex_desert_sword_venom',
		'iceandfire:myrmex_desert_shovel',
		'iceandfire:myrmex_desert_pickaxe',
		'iceandfire:myrmex_desert_axe',
		'iceandfire:myrmex_desert_hoe',
		'iceandfire:myrmex_jungle_sword',
		'iceandfire:myrmex_jungle_sword_venom',
		'iceandfire:myrmex_jungle_shovel',
		'iceandfire:myrmex_jungle_pickaxe',
		'iceandfire:myrmex_jungle_axe',
		'iceandfire:myrmex_jungle_hoe',
		'iceandfire:myrmex_jungle_staff',
		'iceandfire:myrmex_desert_staff',
		'iceandfire:myrmex_desert_helmet',
		'iceandfire:myrmex_desert_chestplate',
		'iceandfire:myrmex_desert_leggings',
		'iceandfire:myrmex_desert_boots',
		'iceandfire:myrmex_jungle_helmet',
		'iceandfire:myrmex_jungle_chestplate',
		'iceandfire:myrmex_jungle_leggings',
		'iceandfire:myrmex_jungle_boots',
		'iceandfire:myrmex_desert_swarm',
		'iceandfire:forest_troll_leather_helmet',
		'iceandfire:forest_troll_leather_chestplate',
		'iceandfire:forest_troll_leather_leggings',
		'iceandfire:forest_troll_leather_boots',
		'iceandfire:troll_weapon_column_frost',
		'iceandfire:troll_weapon_hammer',
		'iceandfire:troll_weapon_trunk',
		'iceandfire:troll_weapon_trunk_frost',
		'iceandfire:troll_leather_forest',
		'iceandfire:troll_leather_frost',
		'iceandfire:frost_troll_leather_helmet',
		'iceandfire:frost_troll_leather_chestplate',
		'iceandfire:frost_troll_leather_leggings',
		'iceandfire:frost_troll_leather_boots',
		'iceandfire:lectern',
		'iceandfire:silver_ore',
		'iceandfire:deepslate_silver_ore',
		'iceandfire:silver_block',
		'iceandfire:sapphire_ore',
		'iceandfire:sapphire_block',
		'iceandfire:raw_silver_block',
		'iceandfire:pixie_house_mushroom_red',
		'iceandfire:pixie_house_mushroom_brown',
		'iceandfire:pixie_house_oak',
		'iceandfire:pixie_house_birch',
		'iceandfire:pixie_house_spruce',
		'iceandfire:pixie_house_dark_oak',
		'iceandfire:pixie_jar_empty',
		'iceandfire:pixie_jar_0',
		'iceandfire:pixie_jar_1',
		'iceandfire:pixie_jar_2',
		'iceandfire:pixie_jar_3',
		'iceandfire:pixie_jar_4',
		'iceandfire:myrmex_resin_desert',
		'iceandfire:myrmex_resin_sticky_desert',
		'iceandfire:myrmex_resin_jungle',
		'iceandfire:myrmex_resin_sticky_jungle',
		'iceandfire:desert_myrmex_cocoon',
		'iceandfire:jungle_myrmex_cocoon',
		'iceandfire:myrmex_jungle_biolight',
		'iceandfire:myrmex_desert_resin_block',
		'iceandfire:myrmex_desert_resin_glass',
		'iceandfire:myrmex_jungle_resin_block',
		'iceandfire:myrmex_jungle_resin_glass',
		'iceandfire:dread_stone',
		'iceandfire:dread_stone_bricks',
		'iceandfire:dread_stone_bricks_chiseled',
		'iceandfire:dread_stone_bricks_cracked',
		'iceandfire:dread_stone_bricks_mossy',
		'iceandfire:dread_stone_tile',
		'iceandfire:dread_stone_face',
		'iceandfire:dread_torch',
		'iceandfire:dread_stone_stairs',
		'iceandfire:myrmex_desert_biolight',
		'iceandfire:dread_stone_slab',
		'iceandfire:dreadwood_log',
		'iceandfire:burnt_torch',
		'iceandfire:dreadwood_planks',
		'iceandfire:dreadwood_planks_lock',
		'iceandfire:dread_portal',
		'iceandfire:dread_spawner',
		'iceandfire:armor_copper_metal_boots',
		'iceandfire:armor_copper_metal_leggings',
		'iceandfire:armor_copper_metal_chestplate',
		'iceandfire:armor_copper_metal_helmet',
	].forEach(e => {
		event.remove({ output: `${e}` })
	})

	event.remove({ output: 'endertanks:ender_tank' })
	event.remove({ output: 'enderchests:ender_chest' })
	event.remove({ output: 'endertanks:ender_bucket' })
	event.remove({ output: 'enderchests:ender_bag' })
	event.remove({ output: 'comforts:rope_and_nail' })
	event.remove({ output: 'waystones:warp_plate' })
	event.remove({ output: 'waystones:warp_dust' })
	event.remove({ id: 'thermal:lightning_charge/witch_from_villager' })
	event.remove({ id: 'thermal:lightning_charge/zombified_piglin_from_pig' })
	event.remove({ id: 'thermal:devices/rock_gen/rock_gen_blackstone' })
	event.remove({ output: 'sophisticatedbackpacks:xp_pump_upgrade' })
	event.remove({ output: 'thermal:sugar_cane_block' })
	event.remove({ output: 'thermal:bamboo_block' })
	event.remove({ output: 'thermal:apple_block' })
	event.remove({ output: 'thermal:carrot_block' })
	event.remove({ output: 'thermal:potato_block' })
	event.remove({ output: 'thermal:beetroot_block' })
	event.remove({ output: 'decorative_blocks:chandelier' })
	event.remove({ output: 'decorative_blocks:soul_chandelier' })
	event.remove({ output: 'decorative_blocks:bar_panel' })
	event.remove({ output: 'decorative_blocks:lattice' })
	event.remove({ output: 'create:copycat_step' })
	event.remove({ output: 'create:copycat_panel' })
	event.remove({ output: 'createdeco:netherite_sheet' })
	event.remove({ input: 'createdeco:netherite_sheet' })
	event.remove({ mod: 'pipez' })
	event.remove({ id: 'thermal:rubber_3' })
	event.remove({ output: 'mobcapturingtool:mob_capturing_tool' })
	event.remove({ mod: 'createaddition' })
	event.remove({ output: 'createaddition:electrum_nugget' })
	event.remove({ output: 'railways:remote_lens' })
	event.remove({ output: 'railways:conductor_whistle' })
	event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })
	event.remove({ id: 'create:industrial_iron_block_from_iron_ingots_stonecutting' })
	event.remove({ id: 'createdeco:compacting/industrial_iron_ingot' })
	event.remove({ output: 'biggerreactors:heat_exchanger_casing' })
	event.remove({ output: 'biggerreactors:liquid_obsidian_bucket' })
	event.remove({ output: 'biggerreactors:heat_exchanger_condenser_channel' })
	event.remove({ output: 'biggerreactors:heat_exchanger_computer_port' })
	event.remove({ output: 'biggerreactors:heat_exchanger_terminal' })
	event.remove({ output: 'biggerreactors:heat_exchanger_glass' })
	event.remove({ output: 'biggerreactors:heat_exchanger_fluid_port' })
	event.remove({ output: 'biggerreactors:heat_exchanger_evaporator_channel' })
	event.remove({ output: 'biggerreactors:wrench' })
	event.remove({ id: 'biggerreactors:crafting/ludicrite_block_nether_star' })
	event.remove({ id: 'thermal:machine/biggerreactors/pulverizer_mod_uranium_ingot' })
	event.remove({ id: 'thermal:machine/biggerreactors/pulverizer_mod_blutonium_ingot' })
	event.remove({ id: 'thermal:machine/biggerreactors/pulverizer_mod_cyanite_ingot' })
	event.remove({ id: 'thermal:machine/biggerreactors/pulverizer_mod_graphite_ingot' })
	event.remove({ id: 'thermal:machine/biggerreactors/pulverizer_mod_luducrute_ingot' })
	event.remove({ id: 'create:empty_endertanks_ender_tank_of_minecraft_water' })
	event.remove({ output: 'clickmachine:auto_clicker' })
	event.remove({ output: 'botania:mana_bomb'})
	event.remove({ id: 'create:crafting/appliances/dough' })
	event.remove({ id: 'create:mixing/dough_by_mixing' })
	event.remove({ output: 'farmersdelight:wheat_dough' })
	event.remove({ output: 'naturalist:cooked_egg' })
	event.remove({ output: 'ftbquests:book' })
	event.remove({ output: 'moreminecarts:transport_battery' })
	event.remove({ output: 'elytraboosters:booster_empty' })
	event.remove({ output: 'elytraboosters:forward_launcher' })
	event.remove({ output: 'elytraboosters:fuel_pellet_fast' })
	event.remove({ output: 'elytraboosters:fuel_pellet_slow' })
	event.remove({ output: 'elytraboosters:fuel_pellet_standard' })
	event.remove({ id: 'create:mixing/tea' })
	event.remove({ id: 'aether:skyroot_chest' })
	event.remove({ output: 'farmersdelight:fried_egg' })
	event.remove({ output: 'extractinator:extractinator' })
	event.remove({ id: 'extractinator:extractinating/sand' })
	event.remove({ id: 'extractinator:extractinating/stone' })
	event.remove({ id: 'extractinator:extractinating/gravel' })
	event.remove({ id: 'extractinator:extractinating/cobblestone' })
	event.remove({ id: 'extractinator:extractinating/silt' })
	event.remove({ id: 'extractinator:extractinating/slush' })
	event.remove({ id: 'chisel_chipped_integration:mason_table' })
	event.remove({ id: 'chisel_chipped_integration:tinkering_table' })
	event.remove({ id: 'iceandfire:bestiary' })
	event.remove({ id: 'iceandfire:summoning_crystal_fire' })
	event.remove({ id: 'iceandfire:silver_ingot_to_silver_nugget' })
	event.remove({ id: 'iceandfire:dragonforge/dragonsteel_fire_ingot' })
	event.remove({ id: 'iceandfire:dragonforge/dragonsteel_ice_ingot' })
	event.remove({ id: 'iceandfire:dragonforge/dragonsteel_lightning_ingot' })
	event.remove({ id: 'architects_palette:bone_meal' })
	event.remove({ id: 'create_sa:netherite_jetpack_recipe' })
	event.remove({ id: 'create:crushing/uranium_ore' })

	event.remove({ type: "sfm:printing_press" })
	event.remove({ type: "sfm:falling_anvil" })

	removeInAndOut('createdeco:netherite_nugget')

	let to_remove_orechid = [
		'coal',
		'iron',
		'copper',
		'gold',
		'lapis',
		'redstone',
		'diamond',
		'emerald'
	]

	to_remove_orechid.forEach(e => {
		event.remove({ id: 'botania:orechid/'+e+'_ore' })
		event.remove({ id: 'botania:orechid/deepslate_'+e+'_ore' })
	})

	event.remove({ id: 'botania:orechid_ignem/nether_gold_ore' })
	event.remove({ id: 'botania:orechid_ignem/nether_quartz_ore' })
	event.remove({ id: 'botania:orechid_ignem/ancient_debris' })

	//TODO

	//event.remove({ output: 'sophisticatedcore:xp_still' })
	//event.remove({ output: 'createaddition:seed_oil' })
	//event.remove({ output: 'createaddition:bioethanol' })
	//event.remove({ output: 'biggerreactors:liquid_uranium' })
	//event.remove({ output: 'biggerreactors:liquid_obsidian' })

	//event.remove({ input: 'sophisticatedcore:xp_still' })
	//event.remove({ input: 'createaddition:seed_oil' })
	//event.remove({ input: 'createaddition:bioethanol' })
	//event.remove({ input: 'biggerreactors:liquid_uranium' })
	//event.remove({ input: 'biggerreactors:liquid_obsidian' })

	event.replaceOutput(
		{ output: 'thermal:copper_nugget' },
		'thermal:copper_nugget',
		'create:copper_nugget'
	)

	event.replaceOutput(
		{ output: 'iceandfire:silver_nugget' },
		'iceandfire:silver_nugget',
		'thermal:silver_nugget'
	)

	event.replaceInput(
		{ input: 'immersive_aircraft:propeller'},
		'immersive_aircraft:propeller',
		'create:propeller'
	)

	event.replaceInput(
		{ id: 'immersive_aircraft:improved_landing_gear'},
		'minecraft:coal',
		'thermal:cured_rubber'
	)

	event.replaceInput(
		{ id: 'architects_palette:hadaline_tiles'},
		'architects_palette:hadaline',
		'architects_palette:hadaline_bricks'
	)

	event.replaceInput(
		{ id: 'chisel_chipped_integration:crafting/futura_block'},
		'minecraft:redstone',
		'minecraft:glowstone_dust'
	)

	event.shaped('6x biomesoplenty:orange_sandstone_slab', [
		'AAA'
	], {
		A: ['biomesoplenty:orange_sandstone', 'biomesoplenty:chiseled_orange_sandstone']
	})

	event.shaped('6x biomesoplenty:white_sandstone_slab', [
		'AAA'
	], {
		A: ['biomesoplenty:white_sandstone', 'biomesoplenty:chiseled_white_sandstone']
	})

	event.shaped('6x biomesoplenty:black_sandstone_slab', [
		'AAA'
	], {
		A: ['biomesoplenty:black_sandstone', 'biomesoplenty:chiseled_black_sandstone']
	})

	event.shaped('immersive_aircraft:industrial_gears', [
		'  C', 
		' B ',
		'A  '
	], {
		A: 'thermal:iron_gear',
		B: 'create:large_cogwheel',
		C: 'thermal:copper_gear'
	})

	event.shaped('immersive_aircraft:sturdy_pipes', [
		'ABA'
	], {
		A: 'minecraft:iron_ingot',
		B: 'create:fluid_pipe',
	})

	event.shaped('immersive_aircraft:bomb_bay', [
		'ABA',
		'ACA'
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:slime_block',
		C: 'minecraft:tnt'
	})

	event.shaped('immersive_aircraft:heavy_crossbow', [
		'AB',
		'BC'
	], {
		A: 'minecraft:crossbow',
		B: '#minecraft:logs',
		C: 'minecraft:iron_ingot'
	})

	event.shaped('immersive_aircraft:hull', [
		'ABA',
		'CCC',
		'ABA'
	], {
		A: '#minecraft:logs',
		B: 'create:brass_ingot',
		C: 'minecraft:iron_ingot'
	})

	event.shaped('immersive_aircraft:rotary_cannon', [
		'DCA',
		' B ',
		' A '
	], {
		A: 'minecraft:copper_ingot',
		B: 'immersive_aircraft:industrial_gears',
		C: 'minecraft:dispenser',
		D: 'create:precision_mechanism'
	})

	event.shaped('immersive_aircraft:engine', [
		'CEC',
		'ABA',
		'ADA'
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:blast_furnace',
		C: 'minecraft:piston',
		D: 'immersive_aircraft:boiler',
		E: 'create:precision_mechanism'
	})

	['man_of_many_planes:economy_plane', 'create:white_sail', 'create:propeller', 'immersive_aircraft:engine', 'immersive_aircraft:hull']

	event.recipes.create.mechanical_crafting('man_of_many_planes:economy_plane',[
		' HS  ',
		' HS  ',
		'PHSHS',
		' EHHS',
		'PHSHS',
		' HS  ',
		' HS  '
	],{
		E: 'immersive_aircraft:engine',
		P: 'create:propeller',
		H: 'immersive_aircraft:hull',
		S: 'create:white_sail'
	})

	event.recipes.create.mechanical_crafting('immersive_aircraft:biplane',[
		' HS  ',
		' HSHS',
		'PEHHS',
		' HSHS',
		' HS  ',
	],{
		E: 'immersive_aircraft:engine',
		P: 'create:propeller',
		H: 'immersive_aircraft:hull',
		S: 'create:white_sail'
	})

	event.recipes.create.mechanical_crafting('man_of_many_planes:scarlet_biplane',[
		'  II  ',
		'  HS  ',
		'  HSII',
		'IIHSHS',
		'PEEHHS',
		'IIHSHS',
		'  HSII',
		'  HS  ',
		'  II  ',
	],{
		E: 'immersive_aircraft:engine',
		P: 'create:propeller',
		H: 'immersive_aircraft:hull',
		S: 'create:white_sail',
		I: 'minecraft:iron_ingot'
	})

	event.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter',[
		'PB BP',
		'BBHBB',
		' HHE ',
		'BBHBB',
		'PB BP',
	],{
		E: 'immersive_aircraft:engine',
		P: 'create:propeller',
		H: 'immersive_aircraft:hull',
		B: 'minecraft:bamboo'
	})

	event.recipes.create.mechanical_crafting('immersive_aircraft:airship',[
		'SSSSS',
		'SSSSS',
		'RSSSR',
		' R R ',
		' HHES',
		'  HH '
	],{
		E: 'immersive_aircraft:engine',
		H: 'immersive_aircraft:hull',
		S: 'create:white_sail',
		R: 'farmersdelight:rope'
	})

	event.shaped('immersive_aircraft:cargo_airship', [
		'ABA',
		'ADA',
		'CBC'
	], {
		A: '#forge:chests/wooden',
		B: 'immersive_aircraft:hull',
		C: 'farmersdelight:rope',
		D: 'immersive_aircraft:airship'
	})

	let weapons = [
		'gunswithoutrosesadditions:terra_shotgun',
		'gunswithoutrosesadditions:manasteel_gun',
		'gunswithoutroses:diamond_gatling',
		'gunswithoutroses:diamond_sniper',
		'gunswithoutroses:diamond_shotgun',
		'gunswithoutroses:gold_gun',
		'gunswithoutroses:iron_gun',
		'meetyourfight:cocktail_shotgun',
		'meetyourfight:phantasmal_rifle',
		'gunswithoutrosesadditions:terra_shotgun',
		'gunswithoutrosesadditions:elementium_gun'
	].forEach(e => {
		event.replaceInput(
			{ id: e},
			"minecraft:flint",
			"create:precision_mechanism"
		)
	})

	event.replaceInput(
		{ id: 'reliquary:hammer_assembly'},
		"minecraft:stone_button",
		"create:precision_mechanism"
	)

	event.replaceInput(
		{ id: 'enderchests:ender_pouch'},
		"minecraft:ender_eye",
		"minecraft:ender_chest"
	)

	event.remove({ id: 'gunswithoutroses:blaze_gun' })

	event.shaped('gunswithoutroses:blaze_gun', [
		'A  ', 
		'BAC',
		' BA'
	], {
		A: 'minecraft:nether_brick',
		B: 'minecraft:blaze_rod',
		C: 'gunswithoutroses:gold_gun'
	})

	event.replaceInput(
		{ id: 'meetyourfight:haunted_bell'},
		'minecraft:cobbled_deepslate',
		'minecraft:soul_sand'
	)

	event.replaceInput(
		{ input: 'immersive_aircraft:sail'},
		'immersive_aircraft:sail',
		'create:white_sail'
	)

	event.replaceInput(
		{ id: 'create_sa:brass_jetpack_recipe'},
		'create_sa:steam_engine',
		'create:precision_mechanism'
	)

	event.replaceInput(
		{ id: 'create_sa:slime_boots_recipe'},
		'minecraft:slime_ball',
		'minecraft:slime_block'
	)

	event.replaceInput(
		{ id: 'usefulslime:slime_boots'},
		'minecraft:slime_ball',
		'#forge:slimeballs'
	)

	event.replaceInput(
		{ id: 'usefulslime:slime_sling'},
		'minecraft:slime_ball',
		'#forge:slimeballs'
	)

	event.replaceInput(
		{ id: 'create_sa:brass_exoskeleton_recipe'},
		'create_sa:steam_engine',
		'create:precision_mechanism'
	)

	event.replaceInput(
		{ id: 'colossalchests:chest_wall_obsidian'},
		"#minecraft:logs",
		'colossalchests:chest_wall_diamond'
	)

	let collos = [
		"wood",
		"copper",
		"iron",
		"gold",
		"diamond",
		"obsidian"
	].forEach(e => {
		event.shaped('colossalchests:interface_'+e, [
			' B ', 
			'BAB',
			' B '
		], {
			A: 'colossalchests:chest_wall_'+e,
			B: '#forge:stone'
		})
		event.shaped('colossalchests:colossal_chest_'+e, [
			' B ', 
			'BAB',
			' B '
		], {
			A: 'colossalchests:chest_wall_'+e,
			B: 'minecraft:emerald'
		})
	})

	event.shaped('quarryplus:solid_fuel_quarry', [
		'ABA', 
		'ACA',
		'ADA'
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:blast_furnace',
		C: 'thermal:iron_gear',
		D: 'minecraft:iron_pickaxe'
	})

	event.shaped('quarryplus:quarry', [
		'ADA', 
		'BEB',
		'CFC'
	], {
		A: 'thermal:iron_gear',
		B: 'thermal:gold_gear',
		C: 'thermal:diamond_gear',
		D: 'thermal:rf_coil',
		E: 'quarryplus:solid_fuel_quarry',
		F: 'minecraft:diamond_pickaxe'
	})

	event.shaped('quarryplus:book_mover', [
		'ADA', 
		'BAB',
		'CEC'
	], {
		A: 'thermal:gold_gear',
		B: 'thermal:diamond_gear',
		C: 'thermal:enderium_gear',
		D: 'thermal:rf_coil',
		E: "minecraft:enchanting_table",
	})

	event.shaped('quarryplus:pump_module', [
		'ABA', 
		'ACA',
		'ADA'
	], {
		A: 'minecraft:copper_ingot',
		B: '#thermal:glass/hardened',
		C: 'thermal:gold_gear',
		D: 'minecraft:cactus'
	})

	event.shaped('quarryplus:exp_module', [
		' B ', 
		'ACA',
		' A '
	], {
		A: 'minecraft:gold_ingot',
		B: 'thermal:xp_crystal',
		C: 'quarryplus:pump_module',
	})

	event.shaped('quarryplus:repeat_tick_module', [
		'ABA', 
		'CDC'
	], {
		A: 'minecraft:sugar',
		B: 'thermal:diamond_gear',
		C: 'thermal:signalum_ingot',
		D: 'thermal:redstone_servo'
	})

	event.shaped('quarryplus:marker', [
		'A', 
		'B'
	], {
		A: 'minecraft:glowstone_dust',
		B: 'minecraft:redstone_torch'
	})

	event.shaped('quarryplus:marker16', [
		'A', 
		'B'
	], {
		A: '#forge:storage_blocks/redstone',
		B: 'quarryplus:flex_marker'
	})

	event.shaped('tesseract:tesseract', [
		'ADA', 
		'BFC',
		'AEA'
	], {
		A: '#forge:obsidian',
		B: 'endertanks:ender_tank',
		C: 'enderchests:ender_chest',
		D: 'minecraft:redstone',
		E: 'thermal:rf_coil',
		F: 'thermal:enderium_block'
	})

	event.shaped('tesseract:tesseract', [
		'ADA', 
		'CFB',
		'AEA'
	], {
		A: '#forge:obsidian',
		B: 'endertanks:ender_tank',
		C: 'enderchests:ender_chest',
		D: 'minecraft:redstone',
		E: 'thermal:rf_coil',
		F: 'thermal:enderium_block'
	})

	event.shaped('sfm:manager', [
		'CBC', 
		'BAB',
		'CBC'
	], {
		A: 'kubejs:star_block',
		B: 'sfm:cable',
		C: 'minecraft:redstone'
	})

	event.shaped('sfm:water_tank', [
		'CBC', 
		'DAD',
		'CBC'
	], {
		A: 'kubejs:star_block',
		B: "minecraft:water_bucket",
		C: "minecraft:iron_ingot",
		D: "minecraft:gold_ingot"
	})

	event.shaped('4x sfm:cable', [
		'CDC', 
		'BAB',
		'CDC'
	], {
		A: 'pipez:universal_pipe',
		B: 'minecraft:iron_ingot',
		C: 'thermal:cured_rubber',
		D: 'minecraft:gold_ingot'
	})

	event.shaped('sfm:disk', [
		'DFG', 
		'CBC',
		'AAA'
	], {
		A: 'minecraft:redstone',
		B: 'minecraft:diamond',
		C: 'minecraft:paper',
		D: 'minecraft:blue_dye',
		F: 'minecraft:green_dye',
		G: 'minecraft:red_dye',
	})

	event.replaceInput(
		{ id: 'sfm:labelgun'},
		'minecraft:blue_dye',
		'#forge:dyes'
	)

	event.replaceInput(
		{ id: 'sfm:labelgun'},
		'minecraft:black_dye',
		'#forge:dyes'
	)

	event.replaceInput(
		{ id: 'sfm:network_tool'},
		"minecraft:heavy_weighted_pressure_plate",
		"minecraft:redstone_lamp"
	)

	event.shaped('4x thermal:nuke_grenade', [
			'CBC', 
			'BAB',
			'CBC'
		], {
			A: 'minecraft:iron_ingot',
			B: 'biggerreactors:ludicrite_ingot',
			C: 'minecraft:tnt'
		}
	)

	event.shaped('thermal:nuke_tnt', [
			'ABA', 
			'BAB',
			'ABA'
		], {
			A: 'minecraft:tnt',
			B: 'biggerreactors:ludicrite_ingot'
		}
	)

	event.shaped('botania:mana_bomb', [
			'CBC', 
			'BAB',
			'CBC'
		], {
			A: 'botania:life_essence',
			B: 'thermal:nuke_tnt',
			C: 'botania:glimmering_livingwood_log'
		}
	)

	event.shaped('create_sa:slime_helmet', [
		'ABA', 
		'C C'
	], {
		A: '#forge:slimeballs',
		B: 'minecraft:slime_block',
		C: 'create:andesite_alloy'
	})

	event.shaped('6x pipez:item_pipe', [
			'ABA'
		], {
			A: 'thermal:tin_ingot',
			B: 'thermal:lead_ingot'
		}
	)

	event.shaped('6x pipez:item_pipe', [
			'ABA'
		], {
			A: 'thermal:tin_ingot',
			B: '#thermal:glass/hardened'
		}
	)

	event.shaped('6x pipez:fluid_pipe', [
			'ABA'
		], {
			A: 'minecraft:copper_ingot',
			B: 'thermal:lead_ingot'
		}
	)

	event.shaped('6x pipez:fluid_pipe', [
			'ABA'
		], {
			A: 'minecraft:copper_ingot',
			B: '#thermal:glass/hardened'
		}
	)

	event.shaped('6x pipez:energy_pipe', [
			'CCC',
			'ABA',
			'CCC'
		], {
			A: 'thermal:lead_ingot',
			B: '#forge:glass',
			C: 'minecraft:redstone'
		}
	)

	event.shaped('6x pipez:universal_pipe', [
			'CDE',
			'ABA',
			'CDE'
		], {
			A: '#forge:slimeballs',
			B: 'minecraft:diamond',
			C: 'pipez:item_pipe',
			D: 'pipez:fluid_pipe',
			E: 'pipez:energy_pipe'
		}
	)

	event.shaped('2x pipez:basic_upgrade', [
			'ACA',
			'CBC',
			'ACA'
		], {
			A: 'thermal:tin_plate',
			B: 'minecraft:piston',
			C: 'minecraft:redstone'
		}
	)

	event.shapeless('pipez:improved_upgrade', [
			'pipez:basic_upgrade',
			'minecraft:gold_ingot'
		]
	)

	event.shapeless('pipez:advanced_upgrade', [
			'pipez:improved_upgrade',
			'minecraft:diamond'
		]
	)

	event.shapeless('pipez:ultimate_upgrade', [
			'pipez:advanced_upgrade',
			'minecraft:netherite_ingot'
		]
	)

	event.shaped('pipez:filter_destination_tool', [
			'AEA',
			'CBC',
			'ADA'
		], {
			A: 'minecraft:iron_ingot',
			B: '#forge:glass_panes',
			C: 'minecraft:redstone',
			D: 'thermal:signalum_ingot',
			E: 'thermal:iron_gear'
		}
	)

	let supports = [
		['createdeco:brass_support', 'create:brass_ingot'],
		['createdeco:andesite_support', 'create:andesite_alloy'],
		['createdeco:iron_support', 'minecraft:iron_ingot'],
		['createdeco:copper_support', 'minecraft:copper_ingot'],
		['createdeco:zinc_support', 'create:zinc_ingot'],
		['createdeco:industrial_iron_support', 'createdeco:industrial_iron_ingot']
	].forEach(e => {
		event.shaped("4x "+e[0], [
			'A A',
			' A ',
			'A A'
		], {
			A: e[1]
		})
	})

	event.recipes.create.pressing('createdeco:netherite_coin', 'thermal:netherite_nugget',)
	event.recipes.create.pressing('thermal:tin_plate', 'thermal:tin_ingot',)
	event.recipes.create.pressing('thermal:lead_plate', 'thermal:lead_ingot')
	event.recipes.create.pressing('thermal:silver_plate', 'thermal:silver_ingot')
	event.recipes.create.pressing('thermal:bronze_plate', 'thermal:bronze_ingot' )
	event.recipes.create.pressing('thermal:nickel_plate', 'thermal:nickel_ingot' )
	event.recipes.create.pressing('thermal:invar_plate', 'thermal:invar_ingot')
	event.recipes.create.pressing('thermal:signalum_plate', 'thermal:signalum_ingot')
	event.recipes.create.pressing('thermal:enderium_plate', 'thermal:enderium_ingot')
	event.recipes.create.pressing('thermal:constantan_plate', 'thermal:constantan_ingot')
	event.recipes.create.pressing('thermal:lumium_plate', 'thermal:lumium_ingot')
	event.recipes.create.pressing('thermal:electrum_plate', 'thermal:electrum_ingot')

	event.recipes.create.compacting('thermal:rubber', Fluid.of('thermal:latex',250))

	event.shapeless('kubejs:xp_converter_rel', [
		"minecraft:gold_ingot",
		"minecraft:ender_pearl",
		"minecraft:lapis_lazuli"
	])

	event.shapeless('kubejs:xp_converter_rel', [
		"kubejs:xp_converter_knw"
	])

	event.shapeless("kubejs:xp_converter_knw", [
		"kubejs:xp_converter_rel"
	])

	event.recipes.create.mixing(['kubejs:xp_converter_rel',Fluid.of("reliquary:xp_juice_still",250)],['kubejs:xp_converter_rel',Fluid.of("cofh_core:experience",250)])
	event.recipes.create.mixing(['kubejs:xp_converter_knw',Fluid.of("cofh_core:experience",250)],['kubejs:xp_converter_knw',Fluid.of("reliquary:xp_juice_still",250)])

	event.shapeless('4x thermal:rubber', [
			'thermal:latex_bucket'
		]
	)

	event.shaped('create:belt_connector', [
			'AAA'
		], {
			A: 'thermal:cured_rubber'
		}
	)

	event.shaped('create:spout', [
			'A',
			'B'
		], {
			A: 'create:copper_casing',
			B: 'thermal:cured_rubber'
		}
	)

	event.shaped('2x create:andesite_funnel', [
			'A',
			'B'
		], {
			A: 'create:andesite_alloy',
			B: 'thermal:cured_rubber'
		}
	)

	event.shaped('2x create:brass_funnel', [
			'C',
			'A',
			'B'
		], {
			A: 'create:brass_ingot',
			B: 'thermal:cured_rubber',
			C: 'create:electron_tube'
		}
	)

	event.shaped('2x create:andesite_tunnel', [
			'AA',
			'BB'
		], {
			A: 'create:andesite_alloy',
			B: 'thermal:cured_rubber'
		}
	)

	event.shaped('2x create:brass_tunnel', [
			'C ',
			'AA',
			'BB'
		], {
			A: 'create:brass_ingot',
			B: 'thermal:cured_rubber',
			C: 'create:electron_tube'
		}
	)

	event.shaped('create:hose_pulley', [
			'A',
			'B',
			'C'
		], {
			A: 'create:copper_casing',
			B: 'thermal:cured_rubber_block',
			C: '#forge:plates/copper'
		}
	)

	event.shaped('create:elevator_pulley', [
			'A',
			'B',
			'C'
		], {
			A: 'create:brass_casing',
			B: 'thermal:cured_rubber_block',
			C: '#forge:plates/iron'
		}
	)

	event.shaped('kubejs:golden_cookie', [
			'CBC',
			'BAB',
			'CBC'
		], {
			A: 'minecraft:cookie',
			B: 'minecraft:gold_ingot',
			C: 'minecraft:gold_nugget'
		}
	)

	event.shaped('kubejs:dragon_block', [
			'EAE',
			'CDC',
			'EBE'
		], {
			A: 'kubejs:golden_cookie',
			B: 'minecraft:ghast_tear',
			C: 'minecraft:redstone',
			D: 'thermal:diamond_gear',
			E: 'kubejs:dark_stone'
		}
	)

	event.shaped('kubejs:key_wrench', [
			' A ',
			' BA',
			'A  '
		], {
			A: 'minecraft:bone',
			B: 'thermal:gold_gear',
		}
	)

	event.shapeless('4x kubejs:dark_stone', [
			'minecraft:soul_sand',
			'4x #forge:stone',
		]
	)


	event.shapeless('kubejs:dragon_food', [
			[
				'#forge:raw_pork',
				'#forge:raw_chicken',
				'#forge:raw_mutton',
				'#forge:raw_beef',
				'#forge:raw_fishes',
				'aquaculture:fish_fillet_raw'
			], 
			'#minecraft:powders',
			'#minecraft:powders'
		]
	)

	event.shaped('6x kubejs:dark_stone_slab', [
			'AAA'
		], {
			A: 'kubejs:dark_stone'
		}
	)

	event.stonecutting('2x kubejs:dark_stone_slab', 'kubejs:dark_stone')

	event.shaped(Item.of('endertanks:ender_tank', '{code:"000",owner:"all"}'), [
			'ACA',
			'BDB',
			'AEA'
		], {
			A: 'minecraft:blaze_rod',
			B: 'minecraft:obsidian',
			C: '#minecraft:wool',
			D: 'minecraft:bucket',
			E: 'minecraft:ender_pearl'
		}
	)

	event.shaped(Item.of('enderchests:ender_chest', '{code:"000",owner:"all"}'), [
			'ACA',
			'BDB',
			'AEA'
		], {
			A: 'minecraft:blaze_rod',
			B: 'minecraft:obsidian',
			C: '#minecraft:wool',
			D: 'minecraft:chest',
			E: 'minecraft:ender_pearl'
		}
	)

	event.shapeless('kubejs:nugget_compound', [
			'#forge:raw_chicken',
			'#forge:eggs',
			'#forge:flour/wheat',
		]
	)

	event.smelting('8x kubejs:nugget', 'kubejs:nugget_compound')
	event.smoking('8x kubejs:nugget', 'kubejs:nugget_compound')
	event.campfireCooking('8x kubejs:nugget', 'kubejs:nugget_compound')

	event.recipes.thermal.pulverizer('kubejs:brass_dust', 'create:brass_ingot').energy(2000)
	event.recipes.thermal.pulverizer('kubejs:brass_dust', 'create:brass_sheet').energy(2000)

	event.recipes.thermal.smelter('create:brass_ingot', 'kubejs:brass_dust').energy(1600)
	event.recipes.thermal.smelter('create:brass_ingot', 'create:brass_sheet').energy(1600)

	event.recipes.thermal.pulverizer('kubejs:zinc_dust', 'create:zinc_ingot').energy(2000)
	event.recipes.thermal.pulverizer('kubejs:zinc_dust', 'createdeco:zinc_sheet').energy(2000)

	event.recipes.thermal.smelter('create:zinc_ingot', 'kubejs:zinc_dust').energy(1600)
	event.recipes.thermal.smelter('create:zinc_ingot', 'createdeco:zinc_sheet').energy(1600)

	event.recipes.thermal.pulverizer(Item.of('kubejs:zinc_dust').withChance(1.25), 'create:raw_zinc').energy(4000).xp(0.1)
	event.recipes.thermal.pulverizer([Item.of('kubejs:zinc_dust').withChance(2), Item.of('minecraft:gravel').withChance(0.2)], '#forge:ores/zinc').energy(4000).xp(0.2)
	
	event.recipes.thermal.smelter(Item.of('create:zinc_ingot').withChance(1.5), 'create:raw_zinc').energy(3200).xp(0.1)
	event.recipes.thermal.smelter([Item.of('create:zinc_ingot').withChance(1), Item.of('thermal:rich_slag').withChance(0.2)], '#forge:ores/zinc').energy(3200).xp(0.2)

	event.smelting('create:brass_ingot','kubejs:brass_dust')
	event.blasting('create:brass_ingot','kubejs:brass_dust')
	event.smelting('create:zinc_ingot','kubejs:zinc_dust')
	event.blasting('create:zinc_ingot','kubejs:zinc_dust')

	event.recipes.thermal.pulverizer('redstone_arsenal:flux_dust', 'redstone_arsenal:flux_ingot').energy(2000)
	event.recipes.thermal.smelter('redstone_arsenal:flux_ingot', 'redstone_arsenal:flux_dust').energy(1600)

	event.recipes.thermal.smelter('2x create:brass_ingot', [['kubejs:zinc_dust','create:zinc_ingot'],['thermal:copper_dust','minecraft:copper_ingot']]).energy(3200)

	event.shaped('mobcapturingtool:mob_capturing_tool', [
			'ACA',
			'BDB',
			'AEA'
		], {
			A: 'thermal:obsidian_glass',
			B: 'thermal:silver_ingot',
			C: 'minecraft:red_dye',
			D: 'minecraft:ender_pearl',
			E: 'minecraft:diamond'
		}
	)

	event.recipes.createMechanicalCrafting('createaddition:alternator', [
			'  B  ',
			' ACA ',
			'ACECA',
			' ADA '
		], {
			A: '#forge:plates/iron',
			B: 'create:andesite_alloy',
			C: 'kubejs:copper_spool',
			D: 'createaddition:capacitor',
			E: 'createaddition:iron_rod'
		}
	)

	event.recipes.createMechanicalCrafting('createaddition:electric_motor', [
			'  B  ',
			' ACA ',
			'ACECA',
			' ADA '
		], {
			A: '#forge:plates/brass',
			B: 'create:andesite_alloy',
			C: 'kubejs:copper_spool',
			D: 'createaddition:capacitor',
			E: 'createaddition:iron_rod'
		}
	)

	event.recipes.createCrushing('thermal:diamond_dust', 'minecraft:diamond')
	event.recipes.createCrushing(["4x kubejs:little_star",Item.of("2x kubejs:little_star").withChance(0.25)], "minecraft:nether_star")
	event.recipes.thermal.pulverizer(["4x kubejs:little_star",Item.of("2x kubejs:little_star").withChance(0.25)], "minecraft:nether_star").energy(2000)

	event.shapeless('createaddition:diamond_grit_sandpaper', [
			'minecraft:paper',
			'#forge:dusts/diamond'
		]
	)

	event.shaped('createaddition:modular_accumulator', [
			' B ',
			'ADA',
			' C '
		], {
			A: 'createaddition:capacitor',
			B: '#forge:plates/copper',
			C: ['#forge:plates/gold','#forge:plates/electrum'],
			D: 'create:brass_casing'
		}
	)

	event.shaped('kubejs:xp_wand', [
		' BC',
		' AB',
		'A  '
	], {
		A: "kubejs:reinforced_handle",
		B: 'minecraft:emerald',
		C: 'minecraft:experience_bottle'
	})

	event.shaped('createaddition:capacitor', [
			'A',
			'B',
			'C'
		], {
			A: 'createdeco:zinc_sheet',
			B: '#forge:plates/copper',
			C: 'minecraft:redstone'
		}
	)

	event.shaped('createaddition:capacitor', [
			'A',
			'B',
			'C'
		], {
			A: '#forge:plates/copper',
			B: 'createdeco:zinc_sheet',
			C: 'minecraft:redstone'
		}
	)

	event.shaped('kubejs:copper_spool', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'createaddition:copper_wire',
		B: 'minecraft:stick'
	})

	event.shaped('4x createaddition:iron_rod', [
		'A',
		'A'
	], {
		A: 'minecraft:iron_ingot'
	})

	event.shapeless('2x createaddition:copper_wire', [
		'#forge:plates/copper',
		'#forge:shears'
	])
	.damageIngredient('#forge:shears')

	event.recipes.create.deploying('2x createaddition:copper_wire', ['#forge:plates/copper', '#forge:shears'])

	event.shapeless('createaddition:portable_energy_interface', [
			'create:brass_casing',
			'create:chute',
			'kubejs:copper_spool'
		]
	)

	event.recipes.create.compacting('createaddition:cake_base', ['#forge:eggs', '2x minecraft:sugar', '#forge:dough/wheat'])

	event.smelting('createaddition:cake_base_baked', 'createaddition:cake_base')
	event.smoking('createaddition:cake_base_baked', 'createaddition:cake_base')
	event.campfireCooking('createaddition:cake_base_baked', 'createaddition:cake_base')

	event.recipes.create.filling('createaddition:honey_cake', [Fluid.of('create:honey',500), 'createaddition:cake_base_baked'])
	event.recipes.create.filling('createaddition:chocolate_cake', [Fluid.of('create:chocolate',500), 'createaddition:cake_base_baked'])
	event.recipes.create.filling('minecraft:cake', [Fluid.of('minecraft:milk',1000), 'createaddition:cake_base_baked'])

	event.shaped('minecraft:enchanted_golden_apple', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'minecraft:gold_block',
			B: 'minecraft:apple'
		}
	)

	event.recipes.create.compacting('8x create:industrial_iron_block', 'minecraft:iron_block').heated()
	event.recipes.create.compacting('8x createdeco:industrial_iron_ingot', 'minecraft:iron_ingot').heated()

	event.shaped('biggerreactors:uranium_ingot', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'kubejs:uranium_nugget',
		}
	)

	event.shapeless('9x kubejs:uranium_nugget', 'biggerreactors:uranium_ingot')
	event.recipes.createSplashing('9x kubejs:uranium_nugget', 'create:crushed_raw_uranium')

	event.recipes.thermal.press('biggerreactors:uranium_ingot', ['9x kubejs:uranium_nugget', 'thermal:press_packing_3x3_die'])
	event.recipes.thermal.press('9x kubejs:uranium_nugget', ['biggerreactors:uranium_ingot', 'thermal:press_unpacking_die'])

	event.smelting('biggerreactors:uranium_ingot', 'create:crushed_raw_uranium').xp(0.1)
	event.blasting('biggerreactors:uranium_ingot', 'create:crushed_raw_uranium').xp(0.1)

	event.recipes.thermal.smelter('biggerreactors:uranium_ingot', 'biggerreactors:uranium_dust').energy(1600)
	event.recipes.thermal.smelter('biggerreactors:ludicrite_ingot', 'biggerreactors:ludicrite_dust').energy(1600)
	event.recipes.thermal.smelter('biggerreactors:graphite_ingot', 'biggerreactors:graphite_dust').energy(1600)
	event.recipes.thermal.smelter('biggerreactors:cyanite_ingot', 'biggerreactors:cyanite_dust').energy(1600)
	event.recipes.thermal.smelter('biggerreactors:blutonium_ingot', 'biggerreactors:blutonium_dust').energy(1600)

	event.recipes.thermal.smelter(Item.of('biggerreactors:uranium_ingot').withChance(1.5), 'biggerreactors:uranium_chunk').energy(3200).xp(0.1)
	event.recipes.thermal.smelter([Item.of('biggerreactors:uranium_ingot').withChance(1), Item.of('thermal:rich_slag').withChance(0.2)], '#forge:ores/uranium').energy(3200)

	event.recipes.thermal.press('biggerreactors:raw_uranium_block', ['9x biggerreactors:uranium_chunk', 'thermal:press_packing_3x3_die'])
	event.recipes.thermal.press('9x biggerreactors:uranium_chunk', ['biggerreactors:raw_uranium_block', 'thermal:press_unpacking_die'])

	let thermalpackun = (input,output) => {
		event.recipes.thermal.press(input, ['9x '+output, 'thermal:press_packing_3x3_die'])
		event.recipes.thermal.press('9x '+output, [input, 'thermal:press_unpacking_die'])
	}

	thermalpackun('biggerreactors:blutonium_block', 'biggerreactors:blutonium_ingot')
	thermalpackun('biggerreactors:cyanite_block', 'biggerreactors:cyanite_ingot')
	thermalpackun('biggerreactors:uranium_block', 'biggerreactors:uranium_ingot')
	thermalpackun('biggerreactors:graphite_block', 'biggerreactors:graphite_ingot')
	thermalpackun('biggerreactors:ludicrite_block', 'biggerreactors:ludicrite_ingot')

	event.recipes.thermal.pulverizer('biggerreactors:blutonium_dust', 'biggerreactors:blutonium_ingot').energy(2000)
	event.recipes.thermal.pulverizer('biggerreactors:cyanite_dust', 'biggerreactors:cyanite_ingot').energy(2000)
	event.recipes.thermal.pulverizer('biggerreactors:uranium_dust', 'biggerreactors:uranium_ingot').energy(2000)
	event.recipes.thermal.pulverizer('biggerreactors:graphite_dust', 'biggerreactors:graphite_ingot').energy(2000)
	event.recipes.thermal.pulverizer('biggerreactors:ludicrite_dust', 'biggerreactors:ludicrite_ingot').energy(2000)

	event.shaped('clickmachine:auto_clicker', [
			' A ',
			'DBD',
			'ECE'
		], {
			A: 'minecraft:chorus_flower',
			B: 'thermal:machine_frame',
			C: 'thermal:rf_coil',
			D: 'thermal:constantan_ingot',
			E: 'thermal:silver_gear'
		}
	)

	event.shaped('clickmachine:auto_clicker', [
			' A ',
			'DBD',
			'ECE'
		], {
			A: 'create:brass_hand',
			B: 'thermal:machine_frame',
			C: 'thermal:rf_coil',
			D: 'create:brass_ingot',
			E: 'thermal:silver_gear'
		}
	)

	let colors = ['red','pink','blue']

	colors.forEach( element => {
		event.shaped('kubejs:gem_'+element, [
				'AAA',
				'ABA',
				'AAA'
			], {
				A: '#forge:dyes/'+element,
				B: 'minecraft:diamond'
			}
		)
	})

	event.shaped('kubejs:gem_green', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: '#forge:dyes/lime',
			B: 'minecraft:diamond'
		}
	)

	let tehrmalrockgen = (result,fluid,catalyst) => {
		if (catalyst) event.custom({
			"type": "thermal:rock_gen",
			"adjacent": fluid,
			"below": catalyst,
			"result": {
				"item": result
			}
		})
		else event.custom({
			"type": "thermal:rock_gen",
			"adjacent": fluid,
			"result": {
				"item": result
			}
		})
	}

	tehrmalrockgen('create:limestone','create:honey')
	tehrmalrockgen('create:scoria','create:chocolate')

	let orechid_noraml = [
		['coal',10],
		['iron',8],
		['copper',8],
		['gold',2.5],
		['lapis',2.5],
		['redstone',2.5],
		['diamond',1],
		['emerald',1]
	]

	let orechid_thermal = [
		['apatite',5],
		['cinnabar',5],
		['niter',5],
		['sulfure',5],
		['tin',8],
		['lead',8],
		['silver',2.5],
		['nickel',8],
		["ruby",2.5],
		["sapphire",2.5]
	]

	orechid_noraml.forEach(e => {
		event.recipes.botania.orechid('minecraft:'+e[0]+'_ore', 'minecraft:stone', e[1])
		event.recipes.botania.orechid('minecraft:deepslate_'+e[0]+'_ore', 'minecraft:deepslate', e[1])
	})

	orechid_thermal.forEach(e => {
		event.recipes.botania.orechid('thermal:'+e[0]+'_ore', 'minecraft:stone', e[1])
		event.recipes.botania.orechid('thermal:deepslate_'+e[0]+'_ore', 'minecraft:deepslate', e[1])
	})

	event.recipes.botania.orechid('thermal:oil_sand', 'minecraft:sand', 8)
	event.recipes.botania.orechid('minecraft:sandstone', 'minecraft:sand', 2.5)

	event.recipes.botania.orechid('thermal:oil_red_sand', 'minecraft:red_sand', 8)
	event.recipes.botania.orechid('minecraft:red_sandstone', 'minecraft:red_sand', 2.5)

	event.recipes.botania.orechid('create:zinc_ore', 'minecraft:stone', 8)
	event.recipes.botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate', 8)

	event.recipes.botania.orechid('biggerreactors:uranium_ore', 'minecraft:stone', 10)
	event.recipes.botania.orechid('biggerreactors:deepslate_uranium_ore', 'minecraft:deepslate', 10)

	event.recipes.botania.orechid_ignem('minecraft:nether_gold_ore','minecraft:netherrack',10)
	event.recipes.botania.orechid_ignem('minecraft:nether_quartz_ore','minecraft:netherrack',8)
	event.recipes.botania.orechid_ignem('kubejs:nether_uranium_ore','minecraft:netherrack',8)
	event.recipes.botania.orechid_ignem('kubejs:nether_cobalt_ore','minecraft:netherrack',5)
	event.recipes.botania.orechid_ignem('minecraft:ancient_debris','minecraft:netherrack',1)

	event.recipes.botania.orechid_ignem('aether:ambrosium_ore','aether:holystone',10)
	event.recipes.botania.orechid_ignem('aether:zanite_ore','aether:holystone',5)
	event.recipes.botania.orechid_ignem('aether:gravitite_ore','aether:holystone',1)

	event.shapeless('3x create:dough', [
		'minecraft:water_bucket',
		'3x create:wheat_flour'
	]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

	event.shapeless('3x create:dough', [
		'#forge:eggs',
		'3x create:wheat_flour'
	])

	event.recipes.create.mixing('3x create:dough',['3x create:wheat_flour', Fluid.of('water',1000)])

	event.shapeless('ftbquests:book', [
		'minecraft:book',
		'minecraft:cookie'
	])
	
	event.recipes.botania.mana_infusion('kubejs:magic_wheat','kubejs:rich_wheat',3000,'kubejs:mutation_catalyst')
	event.recipes.botania.mana_infusion('kubejs:magic_beans','kubejs:rich_beans',3000,'kubejs:mutation_catalyst')
	event.recipes.botania.mana_infusion('kubejs:bloody_tear','kubejs:droplet',3000,'kubejs:spark_catalyst')

	event.recipes.create.filling('kubejs:gue', [Fluid.of("kubejs:heavy_fluid",250), '#forge:slimeballs'])
	event.recipes.thermal.bottler('kubejs:gue', [Fluid.of("kubejs:heavy_fluid",250), '#forge:slimeballs']).energy(400)

	event.shaped('kubejs:mutation_catalyst', [
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'kubejs:dark_stone',
			B: 'thermal:silver_ingot',
			C: 'biggerreactors:uranium_ingot',
			D: 'botania:mana_pearl'
		}
	)

	event.shaped('kubejs:spark_catalyst', [
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'kubejs:dark_stone',
			B: 'thermal:silver_ingot',
			C: 'minecraft:redstone',
			D: 'botania:mana_pearl'
		}
	)

	event.shaped('kubejs:amplifyer_totem', [
			'ADA',
			'CBC',
			'ADA'
		], {
			A: 'kubejs:dark_stone',
			B: 'kubejs:star_ingot',
			C: 'thermal:enderium_ingot',
			D: 'minecraft:redstone'
		}
	)

	event.shaped('kubejs:reinforced_handle', [
			'  A',
			' A ',
			'A  '
		], {
			A: 'thermal:netherite_nugget'
		}
	)

	event.shaped('kubejs:star_pickaxe', [
			'BBB',
			' A ',
			' A '
		], {
			A: 'kubejs:reinforced_handle',
			B: 'kubejs:star_ingot'
		}
	)

	event.shaped('kubejs:farmer_axe', [
			'BBB',
			'BA ',
			' A '
		], {
			A: 'kubejs:reinforced_handle',
			B: 'kubejs:farmer_ingot'
		}
	)

	event.shaped('kubejs:redstone_sword', [
			'  B',
			' BB',
			'AB '
		], {
			A: 'kubejs:reinforced_handle',
			B: 'kubejs:redstone_ingot'
		}
	)

	event.recipes.create.mixing(Fluid.of('kubejs:bloody_tear_fluid',1000),['4x kubejs:bloody_tear', Fluid.of('water',1000)])
	event.recipes.create.mixing('kubejs:powdered_wheat',['minecraft:wheat_seeds','kubejs:power_dust'])
	event.recipes.create.mixing('kubejs:powdered_beans',['minecraft:cocoa_beans','kubejs:power_dust'])

	event.shapeless('3x kubejs:power_dust', [
		'minecraft:bone_meal',
		'minecraft:redstone',
		'minecraft:nether_wart'
	])

	event.recipes.botania.mana_infusion('create:ochrum','create:limestone',200,'botania:alchemy_catalyst')
	event.recipes.botania.mana_infusion('create:limestone','create:asurine',200,'botania:alchemy_catalyst')
	event.recipes.botania.mana_infusion('create:asurine','create:crimsite',200,'botania:alchemy_catalyst')
	event.recipes.botania.mana_infusion('create:crimsite','create:veridium',200,'botania:alchemy_catalyst')
	event.recipes.botania.mana_infusion('create:veridium','create:ochrum',200,'botania:alchemy_catalyst')

	event.recipes.botania.mana_infusion('2x aether:holystone','aether:holystone',200,'botania:conjuration_catalyst')

	event.recipes.botania.mana_infusion('naturalist:crimson_froglass','naturalist:verdant_froglass',200,'botania:alchemy_catalyst')
	event.recipes.botania.mana_infusion('naturalist:verdant_froglass','naturalist:azure_froglass',200,'botania:alchemy_catalyst')
	event.recipes.botania.mana_infusion('naturalist:azure_froglass','naturalist:crimson_froglass',200,'botania:alchemy_catalyst')

	event.recipes.botania.mana_infusion('aether:icestone','aether:holystone',200,'botania:alchemy_catalyst')
	event.recipes.botania.mana_infusion('aether:holystone','aether:icestone',200,'botania:alchemy_catalyst')

	event.recipes.thermal.centrifuge(['2x kubejs:droplet', Item.of('kubejs:droplet').withChance(0.2)], 'kubejs:gue')

	event.recipes.thermal.insolator([Item.of('minecraft:wheat').withChance(2),Item.of('minecraft:wheat_seeds').withChance(1.1),Item.of('kubejs:rich_wheat').withChance(0.1)],"kubejs:powdered_wheat")
	event.recipes.thermal.insolator([Item.of('minecraft:cocoa_beans').withChance(2.5),Item.of('kubejs:rich_beans').withChance(0.1)],"kubejs:powdered_beans")

	event.shaped('kubejs:super_cookie', [
			'ABA'
		], {
			A: 'kubejs:magic_wheat',
			B: 'kubejs:magic_beans'
		}
	)

	event.recipes.thermal.bottler('kubejs:redstone_ingot',[Fluid.of('thermal:redstone',1000),'kubejs:star_ingot']).energy(2000)
	event.recipes.create.filling('kubejs:redstone_ingot',[Fluid.of('thermal:redstone',1000),'kubejs:star_ingot'])

	event.recipes.thermal.insolator(Item.of('kubejs:farmer_ingot').withChance(1.1), 'kubejs:star_ingot').water(1000).energy(20000)
	event.recipes.thermal.furnace('kubejs:star_ingot','kubejs:star_dust').energy(2000)

	event.recipes.thermal.furnace('kubejs:tech_ingot','kubejs:tech_dust').energy(2000)
	event.recipes.thermal.furnace('kubejs:creativ_ingot','kubejs:creativ_dust').energy(2000)

	event.smelting('kubejs:tech_ingot','kubejs:tech_dust')
	event.blasting('kubejs:tech_ingot','kubejs:tech_dust')

	event.smelting('kubejs:creativ_ingot','kubejs:creativ_dust')
	event.blasting('kubejs:creativ_ingot','kubejs:creativ_dust')

	event.smelting('kubejs:star_ingot','kubejs:star_dust')
	event.blasting('kubejs:star_ingot','kubejs:star_dust')
	
	inter = 'kubejs:incomplete_galaxy_cookie'
	event.recipes.create.sequenced_assembly('kubejs:galaxy_cookie', 'kubejs:golden_cookie', [
			event.recipes.createDeploying(inter, [inter, 'kubejs:charged_matter']),
			event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:bloody_tear_fluid',250)]),
			event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(64)

	event.recipes.create.crushing(['2x kubejs:charged_matter', Item.of('kubejs:charged_matter').withChance(0.20)], 'kubejs:charged_cookie')
	event.recipes.thermal.pulverizer(['2x kubejs:charged_matter', Item.of('kubejs:charged_matter').withChance(0.20)], 'kubejs:charged_cookie').energy(2000)

	event.recipes.create.crushing([Item.of('kubejs:galaxy_cookie').withChance(0.99), Item.of('kubejs:galaxy_dust').withChance(0.1)], 'kubejs:galaxy_cookie')

	let crossCraft = (id,ing) => {
		event.shaped(id, [
				' A ',
				'AAA',
				' A '
			], {
				A: ing
			}
		)
	}

	let hullColor = [
		'white',
		'black',
		'gray',
		'light_gray',
		'brown',
		'red',
		'orange',
		'yellow',
		'lime',
		'green',
		'cyan',
		'light_blue',
		'blue',
		'purple',
		'magenta',
		'pink'
	].forEach(e => {

		let slashed = e+'_slashed_locometal'
		let b_wrapped = e+'_brass_wrapped_locometal'
		let c_wrapped = e+'_copper_wrapped_locometal'
		let i_wrapped = e+'_iron_wrapped_locometal'

		event.remove({ id: `railways:mechanical_crafting/${e}_locometal_boiler` })
		event.remove({ id: `railways:mechanical_crafting/${b_wrapped}_boiler` })
		event.remove({ id: `railways:mechanical_crafting/${c_wrapped}_boiler` })
		event.remove({ id: `railways:mechanical_crafting/${i_wrapped}_boiler` })

		crossCraft('railways:'+e+'_locometal_boiler','railways:'+slashed)
		crossCraft('railways:'+b_wrapped+'_boiler','railways:'+b_wrapped)
		crossCraft('railways:'+c_wrapped+'_boiler','railways:'+c_wrapped)
		crossCraft('railways:'+i_wrapped+'_boiler','railways:'+i_wrapped)
	})

	event.remove({ id: `railways:mechanical_crafting/locometal_boiler` })
	event.remove({ id: `railways:mechanical_crafting/brass_wrapped_locometal_boiler` })
	event.remove({ id: `railways:mechanical_crafting/copper_wrapped_locometal_boiler` })
	event.remove({ id: `railways:mechanical_crafting/iron_wrapped_locometal_boiler` })

	crossCraft('railways:locometal_boiler','railways:slashed_locometal')
	crossCraft('railways:brass_wrapped_locometal_boiler','railways:brass_wrapped_locometal')
	crossCraft('railways:copper_wrapped_locometal_boiler','railways:copper_wrapped_locometal')
	crossCraft('railways:iron_wrapped_locometal_boiler','railways:iron_wrapped_locometal')

	event.shaped('moreminecarts:transport_battery', [
			'ABA',
			'ACA',
			'ABA'
		], {
			A: 'minecraft:copper_block',
			B: 'moreminecarts:silica_steel',
			C: 'minecraft:redstone'
		}
	)

	event.shapeless('thermal:blizz_rod', [
		'minecraft:blaze_rod',
		'thermal:blizz_powder',
	])

	event.shapeless('thermal:blitz_rod', [
		'minecraft:blaze_rod',
		'thermal:blitz_powder',
	])

	event.shapeless('thermal:basalz_rod', [
		'minecraft:blaze_rod',
		'thermal:basalz_powder',
	])

	event.shapeless('4x elytraboosters:fuel_pellet_standard', [
		'minecraft:iron_ingot',
		'3x minecraft:gunpowder'
	])

	event.shapeless('4x elytraboosters:fuel_pellet_fast', [
		'minecraft:iron_ingot',
		'2x minecraft:gunpowder',
		'1x minecraft:glowstone_dust'
	])

	event.shapeless('4x elytraboosters:fuel_pellet_slow', [
		'minecraft:iron_ingot',
		'2x minecraft:gunpowder',
		'1x minecraft:redstone'
	])

	event.shapeless('elytraboosters:forward_launcher', [
		'elytraboosters:booster_empty',
		'2x elytraboosters:fuel_pellet_standard',
		'minecraft:piston'
	])

	event.shaped('elytraboosters:booster_empty', [
			'BA ',
			'ABA',
			' AA'
		], {
			A: 'minecraft:iron_ingot',
			B: 'minecraft:glass'
		}
	)

	event.shapeless('2x kubejs:brass_dust', [
		'kubejs:zinc_dust',
		'thermal:copper_dust'
	])

	event.shapeless('2x create:brass_ingot', [
		['kubejs:zinc_dust',"create:zinc_ingot"],
		['thermal:copper_dust',"minecraft:copper_ingot"],
		'minecraft:fire_charge'
	])

	event.recipes.thermal.centrifuge(['kubejs:zinc_dust', 'thermal:copper_dust'],"2x kubejs:brass_dust").energy(3000)

	event.recipes.thermal.insolator(Item.of('farmersdelight:onion').withChance(2.5),'farmersdelight:onion').xp(0.15)
	event.recipes.thermal.insolator([Item.of('farmersdelight:tomato').withChance(2),Item.of('farmersdelight:tomato_seeds').withChance(1.1),Item.of('farmersdelight:rotten_tomato').withChance(0.05)],'farmersdelight:tomato_seeds').xp(0.15)
	event.recipes.thermal.insolator([Item.of('farmersdelight:cabbage').withChance(2),Item.of('farmersdelight:cabbage_seeds').withChance(1.1)],'farmersdelight:cabbage_seeds').xp(0.15)
	event.recipes.thermal.insolator(Item.of('farmersdelight:rice_panicle').withChance(2.5),'farmersdelight:rice').xp(0.15)
	event.recipes.thermal.insolator([Item.of('thermal:tea').withChance(2),Item.of('thermal:tea_seeds').withChance(1.1)],'thermal:tea_seeds').xp(0.15)

	event.recipes.thermal.insolator(['minecraft:ender_pearl',Item.of('endercrop:ender_seeds').withChance(1)],'endercrop:ender_seeds').energy(60000).xp(0.5)

	event.recipes.thermal.insolator(Item.of('moreminecarts:glass_cactus').withChance(2),'moreminecarts:glass_cactus').energy(60000)

	event.recipes.thermal.insolator(Item.of('aether:blue_berry').withChance(2),'aether:blue_berry').energy(20000)

	let trees = [

		['architects_palette:twisted_sapling','architects_palette:twisted_log'],
		['biomesoplenty:origin_sapling', 'minecraft:oak_log'],
		['biomesoplenty:palm_sapling', 'biomesoplenty:palm_log'],
		['aether:golden_oak_sapling', 'aether:skyroot_log', 'aether:golden_amber'],
		['biomesoplenty:mahogany_sapling', 'biomesoplenty:mahogany_log'],
		['biomesoplenty:willow_sapling', 'biomesoplenty:willow_log'],
		['aether:skyroot_sapling', 'aether:skyroot_log'],
		['biomesoplenty:jacaranda_sapling', 'biomesoplenty:jacaranda_log'],
		['biomesoplenty:dead_sapling', 'biomesoplenty:dead_log'],
		['biomesoplenty:redwood_sapling', 'biomesoplenty:redwood_log'],
		['biomesoplenty:magic_sapling', 'biomesoplenty:magic_log'],
		['biomesoplenty:orange_autumn_sapling', 'minecraft:dark_oak_log', 'minecraft:apple'],
		['biomesoplenty:umbran_sapling', 'biomesoplenty:umbran_log'],
		['biomesoplenty:fir_sapling', 'biomesoplenty:fir_log'],
		['biomesoplenty:yellow_autumn_sapling', 'minecraft:birch_log', 'minecraft:apple'],
		['biomesoplenty:hellbark_sapling', 'biomesoplenty:hellbark_log'],
		['biomesoplenty:maple_sapling', 'minecraft:oak_log', 'minecraft:apple'],
		['biomesoplenty:rainbow_birch_sapling', 'minecraft:birch_log', 'minecraft:apple'],
		['biomesoplenty:snowblossom_sapling', 'minecraft:cherry_log'],
		['biomesoplenty:flowering_oak_sapling', 'minecraft:oak_log', 'minecraft:apple']

	].forEach(e => {
		if (e[2]) {
			event.recipes.thermal.insolator([Item.of(e[1]).withChance(6),Item.of(e[0]).withChance(1.1),Item.of(e[2]).withChance(0.5)],e[0]).energy(60000)
		} else {
			event.recipes.thermal.insolator([Item.of(e[1]).withChance(6),Item.of(e[0]).withChance(1.1)],e[0]).energy(60000)
		}
	})

	event.recipes.thermal.tree_extractor(Fluid.of("minecraft:lava",15),'architects_palette:twisted_log','architects_palette:twisted_leaves')

	thermalpackun('farmersdelight:rice_bag', 'farmersdelight:rice')
	thermalpackun('farmersdelight:rice_bale', 'farmersdelight:rice_panicle')
	thermalpackun('farmersdelight:onion_crate', 'farmersdelight:onion')
	thermalpackun('farmersdelight:tomato_crate', 'farmersdelight:tomato')
	thermalpackun('farmersdelight:cabbage_crate', 'farmersdelight:cabbage')
	thermalpackun('farmersdelight:beetroot_crate', 'minecraft:beetroot')
	thermalpackun('farmersdelight:potato_crate', 'minecraft:potato')
	thermalpackun('farmersdelight:carrot_crate', 'minecraft:carrot')
	thermalpackun('farmersdelight:straw_bale', 'farmersdelight:straw')

	thermalpackun('kubejs:star_block', 'kubejs:star_ingot')
	thermalpackun('kubejs:star_ingot', 'kubejs:star_nugget')

	event.shaped('kubejs:star_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:star_ingot'
	})

	event.shaped('kubejs:star_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:star_nugget'
	})

	event.shapeless('9x kubejs:star_ingot', 'kubejs:star_block')
	event.shapeless('9x kubejs:star_nugget', 'kubejs:star_ingot')

	event.shapeless("thermal:nuke_tnt_minecart", ["thermal:nuke_tnt","minecraft:minecart"])

	thermalpackun('kubejs:tech_block', 'kubejs:tech_ingot')
	thermalpackun('kubejs:tech_ingot', 'kubejs:tech_nugget')

	event.shaped('kubejs:tech_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:tech_ingot'
	})

	event.shaped('kubejs:tech_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:tech_nugget'
	})

	event.shapeless('9x kubejs:tech_ingot', 'kubejs:tech_block')
	event.shapeless('9x kubejs:tech_nugget', 'kubejs:tech_ingot')

	thermalpackun('kubejs:creativ_block', 'kubejs:creativ_ingot')
	thermalpackun('kubejs:creativ_ingot', 'kubejs:creativ_nugget')

	event.shaped('kubejs:creativ_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:creativ_ingot'
	})

	event.shaped('kubejs:creativ_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:creativ_nugget'
	})

	event.shapeless('9x kubejs:creativ_ingot', 'kubejs:creativ_block')
	event.shapeless('9x kubejs:creativ_nugget', 'kubejs:creativ_ingot')

	event.recipes.thermal.pulverizer('kubejs:star_dust', 'kubejs:star_ingot').energy(2000)

	event.recipes.thermal.smelter('kubejs:star_ingot', 'kubejs:star_dust').energy(1600)

	event.recipes.thermal.pulverizer('kubejs:tech_dust', 'kubejs:tech_ingot').energy(2000)

	event.recipes.thermal.smelter('kubejs:tech_ingot', 'kubejs:tech_dust').energy(1600)

	event.recipes.thermal.pulverizer('kubejs:creativ_dust', 'kubejs:creativ_ingot').energy(2000)

	event.recipes.thermal.smelter('kubejs:creativ_ingot', 'kubejs:creativ_dust').energy(1600)

	if (global.getSetting("CreativeCrafting")) {

		let ingx4 = [
			'pipez:infinity_upgrade',
			'cloudboots:cloud_boots',
			'thermal:machine_efficiency_creative_augment',
			'thermal:machine_catalyst_creative_augment',
			'botania:lens_storm',
			'refinedstorage:creative_wireless_crafting_monitor',
			'refinedstorage:creative_wireless_fluid_grid',
			'refinedstorage:creative_wireless_grid'
		].forEach((e,i) => {
			event.shapeless(e, '4x kubejs:creativ_ingot').id('kubejs:ingx4_'+i+'_manuel_only')
		})

		let ingx6 = [
			"iceandfire:creative_dragon_meal",
			'create:creative_blaze_cake',
			'createaddition:creative_energy',
			'littlelogistics:creative_capacitor',
			Item.of('thermal:energy_cell', '{BlockEntityTag:{ItemInv:[{Count:1b,Slot:0b,id:"thermal:rf_coil_creative_augment"}]}}'),
			'create:creative_motor',
			Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'),
			'botania:creative_pool',
			'refinedstorage:creative_controller',
			'storagedrawers:creative_storage_upgrade'
		].forEach((e,i) => {
			event.shapeless(e, '6x kubejs:creativ_ingot').id('kubejs:ingx6_'+i+'_manual_only')
		})

		let ingx8 = [
			'quarryplus:fuel_module_normal',
			'create:handheld_worldshaper',
			'create_sa:creative_filling_tank',
			'refinedstorage:creative_fluid_storage_disk', 
			'refinedstorage:creative_storage_disk',
			'refinedstorage:4096k_fluid_storage_block',
			'refinedstorage:creative_storage_block',
			Item.of('thermal:fluid_cell', '{BlockEntityTag:{ItemInv:[{Count:1b,Slot:0b,id:"thermal:fluid_tank_creative_augment"}]}}'),
			'create:creative_fluid_tank',
			'create:creative_crate',
			'storagedrawers:creative_vending_upgrade',
			'botania:corporea_spark_creative'
		].forEach((e,i) => {
			let num 
			event.shapeless(e, '8x kubejs:creativ_ingot').id('kubejs:ingx8_'+i+'_manual_only')
		})
	}

	event.recipes.create.mixing(Fluid.of('create:tea',500),['2x thermal:tea',Fluid.of('minecraft:water',250),Fluid.of('minecraft:milk',250)]).heated()

	event.smelting('farmersdelight:fried_egg', ['minecraft:egg', 'naturalist:duck_egg'])
	event.smoking('farmersdelight:fried_egg', ['minecraft:egg', 'naturalist:duck_egg'])
	event.campfireCooking('farmersdelight:fried_egg', ['minecraft:egg', 'naturalist:duck_egg'])

	event.shaped('measurements:tape_measure', [
		' A ',
		'ABA',
		' AC'
	], {
		A: 'minecraft:gold_nugget',
		B: 'minecraft:iron_ingot',
		C: '#minecraft:wool'
	})

	event.shaped('4x kubejs:needle_magazine', [
			'B B',
			'BAB',
			'BBB'
		], {
			A: 'minecraft:iron_ingot',
			B: 'thermal:cured_rubber',
		}
	)

	event.shaped('kubejs:needle_ammo', [
			'AAA',
			'AAA',
			'BCB'
		], {
			A: 'minecraft:arrow',
			B: 'minecraft:gunpowder',
			C: 'kubejs:needle_magazine'
		}
	)

	event.shaped('kubejs:star_hammer', [
			'BBB',
			'BAB',
			' A '
		], {
			A: 'kubejs:reinforced_handle',
			B: 'kubejs:star_ingot'
		}
	)

	event.shaped('extractinator:extractinator', [
			'ABA',
			'CCC',
			'DED'
		], {
			A: 'minecraft:flint',
			B: 'minecraft:piston',
			C: 'minecraft:string',
			D: 'thermal:copper_gear',
			E: 'minecraft:cauldron'
		}
	)

	event.shaped('4x extractinator:slush', [
			'AB',
			'BA'
		], {
			A: 'minecraft:sand',
			B: 'minecraft:ice'
		}
	)

	event.shaped('4x extractinator:silt', [
			'AB',
			'BA'
		], {
			A: 'minecraft:sand',
			B: 'minecraft:mud'
		}
	)

	event.custom({
		"type": "extractinator:extractinating",
		"input": {
			"tag": "kubejs:input_cobblestone"
		},
		"drops": [
			{
				"drop": "#kubejs:output_cobblestone_common",
				"drop_chance": 0.45
			},
			{
				"drop": "#kubejs:output_cobblestone_rare",
				"drop_chance": 0.05
			}
		]
	}).id('kubejs:cobblestone_sive')

	event.custom({
		"type": "extractinator:extractinating",
		"input": {
			"tag": "kubejs:input_gravel"
		},
		"drops": [
			{
				"drop": "#kubejs:output_gravel_common",
				"drop_chance": 0.45
			},
			{
				"drop": "#kubejs:output_gravel_rare",
				"drop_chance": 0.05
			}
		]
	}).id('kubejs:gravel_sive')

	event.custom({
		"type": "extractinator:extractinating",
		"input": {
			"tag": "kubejs:input_sand"
		},
		"drops": [
			{
				"drop": "#kubejs:output_sand_common",
				"drop_chance": 0.40
			},
			{
				"drop": "#kubejs:output_sand_rare",
				"drop_chance": 0.1
			}
		]
	}).id('kubejs:sand_sive')

	event.custom({
		"type": "extractinator:extractinating",
		"input": {
			"tag": "kubejs:input_dust"
		},
		"drops": [
			{
				"drop": "#kubejs:output_dust",
				"drop_chance": 0.5
			},

		]
	}).id('kubejs:dust_sive')

	event.custom({
		"type": "extractinator:extractinating",
		"input": {
			"tag": "kubejs:input_dirt"
		},
		"drops": [
			{
				"drop": "#kubejs:output_dirt",
				"drop_chance": 0.30
			},

		]
	}).id('kubejs:dirt_sive')

	event.custom({
		"type": "extractinator:extractinating",
		"input": {
			"tag": "kubejs:input_grass"
		},
		"drops": [
			{
				"drop": "#kubejs:output_grass",
				"drop_chance": 0.30
			},

		]
	}).id('kubejs:grass_sive')

	event.custom({
		"type": "extractinator:extractinating",
		"input": {
			"tag": "kubejs:input_netherrack"
		},
		"drops": [
			{
				"drop": "#kubejs:output_netherrack",
				"drop_chance": 0.05
			},

		]
	}).id('kubejs:netherrack_sive')

	event.recipes.create.filling('minecraft:clay',[Fluid.of('water',1000),'kubejs:dust'])
	event.recipes.thermal.bottler('minecraft:clay',[Fluid.of('water',1000),'kubejs:dust']).energy(400).xp(0.1)

	event.recipes.create.crushing('kubejs:dust','minecraft:sand')
	event.recipes.thermal.pulverizer('kubejs:dust','minecraft:sand').energy(4000).xp(0.1)


	event.recipes.thermal.centrifuge(Fluid.of('cofh_core:experience',100),'create:experience_nugget')

	event.recipes.create.mechanical_crafting('kubejs:creativ_compound', [
		'   E   ',
		' EEDEE ',
		' ECBCE ',
		'EDBABDE',
		' ECBCE ',
		' EEDEE ',
		'   E   '
	], {
		A: 'kubejs:galaxy_cookie',
		B: 'kubejs:little_star',
		C: 'botania:life_essence',
		D: 'minecraft:enchanted_golden_apple',
		E: 'kubejs:rainbow_ingot'
	})

	let seal_inter = 'kubejs:incomplete_seal_creativ'

	event.recipes.create.sequenced_assembly('kubejs:seal_creativ', 'kubejs:tech_glass', [
		event.recipes.createDeploying(seal_inter, [seal_inter, 'kubejs:creativ_unstable']),
		event.recipes.createDeploying(seal_inter, [seal_inter, 'kubejs:bedrock_dust']),
		event.recipes.createPressing(seal_inter, seal_inter)
	]).transitionalItem(seal_inter).loops(1)

	event.shapeless('kubejs:rainbow_ingot',['aether:enchanted_gravitite', 'biggerreactors:blutonium_ingot', 'minecraft:netherite_ingot', 'botania:terrasteel_ingot', 'kubejs:star_ingot', 'thermal:enderium_ingot', 'irons_spellbooks:arcane_ingot'])

	event.shaped('kubejs:star_axe', [
		'AA ',
		'AB ',
		' B '
	], {
		A: 'kubejs:star_ingot',
		B: 'kubejs:reinforced_handle'
	})

	event.shaped('kubejs:star_shovel', [
		' A ',
		' B ',
		' B '
	], {
		A: 'kubejs:star_ingot',
		B: 'kubejs:reinforced_handle'
	})

	event.shaped('kubejs:star_hoe', [
		'AA ',
		' B ',
		' B '
	], {
		A: 'kubejs:star_ingot',
		B: 'kubejs:reinforced_handle'
	})

	event.shaped('kubejs:star_sword', [
		' A ',
		' A ',
		' B '
	], {
		A: 'kubejs:star_ingot',
		B: 'kubejs:reinforced_handle'
	})

	event.shaped('kubejs:star_helmet', [
		'A A',
		'AAA'
	], {
		A: 'kubejs:star_ingot'
	})

	event.shaped('kubejs:star_chestplate', [
		'A A',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:star_ingot'
	})

	event.shaped('kubejs:star_leggings', [
		'AAA',
		'A A',
		'A A'
	], {
		A: 'kubejs:star_ingot'
	})

	event.shaped('kubejs:star_boots', [
		'   ',
		'A A',
		'A A'
	], {
		A: 'kubejs:star_ingot'
	})

	event.shaped('kubejs:tech_axe', [
		'AA ',
		'AB ',
		' B '
	], {
		A: 'kubejs:tech_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:tech_pickaxe', [
		'AAA',
		' B ',
		' B '
	], {
		A: 'kubejs:tech_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:tech_shovel', [
		' A ',
		' B ',
		' B '
	], {
		A: 'kubejs:tech_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:tech_hoe', [
		'AA ',
		' B ',
		' B '
	], {
		A: 'kubejs:tech_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:tech_hammer', [
		'AAA',
		'ABA',
		' B '
	], {
		A: 'kubejs:tech_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:tech_sword', [
		' A ',
		' A ',
		' B '
	], {
		A: 'kubejs:tech_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:tech_helmet', [
		'AAA',
		'A A'
	], {
		A: 'kubejs:tech_ingot'
	})

	event.shaped('kubejs:tech_chestplate', [
		'A A',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:tech_ingot'
	})

	event.shaped('kubejs:tech_leggings', [
		'AAA',
		'A A',
		'A A'
	], {
		A: 'kubejs:tech_ingot'
	})

	event.shaped('kubejs:tech_boots', [
		'   ',
		'A A',
		'A A'
	], {
		A: 'kubejs:tech_ingot'
	})

	event.shaped('kubejs:bread_axe', [
		'AA ',
		'AB ',
		' B '
	], {
		A: 'kubejs:bread_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:bread_pickaxe', [
		'AAA',
		' B ',
		' B '
	], {
		A: 'kubejs:bread_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:bread_shovel', [
		' A ',
		' B ',
		' B '
	], {
		A: 'kubejs:bread_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:bread_hoe', [
		'AA ',
		' B ',
		' B '
	], {
		A: 'kubejs:bread_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:bread_hammer', [
		'AAA',
		'ABA',
		' B '
	], {
		A: 'kubejs:bread_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:bread_sword', [
		' A ',
		' A ',
		' B '
	], {
		A: 'kubejs:bread_ingot',
		B: 'minecraft:stick'
	})

	event.shapeless('kubejs:star_dust',['kubejs:galaxy_dust','kubejs:tech_dust'])

	event.recipes.thermal.smelter('kubejs:star_ingot', ['kubejs:galaxy_dust','kubejs:tech_dust']).energy(3200)
	event.recipes.thermal.smelter('kubejs:star_ingot', ['kubejs:galaxy_dust','kubejs:tech_ingot']).energy(3200)

	event.recipes.create.filling('kubejs:bloody_helmet',[Fluid.of('kubejs:bloody_tear_fluid',1000),'kubejs:star_helmet'])
	event.recipes.thermal.bottler('kubejs:bloody_helmet',[Fluid.of('kubejs:bloody_tear_fluid',1000),'kubejs:star_helmet']).energy(2000)

	event.recipes.create.filling('kubejs:bloody_chestplate',[Fluid.of('kubejs:bloody_tear_fluid',1000),'kubejs:star_chestplate'])
	event.recipes.thermal.bottler('kubejs:bloody_chestplate',[Fluid.of('kubejs:bloody_tear_fluid',1000),'kubejs:star_chestplate']).energy(2000)

	event.recipes.create.filling('kubejs:bloody_leggings',[Fluid.of('kubejs:bloody_tear_fluid',1000),'kubejs:star_leggings'])
	event.recipes.thermal.bottler('kubejs:bloody_leggings',[Fluid.of('kubejs:bloody_tear_fluid',1000),'kubejs:star_leggings']).energy(2000)

	event.recipes.create.filling('kubejs:bloody_boots',[Fluid.of('kubejs:bloody_tear_fluid',1000),'kubejs:star_boots'])
	event.recipes.thermal.bottler('kubejs:bloody_boots',[Fluid.of('kubejs:bloody_tear_fluid',1000),'kubejs:star_boots']).energy(2000)

	event.recipes.create.filling('kubejs:jar_of_tears',[Fluid.of('kubejs:bloody_tear_fluid',500),'glass_bottle'])
	event.recipes.thermal.bottler('kubejs:jar_of_tears',[Fluid.of('kubejs:bloody_tear_fluid',500),'glass_bottle']).energy(800)

	event.shapeless(Item.of('minecraft:elytra', "{CustomModelData:1,Damage:0,display:{Name:'{\"text\":\"Black Wings\",\"italic\":false}'}}"),["minecraft:elytra","#forge:dyes/black"])

	event.shapeless(Item.of('iceandfire:bestiary', '{Pages:[I;0,5,22,21,3,7,24,1,8,6,26,2,4,17,9,25]}'),
		[
			'minecraft:leather',
			'3x iceandfire:manuscript'
		]
	)

	event.shapeless('iceandfire:summoning_crystal_fire',
		[
			'iceandfire:fire_dragon_blood',
			'minecraft:ender_pearl',
			'minecraft:diamond',
			'thermal:ruby'
		]
	)

	event.shaped('kubejs:creativ_pickaxe', [
		'AAA',
		' B ',
		' B '
	], {
		A: 'kubejs:creativ_ingot',
		B: 'kubejs:bedrock_dust'
	})

	event.shaped('kubejs:lagacy_sword', [
		' A ',
		' A ',
		' B '
	], {
		A: 'kubejs:creativ_ingot',
		B: 'kubejs:bedrock_dust'
	})

	event.shaped("2x kubejs:lostcity_portal",
		[
			"ABA",
			"ACA",
			"DDD"
		],
		{
			A: 'minecraft:diamond_block',
			B: 'minecraft:ender_eye',
			C: '#minecraft:beds',
			D: 'minecraft:smooth_stone'
		}
	)

	event.shaped('4x kubejs:tech_glass',
		[
			"ABA",
			"BCB",
			"ABA"
		],
		{
			A: '#forge:glass',
			B: 'minecraft:quartz',
			C: 'kubejs:tech_ingot'
		}
	)

	event.shapeless('4x kubejs:mud_ball',
		[
			'minecraft:mud'
		]
	)

	event.shapeless('minecraft:mud',
		[
			'4x kubejs:mud_ball'
		]
	)

	event.shapeless("kubejs:scattered_sword",
		[
			'kubejs:tech_sword',
			'#kubejs:hammers'
		]
	)
	.damageIngredient('#kubejs:hammers')
	.id("kubejs:scattered_sword_manual_only")

	event.shaped('kubejs:wooden_hammer', [
		'AAA',
		'ABA',
		' B '
	], {
		A: '#minecraft:planks',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:stone_hammer', [
		'AAA',
		'ABA',
		' B '
	], {
		A: '#minecraft:stone_tool_materials',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:iron_hammer', [
		'AAA',
		'ABA',
		' B '
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:golden_hammer', [
		'AAA',
		'ABA',
		' B '
	], {
		A: 'minecraft:gold_ingot',
		B: 'minecraft:stick'
	})

	event.shaped('kubejs:diamond_hammer', [
		'AAA',
		'ABA',
		' B '
	], {
		A: 'minecraft:diamond',
		B: 'minecraft:stick'
	})

	event.custom({
		"type": "minecraft:smithing_transform",
		"addition": {
			"item": "minecraft:netherite_ingot"
		},
		"base": {
			"item": "kubejs:diamond_hammer"
		},
		"result": {
			"item": "kubejs:netherite_hammer"
		},
		"template": {
			"item": "minecraft:netherite_upgrade_smithing_template"
		}
	})

	event.shaped('8x kubejs:sharpnell', [
		" A",
		"A "
	], {
		A: 'kubejs:tech_ingot'
	})

	event.shaped('kubejs:bedrock_remover',
		[
			"BB ",
			"BBA",
			" AC"
		],
		{
			A: 'kubejs:star_ingot',
			B: 'minecraft:tnt',
			C: 'kubejs:reinforced_handle'
		}
	)

	event.recipes.create.splashing("minecraft:paper","iceandfire:manuscript")

	event.shapeless("3x minecraft:paper",
		[
			"minecraft:water_bucket",
			"3x iceandfire:manuscript"
		]
	)
	.replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

	event.shaped('kubejs:copper_compass',
		[
			"ABA",
			"BCB",
			"ABA"
		],
		{
			B: 'minecraft:copper_ingot',
			A: "minecraft:redstone",
			C: "minecraft:map"
		}
	)

	event.shaped('kubejs:ship_locator',
		[
			" A ",
			"DBD",
			" C "
		],
		{
			A: 'kubejs:tech_ingot',
			B: "minecraft:map",
			C: 'thermal:rf_coil',
			D: 'minecraft:redstone'
		}
	)

	//ARCANE TEST

		event.recipes.create.mixing("2x irons_spellbooks:arcane_debris",[Fluid.of("water",1000),"minecraft:ancient_debris","8x irons_spellbooks:arcane_essence"]).heated()

		event.replaceInput(
			{input: "irons_spellbooks:arcane_salvage"},
			"irons_spellbooks:arcane_salvage",
			"#kubejs:scraps"
		)
		event.replaceInput(
			{output: "irons_spellbooks:arcane_salvage"},
			"irons_spellbooks:arcane_salvage",
			"#kubejs:scraps"
		)

		event.remove({id: "thermal:machines/smelter/smelter_ancient_debris"})
		event.recipes.thermal.smelter(["2x minecraft:netherite_scrap",Item.of("thermal:rich_slag").withChance(0.2)], "minecraft:ancient_debris").energy(3200).xp(2)

		event.recipes.thermal.smelter(["2x irons_spellbooks:arcane_salvage",Item.of("thermal:rich_slag").withChance(0.4)], "irons_spellbooks:arcane_debris").energy(3200).xp(1)
		event.recipes.thermal.furnace("irons_spellbooks:arcane_salvage","irons_spellbooks:arcane_debris").energy(2000).xp(1)

	//END

	event.recipes.thermal.press('redstone_arsenal:flux_gear',['4x redstone_arsenal:flux_ingot','thermal:press_gear_die'])


	event.custom(	{
		"type": "iceandfire:dragonforge",
		"dragon_type": "fire",
		"cook_time": 1000,
		"input": {
			"item": "minecraft:netherite_ingot"
		},
		"blood": {
			"item": "iceandfire:fire_dragon_blood"
		},
		"result": {
			"item": "iceandfire:dragonsteel_fire_ingot"
		}
	})

	event.custom(	{
		"type": "iceandfire:dragonforge",
		"dragon_type": "lightning",
		"cook_time": 1000,
		"input": {
			"item": "minecraft:netherite_ingot"
		},
		"blood": {
			"item": "iceandfire:lightning_dragon_blood"
		},
		"result": {
			"item": "iceandfire:dragonsteel_lightning_ingot"
		}
	})

	event.custom(	{
		"type": "iceandfire:dragonforge",
		"dragon_type": "ice",
		"cook_time": 1000,
		"input": {
			"item": "minecraft:netherite_ingot"
		},
		"blood": {
			"item": "iceandfire:ice_dragon_blood"
		},
		"result": {
			"item": "iceandfire:dragonsteel_ice_ingot"
		}
	})

	event.shapeless('4x kubejs:stick_blend',['minecraft:blaze_powder', 'thermal:silver_dust', 'thermal:sulfur_dust'])
	event.recipes.create.mixing(Fluid.of("kubejs:heavy_fluid",1000),['2x thermal:lapis_dust', 'thermal:lead_dust', Fluid.of("lava",1000)])
	event.recipes.create.compacting('kubejs:tech_stage_1b',['minecraft:iron_ingot', 'kubejs:stick_blend', 'thermal:tin_ingot']).heated()
	event.recipes.thermal.chiller('kubejs:tech_stage_1a',['thermal:chiller_ingot_cast',Fluid.of("kubejs:heavy_fluid",250)]).energy(20000)
	event.recipes.create.deploying('kubejs:tech_stage_2', ["kubejs:tech_stage_1a", "kubejs:tech_stage_1b"])
	event.recipes.thermal.smelter('kubejs:tech_stage_3', ['kubejs:tech_stage_2',"thermal:coal_coke"]).energy(7200)

	inter = 'kubejs:incomplete_tech_ingot'
	event.recipes.create.sequenced_assembly('kubejs:tech_ingot', 'kubejs:tech_stage_3', [
		event.recipes.createPressing(inter, inter),
		event.recipes.createFilling(inter, [inter, Fluid.of('water',250)]),
	]).transitionalItem(inter).loops(5)

	event.shapeless("minecraft:bone_meal","iceandfire:wither_shard")

	event.replaceInput(
		{id: 'constructionwand:infinity_wand'},
		"minecraft:nether_star",
		"kubejs:creativ_ingot",
	)

	event.replaceInput(
		{id: 'constructionwand:core_destruction'},
		"minecraft:diamond_pickaxe",
		"minecraft:redstone",
	)

	event.replaceInput(
		{id: 'constructionwand:core_destruction'},
		"#forge:storage_blocks/diamond",
		"minecraft:diamond_pickaxe",
	)

	event.replaceInput(
		{id: 'iceandfire:ghost_chest'},
		"#forge:rods/wooden",
		"#forge:chests/wooden",
	)

	event.custom({
		"type": "minecraft:smithing_transform",
		"addition": {
			"item": "minecraft:netherite_ingot"
		},
		"base": {
			"item": "create_sa:brass_jetpack_chestplate"
		},
		"result": {
			"item": "create_sa:netherite_jetpack_chestplate"
		},
		"template": {
			"item": "minecraft:netherite_upgrade_smithing_template"
		}
	})

	event.recipes.create.mixing(Fluid.of("kubejs:fluid_bread",250),['3x create:wheat_flour', '2x thermal:barley', '2x minecraft:sugar',Fluid.of("water",250)]).heated()
	
	event.recipes.thermal.chiller("kubejs:bread_ingot",['thermal:chiller_ingot_cast',Fluid.of("kubejs:fluid_bread",250)]).energy(20000)

	event.recipes.create.filling('kubejs:beer',[Fluid.of('kubejs:fluid_bread',250),'glass_bottle'])
	event.recipes.thermal.bottler('kubejs:beer',[Fluid.of('kubejs:fluid_bread',250),'glass_bottle']).energy(800)

	event.replaceInput(
		{id: 'littlelogistics:automatic_switch_rail'},
		'littlelogistics:switch_rail',
		'moreminecarts:rail_turn',
	)

	event.shaped('littlelogistics:tee_junction_rail',
		[
			"AA"
		],
		{
			A: 'minecraft:rail'
		}
	)

	event.replaceInput(
		{id: 'littlelogistics:steam_locomotive'},
		'minecraft:furnace',
		'minecraft:blast_furnace',
	)

	event.replaceInput(
		{id: 'littlelogistics:energy_locomotive'},
		'littlelogistics:vessel_charger',
		'thermal:rf_coil',
	)
	
	event.replaceInput(
		{id: 'grapplemod:repeller'},
		'minecraft:iron_ingot',
		'minecraft:diamond',
	)

	event.replaceInput(
		{id: 'minecraft:lodestone'},
		'minecraft:netherite_ingot',
		'minecraft:iron_ingot',
	)

	let alloy = [
		['4x thermal:bronze_ingot', ['3x minecraft:copper_ingot', 'thermal:tin_ingot']],
		['2x thermal:electrum_ingot', ['minecraft:gold_ingot', 'thermal:silver_ingot']],
		['3x thermal:invar_ingot', ['thermal:nickel_ingot', '2x minecraft:iron_ingot']],
		['2x thermal:constantan_ingot', ['minecraft:copper_ingot', 'thermal:nickel_ingot']],
		['4x thermal:signalum_ingot', ['3x minecraft:copper_ingot', 'thermal:silver_ingot', '4x minecraft:redstone']],
		['4x thermal:lumium_ingot', ['3x thermal:tin_ingot', 'thermal:silver_ingot', '2x minecraft:glowstone_dust']],
		['2x thermal:enderium_ingot', ['3x thermal:lead_ingot', 'thermal:diamond_dust', '2x minecraft:ender_pearl']]
	].forEach(e => {
		event.recipes.create.mixing(e[0],e[1]).heated()
	})

	event.recipes.create.crushing(["create:crushed_raw_uranium",Item.of("create:crushed_raw_uranium").withChance(0.75),Item.of("create:experience_nugget").withChance(0.75),Item.of("minecraft:cobblestone").withChance(0.12)],"biggerreactors:uranium_ore")
	event.recipes.create.crushing(["create:crushed_raw_uranium",Item.of("create:crushed_raw_uranium").withChance(0.75),Item.of("create:experience_nugget").withChance(0.75),Item.of("minecraft:cobbled_deepslate").withChance(0.12)],"biggerreactors:deepslate_uranium_ore")

	event.recipes.create.crushing(["thermal:sapphire",Item.of("thermal:sapphire").withChance(0.75),Item.of("create:experience_nugget").withChance(0.75),Item.of("minecraft:cobblestone").withChance(0.12)],"thermal:sapphire_ore")
	event.recipes.create.crushing(["thermal:sapphire",Item.of("thermal:sapphire").withChance(0.75),Item.of("create:experience_nugget").withChance(0.75),Item.of("minecraft:cobbled_deepslate").withChance(0.12)],"thermal:deepslate_sapphire_ore")

	event.recipes.create.crushing(["thermal:ruby",Item.of("thermal:ruby").withChance(0.75),Item.of("create:experience_nugget").withChance(0.75),Item.of("minecraft:cobblestone").withChance(0.12)],"thermal:ruby_ore")
	event.recipes.create.crushing(["thermal:ruby",Item.of("thermal:ruby").withChance(0.75),Item.of("create:experience_nugget").withChance(0.75),Item.of("minecraft:cobbled_deepslate").withChance(0.12)],"thermal:deepslate_ruby_ore")

	event.smelting("thermal:ruby","#forge:ores/ruby").xp(1.0)
	event.blasting("thermal:ruby","#forge:ores/ruby").xp(1.0)
	event.recipes.thermal.pulverizer([Item.of("thermal:ruby").withChance(2.5),Item.of("gravel").withChance(0.2)],"#forge:ores/ruby").energy(4000).xp(0.5)
	event.recipes.thermal.pulverizer("thermal:ruby_dust","thermal:ruby").energy(4000)
	event.recipes.thermal.crystallizer("thermal:ruby",["thermal:ruby_dust",Fluid.of("water",2000)]).energy(20000)

	event.smelting("thermal:sapphire","#forge:ores/sapphire").xp(1.0)
	event.blasting("thermal:sapphire","#forge:ores/sapphire").xp(1.0)
	event.recipes.thermal.pulverizer([Item.of("thermal:sapphire").withChance(2.5),Item.of("gravel").withChance(0.2)],"#forge:ores/sapphire").energy(4000).xp(0.5)
	event.recipes.thermal.pulverizer("thermal:sapphire_dust","thermal:sapphire").energy(4000)
	event.recipes.thermal.crystallizer("thermal:sapphire",["thermal:sapphire_dust",Fluid.of("water",2000)]).energy(20000)

	event.shaped('thermal:ruby_gear',[
		" A ",
		"ABA",
		" A "
	],
	{
		A:"thermal:ruby",
		B:"minecraft:iron_nugget"
	})

	event.shaped('thermal:sapphire_gear',[
		" A ",
		"ABA",
		" A "
	],
	{
		A:"thermal:sapphire",
		B:"minecraft:iron_nugget"
	})

	event.recipes.thermal.press('thermal:ruby_gear',['4x thermal:ruby','thermal:press_gear_die'])
	event.recipes.thermal.press('thermal:sapphire_gear',['4x thermal:sapphire','thermal:press_gear_die'])

	event.recipes.thermal.press('thermal:diamond_gear',['4x minecraft:diamond','thermal:press_gear_die'])
	event.recipes.thermal.press('thermal:emerald_gear',['4x minecraft:emerald','thermal:press_gear_die'])
	event.recipes.thermal.press('thermal:quartz_gear',['4x minecraft:quartz','thermal:press_gear_die'])
	event.recipes.thermal.press('thermal:lapis_gear',['4x minecraft:lapis_lazuli','thermal:press_gear_die'])

	event.recipes.create.crushing(["create:crushed_raw_uranium",Item.of("create:crushed_raw_uranium").withChance(0.75),Item.of("create:experience_nugget").withChance(0.75),Item.of("minecraft:netherrack").withChance(0.12)],"kubejs:nether_uranium_ore")

	event.smelting("biggerreactors:uranium_ingot","kubejs:nether_uranium_ore").xp(0.35)
	event.blasting("biggerreactors:uranium_ingot","kubejs:nether_uranium_ore").xp(0.35)
	event.recipes.thermal.pulverizer([Item.of("biggerreactors:uranium_dust").withChance(2),Item.of("gravel").withChance(0.2)],"kubejs:nether_uranium_ore").energy(4000).xp(0.35)
	event.recipes.thermal.smelter([Item.of("biggerreactors:uranium_ingot").withChance(1),Item.of("thermal:rich_slag").withChance(0.2)],"kubejs:nether_uranium_ore").energy(3200)

	thermalpackun('kubejs:cobalt_block','kubejs:cobalt_ingot')
	thermalpackun('kubejs:cobalt_ingot','kubejs:cobalt_nugget')

	event.shaped('kubejs:cobalt_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:cobalt_ingot'
	})

	event.shaped('kubejs:cobalt_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:cobalt_nugget'
	})

	event.shapeless("9x kubejs:cobalt_ingot","#chisel_chipped_integration:metals/cobalt_blocks")
	event.shapeless("9x kubejs:cobalt_nugget","kubejs:cobalt_ingot")

	thermalpackun('kubejs:raw_cobalt_block','kubejs:raw_cobalt')

	event.shaped('kubejs:raw_cobalt_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:raw_cobalt'
	})

	event.shapeless("9x kubejs:raw_cobalt",'kubejs:raw_cobalt_block')

	event.recipes.create.crushing(["kubejs:crushed_raw_cobalt",Item.of("kubejs:crushed_raw_cobalt").withChance(0.75),Item.of("create:experience_nugget").withChance(0.75),Item.of("minecraft:netherrack").withChance(0.12)],"kubejs:nether_cobalt_ore")

	event.smelting("kubejs:cobalt_ingot","kubejs:nether_cobalt_ore").xp(0.5)
	event.blasting("kubejs:cobalt_ingot","kubejs:nether_cobalt_ore").xp(0.5)
	event.recipes.thermal.pulverizer([Item.of("kubejs:cobalt_dust").withChance(2),Item.of("gravel").withChance(0.2)],"kubejs:nether_cobalt_ore").energy(4000).xp(0.5)
	event.recipes.thermal.smelter([Item.of("kubejs:cobalt_ingot").withChance(1),Item.of("thermal:rich_slag").withChance(0.2)],"kubejs:nether_cobalt_ore").energy(3200).xp(0.5)

	event.recipes.create.crushing(["kubejs:crushed_raw_cobalt",Item.of("create:experience_nugget").withChance(0.75)],"kubejs:raw_cobalt")

	event.smelting("kubejs:cobalt_ingot","kubejs:raw_cobalt").xp(0.5)
	event.blasting("kubejs:cobalt_ingot","kubejs:raw_cobalt").xp(0.5)

	event.recipes.thermal.pulverizer(Item.of("kubejs:cobalt_dust").withChance(1.25),"kubejs:raw_cobalt").energy(4000).xp(0.5)
	event.recipes.thermal.smelter(Item.of("kubejs:cobalt_ingot").withChance(1.5),"kubejs:raw_cobalt").energy(3200).xp(0.5)

	event.smelting("kubejs:cobalt_ingot","kubejs:crushed_raw_cobalt").xp(0.5)
	event.blasting("kubejs:cobalt_ingot","kubejs:crushed_raw_cobalt").xp(0.5)
	event.recipes.create.splashing("9x kubejs:cobalt_nugget","kubejs:crushed_raw_cobalt")

	event.recipes.thermal.pulverizer("kubejs:cobalt_dust","kubejs:cobalt_ingot").energy(2000)

	event.smelting("kubejs:cobalt_ingot","kubejs:cobalt_dust")
	event.blasting("kubejs:cobalt_ingot","kubejs:cobalt_dust")
	event.recipes.thermal.smelter("kubejs:cobalt_ingot","kubejs:cobalt_dust").energy(1600)

	thermalpackun('kubejs:manyullyn_block','kubejs:manyullyn_ingot')
	thermalpackun('kubejs:manyullyn_ingot','kubejs:manyullyn_nugget')

	event.shaped('kubejs:manyullyn_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:manyullyn_ingot'
	})

	event.shaped('kubejs:manyullyn_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:manyullyn_nugget'
	})

	event.shapeless("9x kubejs:manyullyn_ingot",'kubejs:manyullyn_block')
	event.shapeless("9x kubejs:manyullyn_nugget","kubejs:manyullyn_ingot")

	event.recipes.thermal.pulverizer("kubejs:manyullyn_dust","kubejs:manyullyn_ingot").energy(2000)

	event.smelting("kubejs:manyullyn_ingot","kubejs:manyullyn_dust")
	event.blasting("kubejs:manyullyn_ingot","kubejs:manyullyn_dust")
	event.recipes.thermal.smelter("kubejs:manyullyn_ingot","kubejs:manyullyn_dust").energy(1600)
	

	event.recipes.thermal.smelter('2x kubejs:manyullyn_ingot', ["2x #kubejs:cobalt_ingrediant", ['thermal:netherite_dust','minecraft:netherite_ingot']]).energy(3200)

	event.shapeless('2x kubejs:manyullyn_dust', [
		'2x kubejs:cobalt_dust',
		'thermal:netherite_dust'
	])

	event.shapeless('2x kubejs:manyullyn_ingot', [
		"2x #kubejs:cobalt_ingrediant",
		['thermal:netherite_dust','minecraft:netherite_ingot'],
		'minecraft:fire_charge'
	])

	event.recipes.thermal.centrifuge(['2x kubejs:cobalt_dust', 'thermal:netherite_dust'],'2x kubejs:manyullyn_dust').energy(3000)

	event.recipes.create.mixing('2x kubejs:manyullyn_ingot',['2x kubejs:cobalt_ingot','minecraft:netherite_ingot']).heated()
})