//RECIPES

ServerEvents.recipes(event => {

	let removeInAndOut = id => {
		event.remove({ output: `${id}` })
		event.remove({ input: `${id}` })
	}

	let ban = [
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
		'colossalchests:chest_wall_copper',
		'colossalchests:chest_wall_iron',
		'colossalchests:chest_wall_silver',
		'colossalchests:chest_wall_gold',
		'colossalchests:chest_wall_diamond',
		'colossalchests:chest_wall_obsidian',
		'colossalchests:upgrade_tool',
		'colossalchests:upgrade_tool_reverse',
		'colossalchests:colossal_chest_diamond',
		'colossalchests:interface_diamond',
		'colossalchests:colossal_chest_obsidian',
		'colossalchests:interface_gold',
		'colossalchests:colossal_chest_gold',
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
	});

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
	});

	event.remove({ output: 'endertanks:ender_tank' })
	event.remove({ output: 'enderchests:ender_chest' })
	event.remove({ output: 'endertanks:ender_bucket' })
	event.remove({ output: 'enderchests:ender_bag' })
	event.remove({ output: 'enderchests:ender_pouch' })
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
	event.remove({ output: 'botania:spawner_mover' })
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
	event.remove({ output: 'aether:iron_ring' })
	event.remove({ output: 'aether:golden_ring' })
	event.remove({ id: 'create:mixing/tea' })
	event.remove({ id: 'aether:skyroot_chest' })
	event.remove({ output: 'farmersdelight:fried_egg' })

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
			A: 'minecraft:redstone',
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
			'4x minecraft:smooth_stone',
		]
	)


	event.shapeless('kubejs:dragon_food', [
			[
				'#forge:raw_pork',
				'#forge:raw_chicken',
				'#forge:raw_mutton',
				'#forge:raw_beef',
				'#forge:raw_fishes',
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

	event.recipes.thermal.smelter('2x create:brass_ingot', ['create:zinc_ingot','minecraft:copper_ingot']).energy(3200)
	event.recipes.thermal.smelter('2x create:brass_ingot', ['kubejs:zinc_dust','thermal:copper_dust']).energy(3200)

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
			C: 'createaddition:copper_spool',
			D: 'createaddition:capacitor',
			E: 'create:shaft'
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
			C: 'createaddition:copper_spool',
			D: 'createaddition:capacitor',
			E: 'create:shaft'
		}
	)

	event.recipes.createCrushing('thermal:diamond_dust', 'minecraft:diamond')

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

	event.shaped('8x createaddition:copper_spool', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: '#forge:plates/copper',
			B: '#minecraft:planks'
		}
	)

	event.shapeless('createaddition:portable_energy_interface', [
			'create:brass_casing',
			'create:chute',
			'createaddition:copper_spool'
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
		['nickel',8]
	]

	orechid_noraml.forEach(e => {
		event.recipes.botania.orechid('minecraft:'+e[0]+'_ore', 'minecraft:stone', e[1])
		event.recipes.botania.orechid('minecraft:deepslate_'+e[0]+'_ore', 'minecraft:deepslate', e[1])
	})

	orechid_thermal.forEach(e => {
		event.recipes.botania.orechid('thermal:'+e[0]+'_ore', 'minecraft:stone', e[1])
		event.recipes.botania.orechid('thermal:deepslate_'+e[0]+'_ore', 'minecraft:deepslate', e[1])
	})

	event.recipes.botania.orechid('thermal:oil_sand', 'minecraft:sand', 60)
	event.recipes.botania.orechid('minecraft:sandstone', 'minecraft:sand', 40)

	event.recipes.botania.orechid('thermal:oil_red_sand', 'minecraft:red_sand', 60)
	event.recipes.botania.orechid('minecraft:red_sandstone', 'minecraft:red_sand', 40)

	event.recipes.botania.orechid('create:zinc_ore', 'minecraft:stone', 8)
	event.recipes.botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate', 8)

	event.recipes.botania.orechid('biggerreactors:uranium_ore', 'minecraft:stone', 10)
	event.recipes.botania.orechid('biggerreactors:deepslate_uranium_ore', 'minecraft:deepslate', 10)

	event.recipes.botania.orechid_ignem('minecraft:nether_gold_ore','minecraft:netherrack',79.5)
	event.recipes.botania.orechid_ignem('minecraft:nether_quartz_ore','minecraft:netherrack',19.5)
	event.recipes.botania.orechid_ignem('minecraft:ancient_debris','minecraft:netherrack',1)

	event.recipes.botania.orechid_ignem('aether:ambrosium_ore','aether:holystone',69)
	event.recipes.botania.orechid_ignem('aether:zanite_ore','aether:holystone',29)
	event.recipes.botania.orechid_ignem('aether:gravitite_ore','aether:holystone',2)

	event.smelting('kubejs:bread_ingot','minecraft:bread').xp(0.1)

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
	
	event.recipes.botania.mana_infusion('kubejs:magic_wheat','kubejs:powdered_wheat',3000,'kubejs:mutation_catalyst')
	event.recipes.botania.mana_infusion('kubejs:bloody_tear','kubejs:droplet',3000,'kubejs:spark_catalyst')

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
			'ACA',
			'CBC',
			'ACA'
		], {
			A: 'kubejs:dark_stone',
			B: 'minecraft:redstone_block',
			C: 'thermal:enderium_ingot'
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
	event.recipes.create.mixing('kubejs:powdered_wheat',['minecraft:wheat','kubejs:power_dust'])
	event.recipes.create.mixing('kubejs:powdered_beans',['minecraft:cocoa_beans','kubejs:power_dust'])

	event.shapeless('4x kubejs:power_dust', [
		'minecraft:glowstone_dust',
		'minecraft:bone_meal',
		'minecraft:bone_meal',
		'minecraft:glowstone_dust'
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

	event.recipes.thermal.centrifuge(['2x kubejs:droplet', Item.of('kubejs:droplet').withChance(0.2)], 'minecraft:lapis_lazuli')
	event.recipes.thermal.centrifuge(['18x kubejs:droplet', Item.of('9x kubejs:droplet').withChance(0.2)], 'minecraft:lapis_block')

	event.recipes.thermal.insolator('kubejs:rich_beans', 'kubejs:powdered_beans').water(1000).energy(20000)

	event.shaped('kubejs:super_cookie', [
			'ABA'
		], {
			A: 'kubejs:magic_wheat',
			B: 'kubejs:rich_beans'
		}
	)

	event.recipes.thermal.bottler('kubejs:redstone_ingot',[Fluid.of('thermal:redstone',1000),'kubejs:star_ingot']).energy(4000)
	event.recipes.thermal.insolator('kubejs:farmer_ingot', 'kubejs:star_ingot').water(1000).energy(40000)
	event.recipes.thermal.furnace('kubejs:star_ingot','kubejs:star_dust').energy(4000)

	let inter = 'kubejs:incomplete_galaxy_cookie'

	event.recipes.create.sequenced_assembly('kubejs:galaxy_cookie', 'kubejs:golden_cookie', [
			event.recipes.createDeploying(inter, [inter, 'kubejs:charged_matter']),
			event.recipes.createFilling(inter, [inter, Fluid.of('kubejs:bloody_tear_fluid',250)]),
			event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(64)

	event.recipes.create.crushing(['2x kubejs:charged_matter', Item.of('kubejs:charged_matter').withChance(0.20)], 'kubejs:charged_cookie')
	event.recipes.create.crushing([Item.of('kubejs:galaxy_cookie').withChance(0.99), Item.of('kubejs:star_dust').withChance(0.1)], 'kubejs:galaxy_cookie')

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
		'2x minecraft:gunpowder'
	])

	event.shapeless('4x elytraboosters:fuel_pellet_fast', [
		'minecraft:iron_ingot',
		'2x minecraft:glowstone_dust'
	])

	event.shapeless('4x elytraboosters:fuel_pellet_slow', [
		'minecraft:iron_ingot',
		'2x minecraft:redstone'
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

	event.shaped('aether:iron_ring', [
			' AB',
			'A A',
			' A '
		], {
			A: 'minecraft:iron_ingot',
			B: 'minecraft:iron_nugget'
		}
	)

	event.shaped('aether:golden_ring', [
			' AB',
			'A A',
			' A '
		], {
			A: 'minecraft:gold_ingot',
			B: 'minecraft:gold_nugget'
		}
	)

	event.shapeless('2x kubejs:brass_dust', [
		'kubejs:zinc_dust',
		'thermal:copper_dust'
	])

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

	event.shaped('kubejs:star_block', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'kubejs:star_ingot'
		}
	)

	event.shapeless('9x kubejs:star_ingot', 'kubejs:star_block')

	event.recipes.thermal.pulverizer('kubejs:star_dust', 'kubejs:star_ingot').energy(4000)

	event.recipes.thermal.smelter('kubejs:star_ingot', 'kubejs:star_dust').energy(3200)

	let ingx4 = [
		'pipez:infinity_upgrade',
		'thermal:machine_efficiency_creative_augment',
		'thermal:machine_catalyst_creative_augment',
		'botania:lens_storm',
		'refinedstorage:creative_wireless_crafting_monitor',
		'refinedstorage:creative_wireless_fluid_grid',
		'refinedstorage:creative_wireless_grid'
	].forEach((e,i) => {
		event.shapeless(e, '4x kubejs:star_ingot').id('kubejs:ingx4_'+i+'_manual_only')
	})

	let ingx6 = [
		'create:creative_blaze_cake',
		'createaddition:creative_energy',
		Item.of('thermal:energy_cell', '{BlockEntityTag:{ItemInv:[{Count:1b,Slot:0b,id:"thermal:rf_coil_creative_augment"}]}}'),
		'create:creative_motor',
		Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'),
		'botania:creative_pool',
		'refinedstorage:creative_controller',
		'storagedrawers:creative_storage_upgrade'
	].forEach((e,i) => {
		event.shapeless(e, '6x kubejs:star_ingot').id('kubejs:ingx6_'+i+'_manual_only')
	})

	let ingx8 = [
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
		event.shapeless(e, '8x kubejs:star_ingot').id('kubejs:ingx8_'+i+'_manual_only')
	})

	event.shaped('create:handheld_worldshaper', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'kubejs:star_ingot',
			B: 'kubejs:star_block'
		}
	).id('kubejs:worldedit_manual_only')

	event.shaped('minecraft:debug_stick', [
			'A',
			'A'
		], {
			A: 'kubejs:star_block'
		}
	).id('kubejs:editwand_manual_only')

	event.shapeless('computercraft:computer_command',['4x kubejs:star_block', ['computercraft:computer_normal', 'computercraft:computer_advanced'], '4x kubejs:star_block']).id('kubejs:cccmd_manual_only')

	event.recipes.create.mixing(Fluid.of('create:tea',500),['2x thermal:tea',Fluid.of('minecraft:water',250),Fluid.of('minecraft:milk',250)]).heated()

	event.smelting('farmersdelight:fried_egg', ['minecraft:egg', 'naturalist:duck_egg'])
	event.smoking('farmersdelight:fried_egg', ['minecraft:egg', 'naturalist:duck_egg'])
	event.campfireCooking('farmersdelight:fried_egg', ['minecraft:egg', 'naturalist:duck_egg'])
})
