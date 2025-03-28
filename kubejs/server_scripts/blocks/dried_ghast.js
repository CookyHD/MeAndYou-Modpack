
/**
 * @param {Internal.RandomTickCallbackJS} callback
 */
global.dried_ghast_random_tick = (callback) => {
	let block = callback.block
	let waterlogged = String(block.getProperties().get("waterlogged"))
	let facing = String(block.getProperties().get("facing"))
	let age = Number(block.getProperties().get("age"))
	if (waterlogged == "true") {
		if ((age + 1) == 3) {
			block.set("water")
			callback.level.spawnParticles("minecraft:item_snowball",false,block.x+0.5,block.y+0.5,block.z+0.5,0.25,0.25,0.25,20,0)
			let ghastling = callback.level.createEntity("dried_ghast:ghastling")
			ghastling.setPosition(block.x+0.5,block.y+1,block.z+0.5)
			ghastling.spawn()
		} else {
			let str = String(age+1)
			callback.level.spawnParticles("minecraft:happy_villager",false,block.x+0.5,block.y+0.5,block.z+0.5,0.25,0.25,0.25,20,0)
			block.set(block.id,{"age":str,"waterlogged":"true","facing":facing})
		}
	} else if (age != 0) {
		let str = String(age-1)
		callback.level.spawnParticles("minecraft:smoke",false,block.x+0.5,block.y+0.5,block.z+0.5,0.25,0.25,0.25,20,0)
		block.set(block.id,{"age":str,"waterlogged":"false","facing":facing})
	} else {
		callback.level.spawnParticles("large_smoke",false,block.x+0.5,block.y+0.8,block.z+0.5,0.1,0.1,0.1,2,0)
	}
}