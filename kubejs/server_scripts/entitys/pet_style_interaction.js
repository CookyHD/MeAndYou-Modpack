
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
			if (index == 8) {
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

let CAT_TYPES = [
	"minecraft:white",
	"minecraft:black",
	"minecraft:red",
	"minecraft:siamese",
	"minecraft:british_shorthair",
	"minecraft:calico",
	"minecraft:persian",
	"minecraft:ragdoll",
	"minecraft:tabby",
	"minecraft:all_black",
	"minecraft:jellie",
	"moremobvariants:gray_tabby",
	"moremobvariants:doug",
	"moremobvariants:handsome",
	"moremobvariants:tortoiseshell"
]

ItemEvents.entityInteracted(event => {
	if (event.hand == "MAIN_HAND" && event.item.hasTag("forge:shears") && event.target.type == "minecraft:cat") {
		let entity = event.target
		let NBT = entity.getNbt()
		let index = CAT_TYPES.indexOf(NBT["VariantID"])
		Utils.server.tell([CAT_TYPES[index]," , "+index+" , ",index+1])
		//Utils.server.tell(CAT_TYPES)
		if (index != -1 && entity.getOwner() == event.player) {
			if (index == 14) {
				NBT["VariantID"] = CAT_TYPES[0]
			} else {
				NBT["VariantID"] = CAT_TYPES[index + 1]
			}
			entity.setNbt(NBT)
			event.player.swing()
			global.playSound(event.level,[entity.x,entity.y,entity.z],"minecraft:entity.sheep.shear","player")
			global.itemDamageAndBreak(event.level,event.player,1)
			event.cancel()
		}
	}
})