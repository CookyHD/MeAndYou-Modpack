ItemEvents.rightClicked(event => {
	let guns = [
		'gunswithoutroses:iron_gun',
		'gunswithoutroses:gold_gun',
		'gunswithoutroses:blaze_gun',
		'gunswithoutroses:diamond_shotgun',
		'gunswithoutroses:diamond_sniper',
		//'gunswithoutroses:diamond_gatling',
		'gunswithoutrosesadditions:manasteel_gun',
		'gunswithoutrosesadditions:elementium_gun',
		'gunswithoutrosesadditions:terra_shotgun',
		'meetyourfight:phantasmal_rifle',
		'meetyourfight:cocktail_shotgun'
	].forEach(id => {
		if (event.item.id == id && event.hand == "MAIN_HAND") {
			event.player.swing()
			if (event.player.isCreative()) {
				event.server.scheduleInTicks(0, () => {
					event.player.cooldowns.removeCooldown(id)
				})
			}
		}
	})
})