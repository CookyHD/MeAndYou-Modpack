//AAAAAAAAAAAAAAAAAAAAAAAAA

JEIEvents.removeCategories(event => {
	event.remove("sfm:falling_anvil")
})

JEIAddedEvents.registerCategories(event => {

	event.custom("kubejsadditions:dragon_casting", category => {

		let guiHelper = category.getJeiHelpers().getGuiHelper()

		category.title("Dragon Casting")
		category.background(guiHelper.createBlankDrawable(128, 24))
		category.icon(guiHelper.createDrawableItemStack(Item.of('kubejs:dragon_block')))

		category.isRecipeHandled((recipe) => {
			if (!recipe) return false
			if (!recipe.data) return false
			if (!recipe.data.in) return false
			if (!recipe.data.out) return false
			if (recipe.data.amp == null) return false
			if (recipe.data.tag == null) return false
			return true
		})

		category.handleLookup((builder, recipe, focuses) => {

			builder.addInvisibleIngredients("INPUT").addItemStack('kubejs:dragon_block')

			if (recipe.data.tag) {

				builder.addSlot("INPUT",8,4)
					.addIngredients(Ingredient.of(recipe.data.in))
					.setSlotName("input")
					.setBackground(guiHelper.getSlotDrawable(), -1, -1)

				builder.addSlot("OUTPUT",104,4)
					.addIngredients(Ingredient.of(recipe.data.out))
					.setSlotName("output")
					.setBackground(guiHelper.getSlotDrawable(), -1, -1)

			} else {

				builder.addSlot("INPUT",8,4)
					.addItemStack(Item.of(recipe.data.in))
					.setSlotName("input")
					.setBackground(guiHelper.getSlotDrawable(), -1, -1)

				builder.addSlot("OUTPUT",104,4)
					.addItemStack(Item.of(recipe.data.out))
					.setSlotName("output")
					.setBackground(guiHelper.getSlotDrawable(), -1, -1)
			}

			if (recipe.data.amp) {

				builder.addSlot("INPUT",56,4)
					.addItemStack(Item.of('kubejs:amplifyer_totem'))
					.setSlotName("addition")
					.setBackground(guiHelper.getSlotDrawable(), -1, -1)
			}
		})

		category.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
			if (recipe.data.amp) {
				guiGraphics.blit("kubejs:textures/gui/recipe_empty.png", 42, 3, 0, 0, 44, 17, 44, 17)
			} else {
				guiGraphics.blit("jei:textures/jei/atlas/gui/recipe_arrow.png", 53, 5, 0, 0, 22, 15, 22, 15)
			}
		})
	})

	event.custom("kubejsadditions:explosion", category => {

		let guiHelper = category.getJeiHelpers().getGuiHelper()

		category.title("Blasting Transform")
		category.background(guiHelper.createBlankDrawable(128, 24))
		category.icon(guiHelper.createDrawableItemStack(Item.of('minecraft:tnt')))

		category.isRecipeHandled((recipe) => {
			if (!recipe) return false
			if (!recipe.data) return false
			if (!recipe.data.in) return false
			if (!recipe.data.out) return false
			return true
		})

		category.handleLookup((builder, recipe, focuses) => {

			builder.addInvisibleIngredients("INPUT").addItemStack('minecraft:tnt')

			builder.addSlot("INPUT",8,4)
				.addItemStack(Item.of(recipe.data.in))
				.setSlotName("input")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)

			builder.addSlot("OUTPUT",104,4)
				.addItemStack(Item.of(recipe.data.out))
				.setSlotName("output")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)
		})

		category.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
			guiGraphics.blit("kubejs:textures/gui/recipe_explosion.png", 42, 3, 0, 0, 44, 17, 44, 17)
		})
	})

	event.custom("kubejsadditions:nessie_loot", category => {

		let guiHelper = category.getJeiHelpers().getGuiHelper()

		category.title("Nessie Loot")
		category.background(guiHelper.createBlankDrawable(64+12, 20))
		category.icon(guiHelper.createDrawableItemStack(Item.of('kubejs:nessie_green')))

		category.isRecipeHandled((recipe) => {
			if (!recipe) return false
			if (!recipe.data) return false
			if (!recipe.data.name) return false
			if (!recipe.data.weight) return false
			return true
		})

		category.handleLookup((builder, recipe, focuses) => {

			builder.addInvisibleIngredients("INPUT").addIngredients(Ingredient.of('#kubejs:nessie_enchanted'))

			builder.addSlot("OUTPUT",2,2)
				.addItemStack(Item.of(recipe.data.name))
				.setSlotName("loot")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)
		})

		category.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
			guiGraphics.drawWordWrap(Client.font,Text.darkGray("Weight: "+recipe.data.weight),25,7,100,0)
			guiGraphics.drawWordWrap(Client.font,Text.white("Weight: "+recipe.data.weight),24,6,100,0)
		})
	})

	event.custom("kubejsadditions:hammer", category => {

		let guiHelper = category.getJeiHelpers().getGuiHelper()

		category.title("Smasher Breaking")
		category.background(guiHelper.createBlankDrawable(128, 24))
		category.icon(guiHelper.createDrawableItemStack(Item.of('kubejs:iron_hammer')))

		category.isRecipeHandled((recipe) => {
			if (!recipe) return false
			if (!recipe.data) return false
			if (!recipe.data.in) return false
			if (!recipe.data.out) return false
			return true
		})

		category.handleLookup((builder, recipe, focuses) => {

			builder.addInvisibleIngredients("INPUT").addIngredients(Ingredient.of('#kubejs:hammers'))

			builder.addSlot("INPUT",8,4)
				.addItemStack(Item.of(recipe.data.in))
				.setSlotName("input")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)

			builder.addSlot("OUTPUT",104,4)
				.addItemStack(Item.of(recipe.data.out))
				.setSlotName("output")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)

		})

		category.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
			guiGraphics.blit("kubejs:textures/gui/recipe_hammer.png", 42, 3, 0, 0, 44, 17, 44, 17)
		})
	})

	event.custom("kubejsadditions:bedrock_click", category => {

		let guiHelper = category.getJeiHelpers().getGuiHelper()

		category.title("Bedrock Interaction")
		category.background(guiHelper.createBlankDrawable(128, 24))
		category.icon(guiHelper.createDrawableItemStack(Item.of('minecraft:bedrock')))

		category.isRecipeHandled((recipe) => {
			if (!recipe) return false
			if (!recipe.data) return false
			if (!recipe.data.in) return false
			if (!recipe.data.out) return false
			return true
		})

		category.handleLookup((builder, recipe, focuses) => {

			builder.addInvisibleIngredients("INPUT").addItemStack("minecraft:bedrock")

			builder.addSlot("INPUT",8,4)
				.addItemStack(Item.of(recipe.data.in))
				.setSlotName("input")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)

			builder.addSlot("OUTPUT",104,4)
				.addItemStack(Item.of(recipe.data.out))
				.setSlotName("output")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)

		})

		category.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
			guiGraphics.blit("jei:textures/jei/atlas/gui/recipe_arrow.png", 53, 5, 0, 0, 22, 15, 22, 15)
		})
	})

	event.custom("kubejsadditions:infusing_block", category => {

		let guiHelper = category.getJeiHelpers().getGuiHelper()

		category.title("Infusing Block")
		category.background(guiHelper.createBlankDrawable(128, 84))
		category.icon(guiHelper.createDrawableItemStack(Item.of('create:spout')))

		category.isRecipeHandled((recipe) => {
			return true
		})

		category.handleLookup((builder, recipe, focuses) => {


			builder.addSlot("INPUT",56,4)
				.addFluidStack("cofh_core:experience",1000)
				.setSlotName("fluid")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)

			builder.addSlot("INPUT",56,28)
				.addItemStack(Item.of('create:spout'))
				.setSlotName("addition")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)

			builder.addSlot("INPUT",8,52)
				.addItemStack(Item.of('kubejs:seal_creativ'))
				.setSlotName("input")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)

			builder.addSlot("OUTPUT",104,52)
				.addItemStack(Item.of('kubejs:creativ_ingot'))
				.setSlotName("output")
				.setBackground(guiHelper.getSlotDrawable(), -1, -1)


		})

		category.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
			guiGraphics.blit("kubejs:textures/gui/recipe_fluid_meter.png", 74, 1, 0, 0, 16, 22, 16, 22)
			guiGraphics.blit("kubejs:textures/gui/recipe_xp.png", 60, 4, 0, 0, 8, 48, 8, 48)
			guiGraphics.blit("kubejs:textures/gui/recipe_infusion.png", 42, 51, 0, 0, 44, 17, 44, 17)
			guiGraphics.drawWordWrap(Client.font,Text.darkGray("x5"),59,73,100,0)
			guiGraphics.drawWordWrap(Client.font,Text.white("x5"),58,72,100,0)
		})
	})

})

