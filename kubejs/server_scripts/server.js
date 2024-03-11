//RECIPES

ServerEvents.recipes(event => {

	let caps = ['railways:blue_conductor_cap', 'railways:cyan_conductor_cap', 'railways:light_blue_conductor_cap', 'railways:green_conductor_cap', 'railways:lime_conductor_cap', 'railways:yellow_conductor_cap', 'railways:orange_conductor_cap', 'railways:red_conductor_cap', 'railways:purple_conductor_cap', 'railways:light_gray_conductor_cap', 'railways:gray_conductor_cap', 'railways:magenta_conductor_cap', 'railways:pink_conductor_cap', 'railways:brown_conductor_cap', 'railways:white_conductor_cap', 'railways:black_conductor_cap']

	caps.forEach(e => {
		event.remove({ output: `${e}` })
	});

	let hammocks = ['comforts:hammock_light_gray', 'comforts:hammock_gray', 'comforts:hammock_pink', 'comforts:hammock_lime', 'comforts:hammock_yellow', 'comforts:hammock_light_blue', 'comforts:hammock_magenta', 'comforts:hammock_orange', 'comforts:hammock_white', 'comforts:hammock_cyan', 'comforts:hammock_purple', 'comforts:hammock_blue', 'comforts:hammock_brown', 'comforts:hammock_green', 'comforts:hammock_red', 'comforts:hammock_black']

	hammocks.forEach(e => {
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
	event.remove({ output: 'railways:smokestack_streamlined' })
	event.remove({ output: 'railways:smokestack_long' })
	event.remove({ output: 'railways:smokestack_caboosestyle' })
	event.remove({ output: 'railways:track_switch_brass' })
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

	event.shaped('4x thermal:phyto_grenade', [
			'CBC', 
			'BAB',
			'CBC'
		], {
			A: 'minecraft:iron_ingot',
			B: 'thermal:phytogro',
			C: 'minecraft:gunpowder'
		}
	)

	event.shaped('thermal:phyto_tnt', [
			'ABA', 
			'BAB',
			'ABA'
		], {
			A: 'minecraft:gunpowder',
			B: 'thermal:phytogro'
		}
	)

	event.shaped('4x thermal:nuke_grenade', [
			'CBC', 
			'BAB',
			'CBC'
		], {
			A: 'minecraft:iron_ingot',
			B: 'thermal:enderium_ingot',
			C: 'minecraft:tnt'
		}
	)

	event.shaped('thermal:nuke_tnt', [
			'ABA', 
			'BAB',
			'ABA'
		], {
			A: 'minecraft:tnt',
			B: 'thermal:enderium_ingot'
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

	event.shaped('kubejs:dragon_block', [
			'ECE',
			'DAD',
			'EBE'
		], {
			A: 'minecraft:emerald',
			B: 'minecraft:glowstone_dust',
			C: 'minecraft:redstone',
			D: 'minecraft:bone',
			E: 'kubejs:dark_stone'
		}
	)

	event.shapeless('4x kubejs:dark_stone', [
			'minecraft:black_dye',
			'4x minecraft:smooth_stone',
		]
	)

	event.shapeless('kubejs:dragon_food', [
			'#minecraft:fishes', [
				'minecraft:redstone',
				'minecraft:glowstone_dust',
				'minecraft:gunpowder'
			]
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

	event.recipes.thermal.pulverizer(Item.of('kubejs:zinc_dust').withChance(1.25), 'create:raw_zinc').energy(4000)
	event.recipes.thermal.pulverizer([Item.of('kubejs:zinc_dust').withChance(2), Item.of('minecraft:gravel').withChance(0.2)], '#forge:ores/zinc').energy(4000)
	
	event.recipes.thermal.smelter(Item.of('create:zinc_ingot').withChance(1.5), 'create:raw_zinc').energy(3200)
	event.recipes.thermal.smelter([Item.of('create:zinc_ingot').withChance(1), Item.of('thermal:rich_slag').withChance(0.2)], '#forge:ores/zinc').energy(3200)

	event.smelting('create:brass_ingot','kubejs:brass_dust')
	event.blasting('create:brass_ingot','kubejs:brass_dust')
	event.smelting('create:zinc_ingot','kubejs:zinc_dust')
	event.blasting('create:zinc_ingot','kubejs:zinc_dust')

	event.recipes.thermal.pulverizer('redstone_arsenal:flux_dust', 'redstone_arsenal:flux_ingot').energy(2000)
	event.recipes.thermal.smelter('redstone_arsenal:flux_ingot', 'redstone_arsenal:flux_dust').energy(1600)

	event.shaped('mobcapturingtool:mob_capturing_tool', [
			'ACA',
			'BDB',
			'ACA'
		], {
			A: '#forge:glass/lime',
			B: 'minecraft:emerald',
			C: 'minecraft:diamond',
			D: '#forge:eggs',
		}
	)

	event.shaped('mobcapturingtool:mob_capturing_tool', [
			'ACA',
			'BDB',
			'ACA'
		], {
			A: '#forge:glass/lime',
			B: 'minecraft:diamond',
			C: 'minecraft:emerald',
			D: '#forge:eggs',
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

	event.smelting('biggerreactors:uranium_ingot', 'create:crushed_raw_uranium')
	event.blasting('biggerreactors:uranium_ingot', 'create:crushed_raw_uranium')

	event.recipes.thermal.smelter('biggerreactors:uranium_ingot', 'biggerreactors:uranium_dust').energy(1600)
	event.recipes.thermal.smelter('biggerreactors:ludicrite_ingot', 'biggerreactors:ludicrite_dust').energy(1600)
	event.recipes.thermal.smelter('biggerreactors:graphite_ingot', 'biggerreactors:graphite_dust').energy(1600)
	event.recipes.thermal.smelter('biggerreactors:cyanite_ingot', 'biggerreactors:cyanite_dust').energy(1600)
	event.recipes.thermal.smelter('biggerreactors:blutonium_ingot', 'biggerreactors:blutonium_dust').energy(1600)

	event.recipes.thermal.smelter(Item.of('biggerreactors:uranium_ingot').withChance(1.5), 'biggerreactors:uranium_chunk').energy(3200)
	event.recipes.thermal.smelter([Item.of('biggerreactors:uranium_ingot').withChance(1), Item.of('thermal:rich_slag').withChance(0.2)], '#forge:ores/uranium').energy(3200)

	event.recipes.thermal.press('biggerreactors:raw_uranium_block', ['9x biggerreactors:uranium_chunk', 'thermal:press_packing_3x3_die'])
	event.recipes.thermal.press('9x biggerreactors:uranium_chunk', ['biggerreactors:raw_uranium_block', 'thermal:press_unpacking_die'])

	function thermalpackun(input,output) {
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
})

//TAGS

ServerEvents.tags('item', event => {

	event.add('forge:dusts/zinc', 'kubejs:zinc_dust')
	event.add('forge:dusts/brass', 'kubejs:brass_dust')
	event.add('forge:nuggets/uranium', 'kubejs:uranium_nugget')
})

//BLOCK RIGHTCLICK - PLACE

const SAT_TIME = 2.4
const REG_TIME = 12

BlockEvents.rightClicked("kubejs:dragon_block", event => {

	let x = event.block.x
	let y = event.block.y
	let z = event.block.z

	let bool = String(event.block.properties.lit)

	if (bool == "true" && !event.player.crouching) {
		event.server.runCommandSilent(`setblock ${x} ${y} ${z} kubejs:dragon_block[lit=false] replace`)
		event.server.runCommandSilent(`playsound kubejs:dragon_dance record @a ${x} ${y} ${z} 2.5 1`)
		event.server.runCommandSilent(`execute positioned ${x-5} ${y-5} ${z-5} run effect give @a[dx=10,dy=10,dz=10] minecraft:saturation ${20*SAT_TIME} 0 true`)
		event.server.runCommandSilent(`execute positioned ${x-5} ${y-5} ${z-5} run effect give @a[dx=10,dy=10,dz=10] minecraft:regeneration ${REG_TIME} 0 true`)
		event.player.swing()
	} 
	
	if (bool == "false" && event.item.id == "kubejs:dragon_food" && event.player.crouching) {
		if (!event.player.creative) {
			event.item.count--
		}
		event.server.runCommandSilent(`setblock ${x} ${y} ${z} kubejs:dragon_block[lit=true] replace`)
		event.player.swing()
	}
})

BlockEvents.placed("kubejs:dragon_block", event => {
	
	let x = event.block.x
	let y = event.block.y
	let z = event.block.z

	event.server.runCommandSilent(`setblock ${x} ${y} ${z} kubejs:dragon_block[lit=false] replace`)
})