BlockEvents.rightClicked('iceandfire:ghost_chest',event => {
	event.server.scheduleInTicks(1, () => {
		let NBT = event.block.getEntityData()
		let face = String(event.block.getProperties()["facing"])
		event.block.setEntityData({})
		event.block.set("chest",{facing:face})
		event.block.setEntityData(NBT)
	})
})