ServerEvents.commandRegistry(event => {

	const {commands:Commands,arguments:Arguments} = event
	event.register(
		Commands.literal("skipSong")
		.requires(src => src.hasPermission(0))
		.executes(ctx => {
			let player = ctx.source.player
			ctx.source.level.runCommandSilent("stopsound "+player.username+" music")
			player.tell(Text.yellow("Skipped playing music. Music will start again soon."))
			return 1
		})
	)
})