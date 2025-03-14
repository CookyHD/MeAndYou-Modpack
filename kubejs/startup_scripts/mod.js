Platform.setModName("kubejs","CookiesCrafts")

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
	
	event.icon = 'kubejs:logo'
	event.displayName = Text.of("CookiesCrafts")

	let toRemove = [
		'kubejs:incomplete_galaxy_cookie',
		'kubejs:incomplete_tech_ingot',
		'kubejs:incomplete_seal_creativ',
		'kubejs:needle_gun',
		'kubejs:needle_gun_forged',
		'kubejs:logo',
		'kubejs:unobtainium',
		"kubejs:wooden_hammer",
		"kubejs:stone_hammer",
		"kubejs:iron_hammer",
		"kubejs:golden_hammer",
		"kubejs:diamond_hammer",
		"kubejs:netherite_hammer",
		"kubejs:fake_redstone_lamp",
		'thermal:enderium_glass',
		'thermal:signalum_glass',
		'thermal:lumium_glass',
		'thermal:obsidian_glass',
		"kubejs:heavy_weight",
		"kubejs:unstable_gravel",
		"kubejs:mixture_tank_filled",
		"kubejs:catalyst_prismarine",
		"kubejs:farmer_crop"
	].forEach(e => {
		event.remove(e)
	})
	
	event.add(Item.of("kubejs:mixture_tank_filled",{Uses:1000}))
	event.add(Item.of('minecraft:elytra', "{CustomModelData:1,Damage:0,display:{Name:'{\"text\":\"Black Wings\",\"italic\":false}'}}"))
	event.add(Item.of('kubejs:needle_gun',{Ammo:0,Damage:0}))
	event.add(Item.of('kubejs:needle_gun_forged',{Ammo:0,Damage:0}))

})

StartupEvents.modifyCreativeTab('tools_and_utilities', event => {

	event.add([
		"kubejs:wooden_hammer",
		"kubejs:stone_hammer",
		"kubejs:iron_hammer",
		"kubejs:golden_hammer",
		"kubejs:diamond_hammer",
		"kubejs:netherite_hammer"
	])

})