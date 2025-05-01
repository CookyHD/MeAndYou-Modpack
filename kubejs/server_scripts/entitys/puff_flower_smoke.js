LevelEvents.tick(event => {
	event.level.getEntities().filter(e => {
		if (e.tags.contains("Kubejs_PuffFlower")) return true
		return false
	}).forEach(entity => {
		if (entity.age % 10 == 0) {
			if (entity.age <= 160) {
				let size = 1.5
				let sizes = [
					["Small",1.5],
					["Normal",2],
					["Large",2.5]
				].forEach(e => {
					if (entity.tags.contains("Kubejs_Size"+e[0])) {
						size = e[1]
					}
				})
				let color = "0 0 0"
				let colors = [
					["Red","1 0 0"],
					["Lime","0.25 1 0.25"],
					["Blue","0 0 1"],
					["White","1 1 1"],
					["Black","0.25 0.25 0.25"],
					["LightGray","0.75 0.75 0.75"],
					["Gray","0.5 0.5 0.5"],
					["Cyan","0 0.75 0.75"],
					["Green","0 0.5 0"],
					["Yellow","1 1 0"],
					["Orange","1 0.5 0"],
					["Brown","0.5 0.25 0"],
					["Purple","0.75 0 0.75"],
					["Pink","1 0.5 0.75"],
					["Magenta","1 0.25 1"]
				].forEach(e => {
					if (entity.tags.contains("Kubejs_Color"+e[0])) {
						color = e[1]
					}
				})
				event.level.spawnParticles("dust "+color+" 4",false,entity.x,entity.y+size,entity.z,size,size,size,50*size,0)
				let box = AABB.ofSize(new Vec3d(entity.x,entity.y+size,entity.z),size*2,size*2,size*2)
				let entitys = event.level.getEntitiesWithin(box).filter(e => {
					if (e.living) return true
					return false
				})
				if (!entitys.isEmpty()) {
					entitys.forEach(entity => {
						entity.potionEffects.add("minecraft:blindness",30,0,false,false)
						entity.potionEffects.add("minecraft:invisibility",15,0,false,false)
					})
				}
			} else {
				entity.kill()
			}
		}
	})
})