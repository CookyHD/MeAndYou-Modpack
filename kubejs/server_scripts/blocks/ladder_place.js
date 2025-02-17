BlockEvents.rightClicked(event => {
	
	if (event.item.hasTag("kubejs:ladder") && event.block.hasTag("kubejs:ladder")) {
		if (event.facing == Facing.DOWN) {
			if (global.isAir(event.block.down)) {
				let side = String(event.block.getProperties()["facing"])
				event.block.down.set(event.item.id,{"facing":side})
				if (!event.player.creative) event.item.count--
				event.player.swing()
			}
		} else if (event.facing == Facing.UP) {
			if (global.isAir(event.block.up)) {
				let side = String(event.block.getProperties()["facing"])
				event.block.up.set(event.item.id,{"facing":side})
				if (!event.player.creative) event.item.count--
				event.player.swing()
			}
		} else {
			return
		}
	}
})