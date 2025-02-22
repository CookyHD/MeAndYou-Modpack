//BLOCK

StartupEvents.registry("block", (event) => {

	event.create("dust","falling")
	.displayName("Dust")
	.hardness(0.5)
	.resistance(0.5)
	.soundType("sand")
	.mapColor("color_sand")
	.tagBlock("mineable/shovel")

	event.create("dragon_block")
	.displayName("Dragon Caster")
	.hardness(2.0)
	.resistance(8.0)
	.soundType("stone")
	.mapColor("color_gray")
	.tagBlock("mineable/pickaxe")
	.lightLevel(global.calcLight(8))
	.property(BlockProperties.ENABLED)
	.requiresTool(true)
	
	event.create("amplifyer_totem")
	.displayName("Amplifyer Forge")
	.hardness(1.5)
	.resistance(6.0)
	.soundType("stone")
	.mapColor("color_gray")
	.tagBlock("mineable/pickaxe")
	.lightLevel(global.calcLight(4))
	.property(BlockProperties.ENABLED)
	.requiresTool(true)
	
	event.create("dark_stone")
	.displayName("Darkend Stone")
	.hardness(1.5)
	.resistance(6.0)
	.soundType("stone")
	.mapColor("color_gray")
	.tagBlock("mineable/pickaxe")
	.requiresTool(true)
	
	event.create("dark_stone_slab","slab")
	.displayName("Darkend Stone Slab")
	.hardness(1.5)
	.resistance(6.0)
	.soundType("stone")
	.mapColor("color_gray")
	.tagBlock("mineable/pickaxe")
	.requiresTool(true)
	
	event.create("mutation_catalyst")
	.displayName("Mutation Catalyst")
	.hardness(1.5)
	.resistance(6.0)
	.soundType("stone")
	.mapColor("color_gray")
	.tagBlock("mineable/pickaxe")
	.renderType("cutout")
	.property(BlockProperties.LEVEL)
	.requiresTool(true)
	
	event.create("spark_catalyst")
	.displayName("Spark Catalyst")
	.hardness(1.5)
	.resistance(6.0)
	.soundType("stone")
	.mapColor("color_gray")
	.tagBlock("mineable/pickaxe")
	.renderType("cutout")
	.property(BlockProperties.LEVEL)
	.requiresTool(true)

	event.create("star_block")
	.displayName("Starrite Block")
	.hardness(5)
	.resistance(6.0)
	.soundType("metal")
	.mapColor("color_orange")
	.tagBlock("minecraft:mineable/pickaxe")
	.tagBlock("minecraft:needs_iron_tool")
	.requiresTool(true)

	event.create("creativ_block")
	.displayName("Creativium Block")
	.hardness(5)
	.resistance(6.0)
	.soundType("metal")
	.mapColor("color_purple")
	.tagBlock("minecraft:mineable/pickaxe")
	.tagBlock("minecraft:needs_iron_tool")
	.requiresTool(true)
	.item(i => {
		i.glow(true)
	})

	event.create("tech_block")
	.displayName("Techit Block")
	.hardness(5)
	.resistance(6.0)
	.soundType("metal")
	.mapColor("color_blue")
	.tagBlock("minecraft:mineable/pickaxe")
	.tagBlock("minecraft:needs_iron_tool")
	.requiresTool(true)

	event.create("lostcity_portal")
	.displayName("Lostcity Gateway")
	.hardness(1.5)
	.resistance(6.0)
	.soundType("metal")
	.mapColor("color_red")
	.tagBlock("minecraft:mineable/pickaxe")
	.requiresTool(true)


	event.create("seal_creativ")
	.defaultCutout()
	.displayName("Sealed Creativium")
	.hardness(2.5)
	.resistance(1000.0)
	.soundType("glass")
	.mapColor("color_purple")
	.renderType('cutout')
	.item(i => {
		i.glow(true)
	})
	.property(BlockProperties.LEVEL)
	.tagBlock("minecraft:mineable/pickaxe")
	.tagBlock("minecraft:needs_iron_tool")
	.requiresTool(true)

	event.create("tech_glass")
	.defaultCutout()
	.displayName("Strong Glass")
	.hardness(2.5)
	.resistance(1000.0)
	.soundType("glass")
	.mapColor("color_purple")
	.renderType('cutout')
	.tagBlock("minecraft:mineable/pickaxe")
	.tagBlock("minecraft:needs_iron_tool")
	.requiresTool(true)

	event.create("unobtainium")
	.displayName("Unobtainable Block")

	event.create("fake_redstone_lamp")
	.displayName("Rusty Redstone Lamp")
	.hardness(0.3)
	.resistance(0.3)
	.soundType("glass")
	.mapColor("color_gray")

	event.create("heavy_weight","falling")
	.displayName("Heavy Weight")
	.hardness(1.5)
	.resistance(6)
	.soundType("sand")
	.mapColor("color_gray")
	.noDrops()

	event.create("unstable_gravel")
	.displayName("Unstable Gravel")
	.hardness(0.0)
	.resistance(0.3)
	.soundType("gravel")
	.mapColor("color_gray")
	.property(BlockProperties.LOCKED)
	.noDrops()
	
	

})
