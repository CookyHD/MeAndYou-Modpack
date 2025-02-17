let BREAD_TOOLS = {}

BREAD_TOOLS.tools = [
	'kubejs:bread_sword',
	'kubejs:bread_axe',
	'kubejs:bread_shovel',
	'kubejs:bread_pickaxe',
	'kubejs:bread_hoe',
	'kubejs:bread_hammer'
]

BREAD_TOOLS.tool_update = function (event,item,amount) {
	if (event.hand == "MAIN_HAND" && event.item.id == item) {
		let damage = Math.floor(event.item.getMaxDamage() / amount)
		if ((event.item.getMaxDamage() - event.item.getDamageValue()) >= damage && event.player.foodLevel < 20) {
			event.player.addFood(5,0.6)
			global.itemAddCooldown(event.player,BREAD_TOOLS.tools,20*3)
			global.itemDamageAndBreak(event.level,event.player,damage)
			global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"minecraft:entity.player.burp","player")
			event.player.swing()
		}
	}
}

ItemEvents.rightClicked(event => {
	BREAD_TOOLS.tool_update(event,"kubejs:bread_sword",4)
	BREAD_TOOLS.tool_update(event,"kubejs:bread_axe",5)
	BREAD_TOOLS.tool_update(event,"kubejs:bread_pickaxe",5)
	BREAD_TOOLS.tool_update(event,"kubejs:bread_shovel",3)
	BREAD_TOOLS.tool_update(event,"kubejs:bread_hoe",4)
	BREAD_TOOLS.tool_update(event,"kubejs:bread_hammer",7)
})