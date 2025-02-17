
const NESSIES = [
	'kubejs:nessie_red',
	'kubejs:nessie_blue',
	'kubejs:nessie_green',
	'kubejs:nessie_pink'
]

const NESSIES_ENCHANTED = [
	'kubejs:nessie_red_enchanted',
	'kubejs:nessie_blue_enchanted',
	'kubejs:nessie_green_enchanted',
	'kubejs:nessie_pink_enchanted'
]

ItemEvents.rightClicked(event => {

	let use = () => {
		event.player.tell("<Nessie> §c§o<3 <3 <3")
		global.playSound(event.level,[event.player.x,event.player.y,event.player.z],"kubejs:squeak","player")
		event.player.swing()
	}

	function isEnchantedCooldown() {
		let bool = false
		NESSIES_ENCHANTED.forEach(e => {
			if (event.player.cooldowns.isOnCooldown(e)) bool = true
		})
		return bool
	}

	if (NESSIES.includes(event.item.id) && event.hand == 'MAIN_HAND') {
		if (!isEnchantedCooldown()) global.itemAddCooldown(event.player,NESSIES_ENCHANTED,20)
		global.itemAddCooldown(event.player,NESSIES,20)
		use()
	}

	if (NESSIES_ENCHANTED.includes(event.item.id) && event.hand == 'MAIN_HAND') {
		event.level.runCommandSilent(`loot spawn ${event.player.x} ${event.player.y} ${event.player.z} loot kubejs:nessie_generated`)
		global.itemAddCooldown(event.player,NESSIES_ENCHANTED,6000)
		global.itemAddCooldown(event.player,NESSIES,20)
		use()
	}
})