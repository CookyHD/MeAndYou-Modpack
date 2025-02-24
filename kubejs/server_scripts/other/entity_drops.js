EntityEvents.drops("wither_skeleton", event => {
	event.getDrops().forEach(e => {
		if(e.getItem().id == "iceandfire:witherbone") {
			e.kill()
		}
	})
})

EntityEvents.drops("crabbersdelight:crab", event => {
	event.getDrops().forEach(e => {
		if(e.getItem().id == 'crabbersdelight:crab_claw') {
			e.kill()
		}
	})
})