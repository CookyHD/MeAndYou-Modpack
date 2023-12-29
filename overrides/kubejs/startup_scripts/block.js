StartupEvents.registry("block", (event) => {
	event.create("dragon_block")
		.displayName("Dragon Block")
		.hardness(1.5)
		.resistance(6.0)
		.soundType("stone")
		.mapColor("color_gray")
		.tagBlock("mineable/pickaxe")
		.lightLevel(0.26)
		.texture('up', 'kubejs:block/dragon_block_null')
		.texture('down', 'kubejs:block/dragon_block_null')
})

//StartupEvents.registry("sound event", (event) => {
//	event.create("dragon_dance")
//})