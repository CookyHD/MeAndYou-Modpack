//BLOCKS

StartupEvents.registry("block", (event) => {
	event.create("dragon_block")
		.displayName("Dragon Block")
		.hardness(2.0)
		.resistance(8.0)
		.soundType("stone")
		.mapColor("color_gray")
		.tagBlock("mineable/pickaxe")
		.lightLevel(0.53)
		.property(BlockProperties.LIT)
	
	event.create("dark_stone")
		.displayName("Dark Stone")
		.hardness(1.5)
		.resistance(6.0)
		.soundType("stone")
		.mapColor("color_gray")
		.tagBlock("mineable/pickaxe")
		.requiresTool(true)
	
	event.create("dark_stone_slab","slab")
		.displayName("Dark Stone Slab")
		.hardness(1.5)
		.resistance(6.0)
		.soundType("stone")
		.mapColor("color_gray")
		.tagBlock("mineable/pickaxe")
		.requiresTool(true)
	
})

//ITEM

StartupEvents.registry("item", (event) => {

	event.create("dragon_food")
		.displayName("Dragon Food")
		.maxStackSize(16)

	event.create("zinc_dust")
		.displayName("Zinc Dust")

	event.create("brass_dust")
		.displayName("Brass Dust")

	event.create('nugget_compound')
		.displayName("Chicken Nuggies Compound")
		.food(food => {
			food
				.effect('minecraft:hunger', 600, 0, 1)
				.effect('minecraft:poison', 200, 0, 0.5)
				.hunger(5)
				.saturation(0.3)
		})

	event.create('nugget')
		.displayName("Chicken Nuggie")
		.food(food => {
			food
				.hunger(3)
				.saturation(0.3)
				.fastToEat()
		})
})

//SOUNDS

StartupEvents.registry("sound_event", (event) => {
	event.create("kubejs:dragon_dance")
})

//TABS

//StartupEvents.modifyCreativTab('thermal:items', event => {
//	event.add('kubejs:zinc_dust')
//	event.add('kubejs:brass_dust')
//})
//
//StartupEvents.modifyCreativTab('kubejs', event => {
//	event.remove('kubejs:zinc_dust')
//	event.remove('kubejs:brass_dust')
//})