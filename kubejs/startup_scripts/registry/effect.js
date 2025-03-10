StartupEvents.registry("mob_effect", event => {
	
	event.create("xp_transform")
	.displayName("Hardend XP Dropings")
	.beneficial()
	.color(Color.LIME_DYE)

	event.create("mob_death")
	.displayName("Animal Convertion")
	.beneficial()
	.color(Color.WHITE)

})