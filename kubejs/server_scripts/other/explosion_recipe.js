LevelEvents.beforeExplosion(event => {

	let box = AABB.ofSize(event.getPosition(),event.size,event.size,event.size)

	event.level.getEntitiesWithin(box).forEach(entity => {
		if (entity.type == "minecraft:item") {
			let NBT = entity.getNbt()
			if (NBT["Item"]["id"] == "kubejs:creativ_compound") {
				NBT["Item"]["id"] = "kubejs:creativ_unstable"
				entity.setNbt(NBT)
			}
		}
	})
})