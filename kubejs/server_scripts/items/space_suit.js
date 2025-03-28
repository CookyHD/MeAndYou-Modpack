// priority: 10

let SPACE_SUIT = {}

SPACE_SUIT.damage_types = [
	"onFire",
	"inFire",
	"freeze",
	"lava"
]

SPACE_SUIT.consume = (player) => {
	if (player.creative) return true
	for (let slot = 0; slot <= 41; slot++) {
		let item = player.inventory.getStackInSlot(slot)
		if (item.id == "kubejs:mixture_tank_filled") {
			let NBT = item.getNbt()
			if (NBT["Uses"] > 0) {
				NBT["Uses"] -= 4
				item.setNbt(NBT)
				return true
			} else {
				item.count--
				player.inventory.setStackInSlot(slot,Item.of("kubejs:mixture_tank_empty"))
				return false
			}
		}
	}
}

EntityEvents.hurt("minecraft:player", event => {
	FULL_SET.set_update(event,"kubejs:space_",() => {
		SPACE_SUIT.damage_types.forEach(type => {
			if (event.source.getType() == type) {
				if (!event.player.cooldowns.isOnCooldown("kubejs:space_chestplate")) {
					event.player.addItemCooldown("kubejs:space_chestplate",10)
					event.player.damageEquipment("head")
					event.player.damageEquipment("chest")
					event.player.damageEquipment("legs")
					event.player.damageEquipment("feet")
				}
				event.cancel()
			}
		})
	})
})

PlayerEvents.tick(event => {
	if (event.level.time % 20 == 0) FULL_SET.set_update(event,"kubejs:space_",() => {
		let player = event.player
		if (player.eyeInFluidType == "minecraft:water" && SPACE_SUIT.consume(player)) {
			player.airSupply = player.maxAirSupply
		}
		if (player.eyeInFluidType == "minecraft:lava" && !SPACE_SUIT.consume(player)) {
			player.attack(4)
		}
	})
})