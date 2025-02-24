
let DRAGON_BLOCK = {}

DRAGON_BLOCK.recipes = []
DRAGON_BLOCK.add = function (input,output,forge) {
	DRAGON_BLOCK.recipes.push({"input":input,"output":output,"forge":forge})
}

DRAGON_BLOCK.add('kubejs:nugget','kubejs:enriched_nugget',false)
DRAGON_BLOCK.add('kubejs:super_cookie','kubejs:charged_cookie',false)
DRAGON_BLOCK.add('kubejs:needle_gun','kubejs:needle_gun_forged',true)

global.NessieColors.forEach( element => {
	DRAGON_BLOCK.add('kubejs:gem_'+element,'kubejs:nessie_'+element,false)
	DRAGON_BLOCK.add('kubejs:nessie_'+element,'kubejs:nessie_'+element+'_enchanted',true)
})

DRAGON_BLOCK.cast_id = 'kubejs:dragon_food'
DRAGON_BLOCK.wrench_id = 'kubejs:key_wrench'

DRAGON_BLOCK.dragon_id = 'kubejs:dragon_block'
DRAGON_BLOCK.totem_id = 'kubejs:amplifyer_totem'

DRAGON_BLOCK.regen_time = 12

BlockEvents.rightClicked("kubejs:dragon_block", event => {

	if (event.hand == "MAIN_HAND") {

		let player = event.player
		let block = event.block
		let level = event.level
		let item = event.item

		let totem = block.down.id == DRAGON_BLOCK.totem_id ? true : false
		let enabled = String(block.getProperties()["enabled"])
	
		let box = AABB.ofSize(new Vec3d(block.x+0.5,block.y+0.5,block.z+0.5),11,11,11)

		if (item.id == DRAGON_BLOCK.cast_id) {
			if (!player.creative) item.count--
			global.itemAddCooldown(player,item.id,5)
			player.swing()
			level.getEntitiesWithin(box).forEach(entity => {
				if (entity.type == "minecraft:item") {
					let nbt = entity.getNbt()
					DRAGON_BLOCK.recipes.forEach(recipe => {
						if (nbt["Item"]["id"] == recipe.input && totem == recipe.forge) {
							nbt["Item"]["id"] = recipe.output
							nbt["Tags"] = ["Kubejs_MultItem"]
							global.playSound(level,[entity.x,entity.y,entity.z],"minecraft:entity.item.pickup","neutral")
							level.spawnParticles("end_rod",false,entity.x,entity.y+0.2,entity.z,0,0,0,10,0.05)
						}
					})
					entity.setNbt(nbt)
				} else if (entity.living) {
					entity.getPotionEffects().add("regeneration",DRAGON_BLOCK.regen_time*20,0)
				}
			})
			if (totem) {
				level.spawnParticles("dust_color_transition 0.2 0 1 1.5 1 1 1",false,block.x+0.5,block.y+0.5,block.z+0.5,2.5,2.5,2.5,250,0)
				level.spawnParticles("soul_fire_flame",false,block.x+0.5,block.y+0.5,block.z+0.5,2.5,2.5,2.5,50,0)
			} else {
				level.spawnParticles("dust_color_transition 1 0 0.2 1.5 1 1 1",false,block.x+0.5,block.y+0.5,block.z+0.5,2.5,2.5,2.5,250,0)
				level.spawnParticles("flame",false,block.x+0.5,block.y+0.5,block.z+0.5,2.5,2.5,2.5,50,0)
			}
			if (enabled == "true") global.playSound(level,[block.x,block.y,block.z],"kubejs:dragon_dance","record",2)
			global.playSound(level,[block.x,block.y,block.z],"minecraft:entity.blaze.shoot","block")
		}
		
		if (item.id == DRAGON_BLOCK.wrench_id) {
			global.itemAddCooldown(player,item.id,5)
			player.swing()
			global.playSound(level,[block.x,block.y,block.z],"minecraft:block.lever.click","block")
			if (enabled == "true") {
				block.set(block.id,{enabled:false})
			} else {
				block.set(block.id,{enabled:true})
			}
		}
	}

})