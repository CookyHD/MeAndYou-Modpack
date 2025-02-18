let REMEMEBR_TICKS = 0
let REMEMBER_SETTING = (20*60)*60
let REMEMBER_PAST = 0

ServerEvents.tick(event => {
	REMEMEBR_TICKS++
	if (REMEMEBR_TICKS == REMEMBER_SETTING) {
		REMEMEBR_TICKS = 0
		REMEMBER_PAST++
		if (global.getSetting("RememberMe")) {
			Utils.server.tell("§e<Server> §7Game is Running Since §6"+REMEMBER_PAST+"hrs§7. Please Rememeber to take a Break!")
		}
	}
})