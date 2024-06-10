//ITEM

StartupEvents.registry("item", (event) => {

	event.create("logo")
		.displayName("Logo")
		.unstackable()

	event.create("redstone_sword","sword")
		.displayName("Redstone Sword")
		.tier('diamond')
		.speedBaseline(-2.4-0.8)
		.modifyTier(tier => {
			tier.speed = 9.0
			tier.repairIngredient = '#kubejs:repair_item'
			tier.attackDamageBonus = 9
			tier.uses = 3046
		})

	event.create("farmer_axe","axe")
		.displayName("Farmer Axe")
		.tier('diamond')
		.speedBaseline(-3.1-0.6)
		.attackDamageBaseline(6+3)
		.modifyTier(tier => {
			tier.speed = 9.0
			tier.repairIngredient = '#kubejs:repair_item'
			tier.attackDamageBonus = 9
			tier.uses = 3046
		})

	event.create("star_pickaxe","pickaxe")
		.displayName("Star Pickaxe")
		.tier('netherite')
		.modifyTier(tier => {
			tier.speed = 12.0
			tier.repairIngredient = '#kubejs:repair_item'
			tier.attackDamageBonus = 5
			tier.uses = 3046
		})

	event.create("key_wrench")
		.displayName("Bone Wrench")
		.unstackable()

	event.create("dragon_food")
		.displayName("Energised Meat")
		.maxStackSize(16)

	event.create('nugget_compound')
		.displayName("Chicken Nugget Compound")
		.food(food => {
			food
				.effect('minecraft:hunger', 600, 0, 1)
				.effect('minecraft:poison', 200, 0, 0.5)
				.hunger(5)
				.saturation(0.3)
		})

	event.create('nugget')
		.displayName("Chicken Nugget")
		.food(food => {
			food
				.hunger(3)
				.saturation(0.2)
				.fastToEat()
		})

	event.create('enriched_nugget')
		.displayName("Enriched Chicken Nugget")
		.food(food => {
			food
				.effect('minecraft:regeneration', 100, 0, 1)
				.hunger(3)
				.saturation(0.8)
				.fastToEat()
				.alwaysEdible()
		})

	event.create('golden_cookie')
		.displayName("Golden Cookie")
		.food(food => {
			food
				.effect('minecraft:absorption', 2400, 0, 1)
				.effect('minecraft:speed', 200, 1, 1)
				.hunger(2)
				.saturation(1.2)
				.alwaysEdible()
		})

	event.create('super_cookie')
		.displayName("Super Cookie")
		.food(food => {
			food
				.effect('minecraft:haste', 1200, 0, 1)
				.hunger(2)
				.saturation(0.8)
				.alwaysEdible()
				
		})

	event.create('charged_cookie')
		.displayName("Charged Cookie")
		.food(food => {
			food
				.effect('minecraft:haste', 2400, 0, 1)
				.effect('minecraft:regeneration', 200, 1, 1)
				.hunger(2)
				.saturation(1.2)
				.alwaysEdible()
				
		})

	event.create('charged_matter')
		.displayName("Charged Matter")
		.maxStackSize(16)

	event.create('incomplete_galaxy_cookie', 'create:sequenced_assembly')

	event.create('galaxy_cookie')
		.displayName("Galaxy Cookie")
		.unstackable()

	event.create('star_dust')
		.displayName("Star Dust")

	event.create('star_ingot')
		.displayName("Star Ingot")

	event.create('reinforced_handle')
		.displayName("Reinforced Handle")

	event.create('redstone_ingot')
		.displayName("Redium Ingot")

	event.create('farmer_ingot')
		.displayName("Farmit Ingot")

	event.create('power_dust')
		.displayName("Power Dust")

	event.create("powdered_wheat")
		.displayName("Powdered Wheat")

	event.create("powdered_beans")
		.displayName("Powdered Beans")

	event.create("magic_wheat")
		.displayName("Magic Wheat")

	event.create("rich_beans")
		.displayName("Rich Beans")

	event.create('bloody_tear')
		.displayName("Bloody Tear")

	event.create('droplet')
		.displayName("Droplet Shard")

	event.create("zinc_dust")
	.displayName("Zinc Dust")

	event.create("brass_dust")
		.displayName("Brass Dust")

	event.create("uranium_nugget")
		.displayName("Uranium Nugget")

	event.create("bread_ingot")
		.displayName("Bread Ingot")
		.food(food => {
			food
				.hunger(5)
				.saturation(0.6)	
		})

	let colors = ['green','red','pink','blue']
	
	colors.forEach( element => {
		event.create('nessie_'+element)
			.displayName('Nessie')
			.unstackable()
			.burnTime(216000)
	})

	colors.forEach( element => {
		event.create('gem_'+element)
			.displayName('Colored Gem')
			.unstackable()
			.glow(true)
	})
})
