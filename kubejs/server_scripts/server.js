//CONSTS

const UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS');

//RECIPES

ServerEvents.recipes(event => {

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
	event.remove({ mod: 'pipez' })

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
})

//BLOCK RIGHTCLICK

BlockEvents.rightClicked("kubejs:dragon_block", event => {

	let x = event.block.x
	let y = event.block.y
	let z = event.block.z

	let bool = String(event.block.properties.lit)

	if (bool == "true" && !event.player.crouching) {
		event.server.runCommandSilent(`setblock ${x} ${y} ${z} kubejs:dragon_block[lit=false] replace`)
		event.server.runCommandSilent(`playsound kubejs:dragon_dance record @a ${x} ${y} ${z} 2.5 1`)
		event.server.runCommandSilent(`execute positioned ${x-5} ${y-5} ${z-5} run effect give @a[dx=10,dy=10,dz=10] minecraft:saturation ${20*0.5} 0 true`)
		event.player.swing()
	} 
	
	if (bool == "false" && event.item.id == "kubejs:dragon_food" && event.player.crouching) {
		event.item.count--
		event.server.runCommandSilent(`setblock ${x} ${y} ${z} kubejs:dragon_block[lit=true] replace`)
		event.player.swing()
	}

})

//STARTING ITEMS

//PlayerEvents.loggedIn(event => {
//	  if (!event.player.stages.has('starting_items')) {
//		event.player.stages.add('starting_items')
//		event.player.give("minecraft:iron_sword")
//		event.player.give("minecraft:iron_axe")
//		event.player.give("minecraft:iron_pickaxe")
//		event.player.give("16x minecraft:bread")
//		event.player.give("32x minecraft:torch")
//	  }
//})