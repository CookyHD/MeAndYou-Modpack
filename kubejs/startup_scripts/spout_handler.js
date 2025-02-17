
CreateEvents.spoutHandler(event => {
	event.add('kubejs:filling_seal_creativ', 'kubejs:seal_creativ', (block, fluid, simulate) => {
			if (global.filling_sleald_creativium) return global.filling_sleald_creativium(block, fluid, simulate)
			return 0
		}
	)
})