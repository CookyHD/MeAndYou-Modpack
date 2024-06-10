//Rewoke This to not use that many commands
//SETUP

const CAST_RECIPES = []
let add_recipe = (input,output) => CAST_RECIPES.push([input,output])
const X_CAST_RECIPES = []
let add_x_recipe = (input,output) => X_CAST_RECIPES.push([input,output])

//RECIPES --- only edit if you know what you do!

add_recipe('kubejs:nugget','kubejs:enriched_nugget')
add_recipe('kubejs:super_cookie','kubejs:charged_cookie')
let colors = ['green','red','pink','blue']
colors.forEach( element => {
	add_x_recipe('kubejs:gem_'+element,'kubejs:nessie_'+element)
})

//SETTINGS

const LOCK_ITEM_ID = 'kubejs:key_wrench'
const CAST_ITEM_ID = 'kubejs:dragon_food'

const X_TOTEM = 'kubejs:amplifyer_totem'

const COLOR_NORMAL = '1 0.2 0.2'
const COLOR_X = '0.2 0.2 1'

const REG_TIME = 12

const PAT_RATE = 10

//CODE

const cmds = [
	//0
	(text) => `say @a ${text}`,
	//1
	(x,y,z) => `playsound minecraft:entity.experience_orb.pickup block @a ${x} ${y} ${z} 1 0.6`,
	//2
	(x,y,z,time) => `execute positioned ${x-5} ${y-5} ${z-5} run effect give @e[dx=10,dy=10,dz=10] minecraft:regeneration ${time} 0 true`,
	//3
	(x,y,z,array) => `execute positioned ${x-5} ${y-5} ${z-5} as @e[dx=10,dy=10,dz=10,type=item,nbt={Item:{id:"${array[0]}"}}] run data merge entity @s {Item:{id:"${array[1]}"},Tags:["new_item","expo_item"]}`,
	//4
	(x,y,z) => `playsound kubejs:dragon_dance record @a ${x} ${y} ${z} 1.5 1`,
	//5
	(x,y,z,time,color) => `particle minecraft:dust_color_transition ${color} ${time} 1 1 1 ${x} ${y} ${z} 2.5 2.5 2.5 0 120 normal @a`,
	//6
	() => `execute at @e[tag=expo_item] run playsound minecraft:entity.item.pickup ambient @a ~ ~ ~ 0.8 1.2`,
	//7
	() => `execute at @e[tag=expo_item] run particle minecraft:end_rod ~ ~0.2 ~ 0.2 0.2 0.2 0.1 20 normal @a`,
	//8
	() => `execute as @e[tag=expo_item] run tag @s remove expo_item`,
	//9
	(x,y,z,bool) => `setblock ${x-0.5} ${y-0.5} ${z-0.5} kubejs:dragon_block[enabled=${bool}] replace`,
	//10
	(x,y,z,p) => `playsound minecraft:block.lever.click block @a ${x} ${y} ${z} 1 ${p}`,
	//11
	() => `execute at @e[tag=new_item] run particle minecraft:end_rod ~ ~0.2 ~ 0.1 0.1 0.1 0.025 2 normal @a`
]

BlockEvents.rightClicked("kubejs:dragon_block", event => {

	let x = event.block.x + 0.5
	let y = event.block.y + 0.5
	let z = event.block.z + 0.5
	
	let enabled = String(event.block.properties.enabled)

	let swosh = () => {
		event.player.swing()
		event.cancel()
	}

	if (event.item.id == CAST_ITEM_ID && !event.player.crouching) {

		if (!event.player.creative) {
			event.item.count--
		}
		event.server.runCommandSilent(cmds[1](x,y,z))
		event.server.runCommandSilent(cmds[2](x,y,z,REG_TIME))
		if (event.level.getBlock(x-0.5,y-1.5,z-0.5).id == X_TOTEM) {
			X_CAST_RECIPES.forEach( element => {
				event.server.runCommandSilent(cmds[3](x,y,z,element))
			})
			event.server.runCommandSilent(cmds[5](x,y,z,REG_TIME,COLOR_X))
		} else {
			CAST_RECIPES.forEach( element => {
				event.server.runCommandSilent(cmds[3](x,y,z,element))
			})
			event.server.runCommandSilent(cmds[5](x,y,z,REG_TIME,COLOR_NORMAL))
		}
		if (enabled == "true") event.server.runCommandSilent(cmds[4](x,y,z))
		event.server.runCommandSilent(cmds[6]())
		event.server.runCommandSilent(cmds[7]())
		event.server.runCommandSilent(cmds[8]())
		swosh()
	}

	let getBool = () => {
		if (enabled == "true") return false
		else return true
	}

	let getNum = () => {
		if (getBool()) return 1.2
		else return 0.8
	}

	if (event.item.id == LOCK_ITEM_ID && !event.player.crouching) {
		event.server.runCommandSilent(cmds[9](x,y,z,getBool()))
		event.server.runCommandSilent(cmds[10](x,y,z,getNum()))
		swosh()
	}
})

let TICKS_PAST = 0

ServerEvents.tick(event => {
	TICKS_PAST++
	if (TICKS_PAST >= PAT_RATE) {
		event.server.runCommandSilent(cmds[11]())
		TICKS_PAST = 0
	}
})