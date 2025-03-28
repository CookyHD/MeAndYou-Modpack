
let WOLF_TYPES = [
	"moremobvariants:ashen",
	"moremobvariants:black",
	"moremobvariants:chestnut",
	"moremobvariants:default",
	"moremobvariants:rusty",
	"moremobvariants:snowy",
	"moremobvariants:spotted",
	"moremobvariants:striped",
	"moremobvariants:woods"
]

ItemEvents.entityInteracted(event => {
	if (event.hand == "MAIN_HAND" && event.item.hasTag("forge:shears") && event.target.type == "minecraft:wolf") {
		let entity = event.target
		let NBT = entity.getNbt()
		let index = WOLF_TYPES.indexOf(NBT["VariantID"])
		if (index != -1 && entity.getOwner() == event.player) {
			if (index == WOLF_TYPES.length-1) {
				NBT["VariantID"] = WOLF_TYPES[0]
			} else {
				NBT["VariantID"] = WOLF_TYPES[index+1]
			}
			entity.setNbt(NBT)
			event.player.swing()
			global.playSound(event.level,[entity.x,entity.y,entity.z],"minecraft:entity.sheep.shear","player")
			global.itemDamageAndBreak(event.level,event.player,1)
			event.cancel()
		}
	}
})