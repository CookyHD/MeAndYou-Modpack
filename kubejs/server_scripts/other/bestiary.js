ItemEvents.rightClicked("iceandfire:bestiary", event => {

	if (event.item.getNbt()["Pages"][5] == null) {
		event.item.count--
		event.server.scheduleInTicks(1, () => {
			event.player.give(Item.of('iceandfire:bestiary', '{Pages:[I;0,5,22,21,3,7,24,1,8,6,26,2,4,17,9,25]}'))
		})
		event.player.setStatusMessage(Text.yellow("Reloaded Bugged Book..."))
		event.player.closeMenu()
	}
})