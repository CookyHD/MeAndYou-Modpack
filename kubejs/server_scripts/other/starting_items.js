let WINGS = Item.of('minecraft:elytra', "{CustomModelData:1,Damage:0,display:{Name:'{\"text\":\"Cana\\'s Wings\"}'}}")

let ITEMS = [
	Item.of('minecraft:iron_sword', '{Damage:100}'),
	Item.of('minecraft:bow', '{Damage:184}'),
	Item.of('minecraft:stone_pickaxe', '{Damage:31}'),
	Item.of('minecraft:stone_axe', '{Damage:31}'),
	'kubejs:library',
	'16x minecraft:bread',
	'8x minecraft:cooked_beef',
	'16x minecraft:torch',
	'24x minecraft:arrow'
]

PlayerEvents.loggedIn(event => {
	let player = event.player
	if (!player.stages.has("Kubejs_StartingItems") && !player.creative && global.getSetting("StartingItems")) {
		ITEMS.forEach(item => {
			player.give(item)
		})
		if (player.username == "Cana_xd") {
			player.give(WINGS)
		}
		player.stages.add("Kubejs_StartingItems")
	}
	if (!player.stages.has("Kubejs_RemoveBook")) {
		event.server.scheduleInTicks(20, () => {
			event.level.runCommandSilent("clear "+player.username+' patchouli:guide_book{"patchouli:book":"irons_spellbooks:iss_guide_book"}')
		})
		player.stages.add("Kubejs_RemoveBook")
	}
})

ServerEvents.commandRegistry(event => {

	const {commands:Commands,arguments:Arguments} = event
	event.register(
		Commands.literal("getStartingItems")
		.requires(src => src.hasPermission(3))
		.executes(ctx => {
			let player = ctx.source.player
			ITEMS.forEach(item => {
				player.give(item)
			})
			if (player.username == "Cana_xd") {
				player.give(WINGS)
			}
			player.tell(Text.yellow("Recived all Starting Items."))
			return 1
		})
	)
})