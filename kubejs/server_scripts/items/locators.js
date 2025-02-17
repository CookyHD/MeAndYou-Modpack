let LOCATOR = {}

LOCATOR.runLocation = (event,structure,func) => {

	global.itemAddCooldown(event.player,event.item.id,100)
	global.itemDamageAndBreak(event.level,event.player,1)
	global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"minecraft:entity.arrow.hit_player","player",0.5,0.5)
	event.player.swing()
	event.server.scheduleInTicks(20, () => {
		return func(MoreJS.findStructure(event.player.blockPosition(),event.server.getOverworld(),structure,10000))
	})
}

ItemEvents.rightClicked('kubejs:ship_locator', event => {

	if (event.hand == "MAIN_HAND") {

		let suffix = "<Device> "
		let color = "§3"

		event.player.tell(suffix+color+"Searching...")
		LOCATOR.runLocation(event,"kubejs:crashed_ship", (result) => {
			if (result != null) {
				event.player.tell(suffix+color+"Location Found at: [ §rX:"+result.getX()+" Z:"+result.getZ()+" "+color+"]")	
			} else {
				event.player.tell(suffix+"§cError: 404 Location Not Found")
			}
		})
	}
})

ItemEvents.rightClicked('kubejs:copper_compass', event => {

	if (event.hand == "MAIN_HAND") {

		let suffix = "<Compass> "
		let color = "§6"

		event.player.tell(suffix+color+"Searching...")
		LOCATOR.runLocation(event,"kubejs:fake_chambers", (result) => {
			if (result != null) {
				event.player.tell(suffix+color+"Location Found at: [ §rX:"+result.getX()+" Z:"+result.getZ()+" "+color+"]")	
			} else {
				event.player.tell(suffix+"§cError: 404 Location Not Found")
			}
		})
	}
})