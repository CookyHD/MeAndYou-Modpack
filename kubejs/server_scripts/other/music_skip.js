ServerEvents.commandRegistry(event => {

	const {commands:Commands,arguments:Arguments} = event
	event.register(
		Commands.literal("skipSong")
		.requires(src => src.hasPermission(0))
		.executes(ctx => {
			let player = ctx.source.player
			ctx.source.server.runCommandSilent("stopsound "+player.username+" music")
			player.tell("§e<Server> §7Skipped playing music. Music will start again soon.")
			return 1
		})
	)
})