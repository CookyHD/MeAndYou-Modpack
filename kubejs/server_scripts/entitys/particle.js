LevelEvents.tick(event => {
	if (!global.getSetting("DebugTickOff")) event.level.getEntities().filter(e => {
		if (
			e.tags.contains("Kubejs_Buff") ||
			e.tags.contains("Kubejs_Warrior") ||
			e.tags.contains("Kubejs_Weber") ||
			e.tags.contains("Kubejs_Cobweb") ||
			e.tags.contains("Kubejs_Mudball") ||
			e.tags.contains("Kubejs_Arrow") ||
			e.tags.contains("Kubejs_MultItem")
		) return true
		if (e.isLiving()) if (
			e.potionEffects.isActive("kubejs:xp_transform") ||
			e.potionEffects.isActive("kubejs:mob_death")
		) return true
		return false
	}).forEach(entity => {

		//BUFF ZOMBIE
		if (entity.tags.contains("Kubejs_Buff") && event.level.time % 5 == 0) {
			let width = entity.getBbWidth()
			let height = entity.getBbHeight()
			event.level.spawnParticles(
				"minecraft:block minecraft:nether_wart_block",
				false,
				entity.x,
				entity.y+height/2,
				entity.z,
				width/4,
				height/4,
				width/4,
				(height+width)*2,
				0
			)
		}

		//SKELETON WORRIOR
		if (entity.tags.contains("Kubejs_Warrior") && event.level.time % 5 == 0) {
			let width = entity.getBbWidth()
			let height = entity.getBbHeight()
			event.level.spawnParticles(
				"soul_fire_flame",
				false,
				entity.x,
				entity.y+height/2,
				entity.z,
				width/4,
				height/4,
				width/4,
				(height+width)/2,
				0
			)
		}

		//WEBER SPIDER
		if (entity.tags.contains("Kubejs_Weber") && event.level.time % 5 == 0) {
			let width = entity.getBbWidth()
			let height = entity.getBbHeight()
			event.level.spawnParticles(
				"item cobweb",
				false,
				entity.x,
				entity.y+height/2,
				entity.z,
				width/2,
				height/2,
				width/2,
				(height+width),
				0
			)
		}

		//COBWEB PROJECTILE
		if (entity.tags.contains("Kubejs_Cobweb")) {
			event.level.spawnParticles("item cobweb",false,entity.x,entity.y,entity.z,0.1,0.1,0.1,1,0)
		}

		//XP WAND EFFECT
		if (entity.isLiving()) if (entity.potionEffects.isActive("kubejs:xp_transform") && event.level.time % 5 == 0) {
			let width = entity.getBbWidth()
			let height = entity.getBbHeight()
			event.level.spawnParticles("dust 0.2 1 0.2 1",false,
				entity.x,
				entity.y+height/2,
				entity.z,
				width/4,
				height/4,
				width/4,
				(height+width)*2,
			0)
		}

		//MUDBALL
		if (entity.tags.contains("Kubejs_Mudball")) {
			event.level.spawnParticles("item kubejs:mud_ball",false,entity.x,entity.y,entity.z,0.1,0.1,0.1,2,0)
		}

		//NEEDLE
		if (entity.tags.contains("Kubejs_Arrow")) {
			event.level.spawnParticles("firework",false,entity.x,entity.y,entity.z,0.1,0.1,0.1,2,0)
		}

		//FARMER AXE EFFECT
		if (entity.isLiving()) if (entity.potionEffects.isActive("kubejs:mob_death") && event.level.time % 5 == 0) {
			let width = entity.getBbWidth()
			let height = entity.getBbHeight()
			event.level.spawnParticles("dust 1 1 1 1",false,
				entity.x,
				entity.y+height/2,
				entity.z,
				width/4,
				height/4,
				width/4,
				(height+width)*2,
			0)
		}

		//DRAGON CAST ITEM
		if (entity.tags.contains("Kubejs_MultItem") && event.level.time % 10 == 0) {
			event.level.spawnParticles("end_rod",false,entity.x,entity.y+0.2,entity.z,0,0,0,1,0.025)
		}
	})
})