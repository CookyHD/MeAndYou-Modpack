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
})

//SOUNDS

StartupEvents.registry("sound_event", (event) => {
	event.create("kubejs:dragon_dance")
})