ServerEvents.commandRegistry(event => {

	const {commands:Commands,arguments:Arguments} = event
	event.register(
		Commands.literal("setPackSetting")
		.requires(src => src.hasPermission(3))
		.then(Commands.argument('arg1', Arguments.STRING.create(event))
			.executes(ctx => {
				const arg1 = Arguments.STRING.getResult(ctx,"arg1")
				let player = ctx.source.player
				if (global.SettingsNames.includes(arg1)) {
					global.setSetting(arg1,!global.getSetting(arg1))
					player.tell(Text.yellow(arg1+" set to "+global.getSetting(arg1)+"."))
				} else {
					player.tell(Text.red(arg1+" is no valid Setting."))
				}
				if (arg1 == "CreativeCrafting") {
					Utils.server.tell(Text.blue("Reloading Server..."))
					player.server.runCommandSilent("reload")
					player.server.scheduleInTicks(100, () => {
						Utils.server.tell(Text.green("Reload Done."))
					})
				}
				if (arg1 == "DebugTickOff") {
					if (global.getSetting("DebugTickOff")) player.tell(Text.red("EXPERIMENTTAL SETTING ONLY USE IF YOU KNOW WHAAT YOU ARE DOING.").bold())
				}
				if (arg1 == "CustomCapes") {
					player.tell(Text.blue("Setting takes effect after game Reload."))
				}
				return 1
			})
		)
	)

	event.register(
		Commands.literal("getPackSettings")
		.requires(src => src.hasPermission(3))
		.executes(ctx => {
			let player = ctx.source.player
			global.SettingsNames.forEach(setting => {
				if (setting != "DebugTickOff") player.tell(Text.yellow(setting+" is set to "+global.getSetting(setting)+"."))
			})
			return 1
		})
	)

})

global.getServerSetting = function (name) {
	return global.getSetting(name)
}