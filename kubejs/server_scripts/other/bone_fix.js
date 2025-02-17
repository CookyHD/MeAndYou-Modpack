EntityEvents.drops("wither_skeleton", event => {
	event.getDrops().forEach(e => {
		if(e.getItem().id == "iceandfire:witherbone") {
			e.kill()
		}
	})
})