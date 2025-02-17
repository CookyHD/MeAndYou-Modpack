BlockEvents.placed("tetra:chthonic_extractor", event => {
	event.player.setStatusMessage(Text.red("Something went Wrong..."))
	event.block.set("air")
	event.server.scheduleInTicks(1,	() => {
		if (!event.player.creative) event.player.give("tetra:chthonic_extractor")
	})
})