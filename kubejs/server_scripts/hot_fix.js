//Tags / Recipes Fix, Makes Worlds Load Longer Tho
ServerEvents.loaded(event => {
	event.server.scheduleInTicks(100, () => {
		event.server.runCommandSilent("reload")
	})
})