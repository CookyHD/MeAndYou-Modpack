// JEI

JEIEvents.hideItems(event => {
	event.hide([
		'#comforts:hammocks',
		'comforts:rope_and_nai',
		'waystones:warp_plate',
		'waystones:warp_dust',
		'thermal:device_soil_infuser',
		'pipez:wrench',
		'pipez:gas_pipe',
		'sophisticatedbackpacks:xp_pump_upgrade',
		'thermal:beekeeper_helmet',
		'thermal:beekeeper_chestplate',
		'thermal:beekeeper_leggings',
		'thermal:beekeeper_boots',
		'thermal:beekeeper_fabric',
		'thermal:sugar_cane_block',
		'thermal:bamboo_block',
		'thermal:apple_block',
		'thermal:carrot_block',
		'thermal:potato_block',
		'thermal:beetroot_block',
		'decorative_blocks:chandelier',
		'decorative_blocks:soul_chandelier',
		'decorative_blocks:bar_panel',
		'decorative_blocks:lattice',
		'create:copycat_step',
		'create:copycat_panel',
		'decorative_blocks:blockstate_copy_item',
		'endertanks:ender_bucket',
		'enderchests:ender_bag',
		'enderchests:ender_pouch'
	])
})

JEIEvents.hideFluids(event => {
	event.hide('sophisticatedcore:xp_still')
})

JEIEvents.addItems(event => {
	event.add([
		'craftingstation:crafting_station',
		'craftingstation:crafting_station_slab'
	])
})

//TOOLTIPS

ItemEvents.tooltip(event => {

	event.addAdvanced('thermal:device_tree_extractor', (item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.red("May be broken on some Trees!"))
			text.add(2,Text.red("use on vanilla Trees for better,"))
			text.add(3,Text.red("results."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:dragon_block',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.gray("Dancing Toothless <3"))
			text.add(2,Text.yellow("Right Click to Play the Song."))
			text.add(3,Text.yellow("Sneak Right Click with Dragon Food to Recharge."))
		} else {
			text.add(1,Text.gray("Dancing Toothless <3"))
			text.add(2,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})
})