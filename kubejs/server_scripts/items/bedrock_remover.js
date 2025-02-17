BlockEvents.rightClicked('minecraft:bedrock', event => {

	if (event.item.id == 'kubejs:bedrock_remover' && event.hand == 'MAIN_HAND') {

		let block = event.block
		let player = event.player
		let level = event.level

		let y_offset = 0

		let x = block.x + 0.5
		let y = block.y + 0.5
		let z = block.z + 0.5

		if (player.y < block.y) y_offset = -1
		else y_offset = 1
		level.createExplosion(x,y+y_offset,z).strength(1).explode()
		if (y_offset == 1) block.popItemFromFace("kubejs:bedrock_dust","up")
		else block.popItemFromFace("kubejs:bedrock_dust","down")
		global.playSound(level,[block.x,block.y,block.z],"minecraft:entity.item.pickup","neutral")
		level.spawnParticles("end_rod",false,x,y+y_offset,z,0,0,0,20,0.2)
		global.itemDamageAndBreak(level,player,1)
		global.itemAddCooldown(player,'kubejs:bedrock_remover',100)
		player.swing()
	}
})