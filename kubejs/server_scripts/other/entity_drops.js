EntityEvents.drops("wither_skeleton", event => {
	event.getDrops().forEach(e => {
		if(e.getItem().id == "iceandfire:witherbone") {
			e.kill()
		}
	})
})

EntityEvents.drops("player", event => {
	if (event.entity.username == "CookyHD") {
		event.addDrop(Item.of("cookie"))
	}
})