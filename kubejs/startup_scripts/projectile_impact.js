ForgeEvents.onEvent("net.minecraftforge.event.entity.ProjectileImpactEvent",event => {
	if (global.projectileImpacts != null) global.projectileImpacts.forEach(func => {
		func(event)
	})
})