const NessieTable = JsonIO.read('kubejs/data/kubejs/loot_tables/nessie_generated.json')

JEIAddedEvents.registerRecipes((event) => {
	event.custom("kubejsadditions:dragon_casting")
		.add({in: 'kubejs:super_cookie', out: 'kubejs:charged_cookie', amp: false, tag: false})
		.add({in: 'kubejs:nugget', out: 'kubejs:enriched_nugget', amp: false, tag: false})
		.add({in: '#kubejs:gem', out: '#kubejs:nessie', amp: false, tag: true})
		.add({in: '#kubejs:nessie', out: '#kubejs:nessie_enchanted', amp: true, tag: true})
		.add({in: 'kubejs:needle_gun', out: 'kubejs:needle_gun_forged', amp: true, tag: false})
		.add({in: 'kubejs:star_ingot', out: 'kubejs:space_ingot', amp: true, tag: false})

	event.custom("kubejsadditions:explosion")
		.add({in: 'kubejs:creativ_compound', out: 'kubejs:creativ_unstable'})

	NessieTable["pools"][0]["entries"].forEach(e => {
		event.custom("kubejsadditions:nessie_loot").add({name: e["name"], weight: e["weight"]})
	})

	event.custom("kubejsadditions:hammer")
		.add({in: 'minecraft:cobblestone', out: 'minecraft:gravel'})
		.add({in: 'minecraft:gravel', out: 'minecraft:sand'})
		.add({in: 'minecraft:sand', out: 'kubejs:dust'})
		.add({in:'minecraft:stone_bricks', out: 'minecraft:cracked_stone_bricks'})

	event.custom("kubejsadditions:infusing_block")
		.add({})

	event.custom("kubejsadditions:bedrock_click")
		.add({in: 'kubejs:creativ_pickaxe', out: 'minecraft:bedrock'})
		.add({in: 'kubejs:bedrock_remover', out: 'kubejs:bedrock_dust'})

})