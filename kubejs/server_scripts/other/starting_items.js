let STARTING_ITEMS = [
	'minecraft:iron_sword',
	'minecraft:bow',
	'minecraft:iron_pickaxe',
	'minecraft:iron_axe',
	'kubejs:library',
	'16x minecraft:bread',
	'8x minecraft:cooked_beef',
	'16x minecraft:torch',
	'24x minecraft:arrow'
]

PlayerEvents.loggedIn(event => {
	let player = event.player
	if (!player.stages.has("Kubejs_StartingItems") && !player.creative && global.getSetting("StartingItems")) {
		STARTING_ITEMS.forEach(item => {
			player.give(item)
		})
		if (player.username == "Cana_xd") {
			player.give(Item.of('minecraft:elytra', "{CustomModelData:1,Damage:0,display:{Name:'{\"text\":\"Cana\\'s Wings\"}'}}"))
		}
		player.stages.add("Kubejs_StartingItems")
	}
})

ServerEvents.commandRegistry(event => {

	const {commands:Commands,arguments:Arguments} = event
	event.register(
		Commands.literal("getStartingItems")
		.requires(src => src.hasPermission(3))
		.executes(ctx => {
			let player = ctx.source.player
			STARTING_ITEMS.forEach(item => {
				player.give(item)
			})
			if (player.username == "Cana_xd") {
				player.give(Item.of('minecraft:elytra', "{CustomModelData:1,Damage:0,display:{Name:'{\"text\":\"Cana\\'s Wings\"}'}}"))
			}
			player.tell(Text.yellow("Recived all Starting Items."))
			return 1
		})
	)
})