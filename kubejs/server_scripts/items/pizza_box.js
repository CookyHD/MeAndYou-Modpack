ItemEvents.rightClicked("kubejs:pizza_box", event => {
	if (event.hand == "MAIN_HAND") {
		event.level.broadcastEntityEvent(event.player,47)
		event.server.runCommandSilent("stopsound "+event.player.username+" * minecraft:entity.item.break")
		global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"minecraft:entity.item_frame.break","player")
		if (!event.player.creative) {
			event.item.count--
		}
		global.itemAddCooldown(event.player,"kubejs:pizza_box",20)
		event.player.swing()
		event.player.give("4x kubejs:pizza_slice")
		if (global.chance(25,100)) {
			event.player.give("paper")
		}
	}
})