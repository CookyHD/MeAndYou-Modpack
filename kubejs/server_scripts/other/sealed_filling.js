
let sealed_explosion = (block) => {
	block.set('air')
	block.createExplosion()
		.strength(4)
		.explosionMode("tnt")
		.explode()
	block.popItem('kubejs:creativ_ingot')
}

/**
 * @param {Internal.BlockContainerJS} block
 */
global.filling_sleald_creativium = (block, fluid, simulate) => {

	let stage = parseInt(block.getProperties()["level"])

	if (fluid.id == 'cofh_core:experience' && fluid.amount >= 1000 && stage != 5) {
		if (!simulate) {
			
			let level = block.getLevel()
			let server = level.getServer()
			let {x,y,z} = block
		
			global.playSound(level,[x,y,z],"minecraft:item.bottle.fill","block")
			block.set(block.id,{level: String(stage + 1)})
			if (stage == 4) {
				global.playSound(level,[x,y,z],"minecraft:block.glass.break","block")
				level.spawnParticles("minecraft:totem_of_undying",false,x+0.5,y+0.5,z+0.5,0.25,0.25,0.25,150,0.75)
				server.scheduleInTicks(20, () => {
					let checkBlock = level.getBlock(x,y,z)
					let checkStage = parseInt(checkBlock.getProperties()["level"])
					if (checkBlock.id == "kubejs:seal_creativ" && checkStage == 5) {
						sealed_explosion(block)
					}
				})
			}
		}
		return 1000
	}
	return 0
}

BlockEvents.broken("kubejs:seal_creativ", event => {
	let stage = parseInt(event.block.getProperties()["level"])
	let {x,y,z} = event.block
	switch (stage) {
		case 1:
		case 2:
		case 3:
		case 4:
			global.playSound(event.level,[x,y,z],"minecraft:block.beacon.deactivate","block")
			event.level.spawnParticles("minecraft:totem_of_undying",false,x+0.5,y+0.5,z+0.5,0.25,0.25,0.25,20,0)
			break
		case 5:
			sealed_explosion(event.block)
	}
})

BlockEvents.placed('create:spout', event => {
	
	let blockAbove = event.block.getUp()
	let blockUndder = event.block.getDown()

	console.log(blockAbove.id)

	if (blockUndder.id == 'kubejs:seal_creativ') {
		if (blockAbove.id == 'minecraft:air') {
			blockAbove.set('create:spout')
			event.block.set('air')
		} else {
			event.block.set('air')
			event.server.scheduleInTicks(1,	() => {
				if (!event.player.creative) event.player.give("create:spout")
			})
		}
	}
})