

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

LevelEvents.tick(event => {

	event.level.getEntities().forEach(entity => {

		if (entity.type != "minecraft:falling_block") return
		if (entity.getNbt()["BlockState"]["Name"] != "kubejs:heavy_weight") return

		let target = entity.block.down
		if (target.id == "kubejs:unstable_gravel") {
			UNSTABLE_CHAIN(event.server,target)
			entity.kill()
			event.level.spawnParticles("minecraft:block kubejs:heavy_weight",false,entity.x,entity.y,entity.z,0.5,0.5,0.5,150,0)
			global.playSound(event.level,[entity.x,entity.y,entity.z],"minecraft:block.glass.break","neutral",2,0.5)
		}
	})

})