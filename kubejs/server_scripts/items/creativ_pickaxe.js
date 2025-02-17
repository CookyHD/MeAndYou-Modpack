BlockEvents.rightClicked('minecraft:bedrock', event => {

	if (event.item.id == 'kubejs:creativ_pickaxe' && event.hand == 'MAIN_HAND') {

		let block = event.block
		let player = event.player
		let level = event.level

		let x = block.x + 0.5
		let y = block.y + 0.5
		let z = block.z + 0.5

		if (!player.creative) player.give("bedrock")
		global.playSound(level,[block.x,block.y,block.z],"minecraft:entity.item.pickup","neutral")
		level.spawnParticles("end_rod",false,x,y,z,0,0,0,20,0.1)
		level.destroyBlock(block.pos,false)
		global.itemDamageAndBreak(level,player,1)
		global.itemAddCooldown(player,'kubejs:creativ_pickaxe',40)
		player.swing()
	}
})