LevelEvents.tick(event => {
	if (!global.getSetting("DebugTickOff")) event.level.getEntities().filter(e => {
		if (e.tags.contains("Kubejs_Buff")) return true
		if (e.tags.contains("Kubejs_Warrior")) return true
		if (e.tags.contains("Kubejs_Weber")) return true
		if (e.tags.contains("Kubejs_Cobweb")) return true
		if (e.tags.contains("Kubejs_XpDrop")) return true
		if (e.tags.contains("Kubejs_Mudball")) return true
		if (e.tags.contains("Kubejs_Arrow")) return true
		if (e.tags.contains("Kubejs_DeathTransform")) return true
		if (e.tags.contains("Kubejs_MultItem")) return true
		return false
	}).forEach(entity => {

		//BUFF ZOMBIE
		if (entity.tags.contains("Kubejs_Buff") && event.level.time % 5 == 0) {
			let width = entity.getBbWidth()
			let height = entity.getBbHeight()
			event.level.spawnParticles(
				"minecraft:block minecraft:nether_wart_block",
				true,
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
				true,
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
				true,
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
			event.level.spawnParticles("item cobweb",true,entity.x,entity.y,entity.z,0.1,0.1,0.1,1,0)
		}

		//XP WAND EFFECT
		if (entity.tags.contains("Kubejs_XpDrop") && event.level.time % 5 == 0) {
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
			event.level.spawnParticles("firework",true,entity.x,entity.y,entity.z,0,0,0,1,0)
		}

		//FARMER AXE EFFECT
		if (entity.tags.contains("Kubejs_DeathTransform") && event.level.time % 5 == 0) {
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