BlockEvents.rightClicked('kubejs:lostcity_portal', event => {
	
	let player = event.player
	let block = event.block
	let dimension = event.getLevel().dimension
	
	player.swing()
	player.setStatusMessage(Text.yellow("Teleporting..."))
	
	let teleport_to = (name) => {
		event.server.scheduleInTicks(5, () => {
			event.server.getAllLevels().forEach(level => {
				if (level.dimension == name) {
					level.getChunkAt(block.pos).setLoaded(true)
					player.teleportTo(
						name,
						block.x + 0.5,
						level.getHeightmapPos("world_surface",block.pos).y,
						block.z + 0.5,
						player.getYaw(),
						player.getPitch()
					)
				}
			})
		})
	}

	if (dimension == "minecraft:overworld") {
		teleport_to("lostcities:lostcity")
	} else if (dimension == "lostcities:lostcity") {
		teleport_to("minecraft:overworld")
	} else {
		event.server.scheduleInTicks(20, () => {
			player.setStatusMessage(Text.red("Nothing Happens..."))
		})
	}
})