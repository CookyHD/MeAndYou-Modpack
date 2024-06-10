//HOLDING BIG WEAPONS

const BIG_WAPONS = [
	'kubejs:redstone_sword',
	'kubejs:farmer_axe'
]

let checkForBig = (id) => {
	let bool = false
	BIG_WAPONS.forEach(e => {
		if (id == e) bool = true
	})
	return bool
}

let addAttributeAmount = (player,attribute,amount) => {
	let value = player.getAttributeBaseValue(attribute)
	player.setAttributeBaseValue(attribute,value+amount)
}

ServerEvents.tick(event => {
	event.server.getPlayers().forEach(player => {
		if (checkForBig(player.getMainHandItem().id) && !player.stages.has('kubejs_big_held')) {
			player.stages.add('kubejs_big_held')
			addAttributeAmount(player,'minecraft:generic.attack_knockback',0.5)
			addAttributeAmount(player,'forge:entity_reach',2)
		} else if (!checkForBig(player.getMainHandItem().id) && player.stages.has('kubejs_big_held')) {
			player.stages.remove('kubejs_big_held')
			addAttributeAmount(player,'minecraft:generic.attack_knockback',-0.5)
			addAttributeAmount(player,'forge:entity_reach',-2)
		}
	})
})

BlockEvents.rightClicked('minecraft:bedrock', event => {

	if (event.item.id == 'kubejs:star_pickaxe' && event.hand == 'MAIN_HAND') {

		let item = event.item
		let block = event.block
		let player = event.player
		let level = event.level

		if (player.creative == false) {
			player.damageHeldItem('MAIN_HAND', (item.getMaxDamage() / 16) + 1, () => {
				level.broadcastEntityEvent(player,47)
			})
			player.addItem('minecraft:bedrock')
			player.addItemCooldown('kubejs:star_pickaxe',20*5)
		}
		block.set('minecraft:air')
		event.server.runCommandSilent(`playsound minecraft:block.stone.break block @a ${block.x} ${block.y} ${block.z} 1 1`)
		event.server.runCommandSilent(`execute positioned ${block.x} ${block.y + 0.5} ${block.z} run particle minecraft:end_rod ~ ~ ~ 0 0 0 0.05 20 normal @a`)
		event.server.runCommandSilent(`execute positioned ${block.x} ${block.y} ${block.z} run particle minecraft:block bedrock ~ ~ ~ 0.5 0.5 0.5 0 30 normal @a`)
		player.swing()
	}
})


const NESSIES = [
	'kubejs:nessie_red',
	'kubejs:nessie_blue',
	'kubejs:nessie_green',
	'kubejs:nessie_pink'
]

ItemEvents.rightClicked(event => {

	if (NESSIES.includes(event.item.id) && event.hand == 'MAIN_HAND') {
		NESSIES.forEach(element => {
			if (event.player.creative == false) event.player.addItemCooldown(element, 20)
		})
		event.player.tell("<Nessie> §c§o<3 <3 <3")
		event.server.runCommandSilent(`playsound kubejs:squeak player @a ${event.player.x} ${event.player.y} ${event.player.z} 1 1`)
		event.player.swing()
	}
})