BlockEvents.rightClicked(event => {
	if (event.hand == "MAIN_HAND" && event.item.id == "kubejs:star_ingot") {
		let faces = [
			"north",
			"east",
			"west",
			"south",
			"down",
			"up"
		].forEach(face => {
			if (event.block[face].down.hasTag("kubejs:can_grow") && face == event.facing) {
				if (global.isAir(event.block[face])) {
					event.player.swing()
					event.block[face].set("kubejs:farmer_crop")
					global.playSound(event.level,[event.block[face].x,event.block[face].y,event.block[face].z],"minecraft:block.metal.place","block")
					if (!event.player.creative) event.item.count--
				}
			}
		})
	}
	if (event.block.id == "kubejs:farmer_crop" && event.hand == "MAIN_HAND") {
		if (event.item.hasTag("minecraft:pickaxes") || event.player.creative) {
			let stage = Number(event.block.getProperties().get("age"))
			if (stage == 4) {
				event.level.destroyBlock(event.block.pos,true)
				event.player.swing()
				if (global.consumePlayerItem(event.player,"kubejs:star_ingot",1)) {
					event.block.set("kubejs:farmer_crop")
					global.playSound(event.level,[event.block.x,event.block.y,event.block.z],"minecraft:block.metal.place","block")
				}
			}
		}
	}

})

/**
 * @param {Internal.RandomTickCallbackJS} callback
 */
global.farmer_crop_callback = (callback) => {
	let block = callback.block
	let age = Number(block.getProperties().get("age"))
	if (!block.down.hasTag("kubejs:can_grow")) {
		callback.level.destroyBlock(block.pos,true)
	} else {
		let str = String(age + 1)
		block.set(block.id,{"age":str})
	}
}