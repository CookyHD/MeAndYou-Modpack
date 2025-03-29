//Tags / Recipes Fix, Makes Worlds Load Longer Tho
ServerEvents.loaded(event => {
	event.server.runCommandSilent("reload")
})