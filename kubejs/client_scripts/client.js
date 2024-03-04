// JEI

const createsteam = []
const createadd = []

JEIEvents.hideItems(event => {


	event.hide([
		'#railways:conductor_caps',
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
		'enderchests:ender_pouch',
		'createdeco:netherite_sheet',
		'railways:smokestack_streamlined',
		'railways:smokestack_long',
		'railways:smokestack_caboosestyle',
		'railways:track_switch_brass',
		'railways:remote_lens',
		'railways:conductor_whistle',
		'createaddition:gold_rod',
		'createaddition:electrum_rod',
		'createaddition:brass_rod',
		'createaddition:straw',
		'createaddition:seed_oil_bucket',
		'createaddition:bioethanol_bucket',
		'createaddition:capacitor',
		'createaddition:biomass_pellet_block',
		'createaddition:redstone_relay',
		'createaddition:large_connector',
		'createaddition:small_light_connector',
		'createaddition:connector',
		'createaddition:rolling_mill',
		'createaddition:barbed_wire',
		'createaddition:tesla_coil',
		'createaddition:copper_wire',
		'createaddition:zinc_sheet',
		'createaddition:electrum_sheet',
		'createaddition:electrum_nugget',
		'createaddition:electrum_ingot',
		'createaddition:electrum_amulet',
		'createaddition:biomass_pellet',
		'createaddition:biomass',
		'createaddition:diamond_grit',
		'createaddition:iron_rod',
		'createaddition:copper_rod',
		'createaddition:festive_spool',
		'createaddition:electrum_spool',
		'createaddition:gold_spool',
		'createaddition:spool',
		'createaddition:electrum_wire',
		'createaddition:gold_wire',
		'createaddition:iron_wire'
	])
})

JEIEvents.hideFluids(event => {
	event.hide([
		'sophisticatedcore:xp_still',
		'createaddition:seed_oil',
		'createaddition:bioethanol'
	])
})

JEIEvents.addItems(event => {
	event.add([
		//'craftingstation:crafting_station',
		//'craftingstation:crafting_station_slab',
		'thermal:rf_coil',
		'thermal:redstone_servo',
		'createaddition:cake_base',
		'createaddition:cake_base_baked',
		'createaddition:capacitor'
	])
})

//TOOLTIPS

ItemEvents.tooltip(event => {

	event.addAdvanced('thermal:device_tree_extractor', (item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.red("Does Not Work with every Trees!").bold(true))
			text.add(2,Text.yellow("Use on vanilla Trees for better results."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:dragon_block',(item, advanced, text) => {
		text.add(1,Text.green("Dancing Toothless <3"))
		if (event.shift) {
			text.add(2,Text.yellow("Right Click to Cast the Song/Effect."))
			text.add(3,Text.yellow("Sneak Right Click with Dragon Food to Recharge."))
			text.add(4,Text.blue("Can be used as Framed Block Camo.").italic(true))
		} else {
			text.add(2,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('mobcapturingtool:mob_capturing_tool', (item, advanced, text) => {
		if (!item.hasNBT()) {
			if (event.shift) {
				text.add(1,Text.red("Not all Mobs Are Captureble!").bold(true))
				text.add(2,Text.red("May Couses Bugs Use with Care.").bold(true))
			} else {
				text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
			}
		}
	})
})