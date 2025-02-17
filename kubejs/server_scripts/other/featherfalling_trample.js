BlockEvents.farmlandTrampled(event => {
	if (event.player.getFeetArmorItem().enchantments.containsKey('minecraft:feather_falling')) {
		event.cancel()
	}
})