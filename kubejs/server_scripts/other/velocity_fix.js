LevelEvents.tick(event => {
	
	event.level.getEntities().forEach(entity => {
		let shot_types = [
			"neutral_shot",
			"exorcism_shot",
			"blaze_shot",
			"ender_shot",
			"concussive_shot",
			"buster_shot",
			"seeker_shot",
			"sand_shot",
			"storm_shot"
		].forEach(shot => {
			if (entity.type == "reliquary:"+shot && !entity.tags.contains("Kubejs_VelocityEdit")) {
				entity.motionX *= 2
				entity.motionY *= 2
				entity.motionZ *= 2
				entity.tags.add("Kubejs_VelocityEdit")
			}
		})
	})

})