
BlockEvents.rightClicked("kubejs:fake_redstone_lamp", event => {

	let block = event.block

	if (event.hand == "MAIN_HAND" && event.item.hasTag("forge:tools/axes")) {
		block.set("minecraft:redstone_lamp",{lit:true})
		event.level.spawnParticles("minecraft:scrape",false,block.x+0.5,block.y+0.5,block.z+0.5,0.3,0.3,0.3,90,0.1)
		global.playSound(event.level,[block.x,block.y,block.z],"minecraft:item.axe.scrape","block")
		global.itemDamageAndBreak(event.level,event.player,1)
		event.player.swing()
	}
})