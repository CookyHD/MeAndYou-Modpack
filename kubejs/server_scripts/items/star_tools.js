let STAR_TOOLS = {}

STAR_TOOLS.tool_update = function (event,item,effect) {
	if (event.hand == "MAIN_HAND" && event.item.id == item) {
		event.player.swing()
		event.player.potionEffects.add(effect,20*20,0,false,true)
		global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"minecraft:block.beacon.power_select","player")
		global.itemDamageAndBreak(event.level,event.player,1)
		global.itemAddCooldown(event.player,item,20*60)
	}
}

ItemEvents.rightClicked(event => {
	STAR_TOOLS.tool_update(event,"kubejs:star_sword","strength")
	STAR_TOOLS.tool_update(event,"kubejs:star_axe","strength")
	STAR_TOOLS.tool_update(event,"kubejs:star_pickaxe","haste")
	STAR_TOOLS.tool_update(event,"kubejs:star_shovel","haste")
	STAR_TOOLS.tool_update(event,"kubejs:star_hoe","luck")
	STAR_TOOLS.tool_update(event,"kubejs:star_hammer","resistance")
})
