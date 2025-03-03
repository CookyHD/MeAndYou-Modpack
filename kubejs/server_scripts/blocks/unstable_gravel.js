

/**
 * 
 * @param {Internal.MinecraftServer} server
 * @param {Internal.BlockContainerJS} block
 */
function UNSTABLE_CHAIN(server,block) {

	if (block.id != "kubejs:unstable_gravel") return
	let marked = String(block.getProperties()["locked"])
	if (marked == "false") {
		return
	} else {
		block.set(block.id,{locked:false})
	}

	let arr = [
		block.north,
		block.east,
		block.south,
		block.west,
		block.up,
		block.down
	].forEach(blocks => {
		server.scheduleInTicks(2, () => {
			UNSTABLE_CHAIN(server,blocks)
		})
	})

	block.level.destroyBlock(block.pos,false)

}

BlockEvents.broken("kubejs:unstable_gravel", event => {

	UNSTABLE_CHAIN(event.server,event.block)
	event.cancel()
})

BlockEvents.placed("kubejs:heavy_weight", event => {

	if (event.block.down.id == "kubejs:unstable_gravel") {
		event.level.destroyBlock(event.block.pos,false)
		UNSTABLE_CHAIN(event.server,event.block.down)
	}
})

LevelEvents.tick(event => {
	event.level.getEntities().filter(e => e.tags.contains("Kubejs_Heavy")).forEach(entity => {
		let target_block = entity.block.down
		let own_block = entity.block
		if (!global.isAir(target_block)) {
			event.server.scheduleInTicks(5, () => {
				if (own_block.id == "kubejs:heavy_weight") {
					own_block.level.destroyBlock(own_block.pos,false)
				}
				UNSTABLE_CHAIN(event.server,target_block)
			})
		}
		if (target_block.id == "minecraft:water") {
			if (String(target_block.getProperties()["level"]) == "0") {
				event.server.scheduleInTicks(15, () => {
					target_block.set("minecraft:water")
				})
			}
		}
	})
})


