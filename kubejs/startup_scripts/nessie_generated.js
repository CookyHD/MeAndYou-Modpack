//SETUP

let list = [
	[],
	[],
	[]
]

function addSuperRare(tags) {
	tags.forEach(e => {
		list[2].push(e)
	})
}

function addRare(tags) {
	tags.forEach(e => {
		list[1].push(e)
	})
}

function addNormal(tags) {
	tags.forEach(e => {
		list[0].push(e)
	})
}

let data = {
	"type": "minecraft:generic",
	"pools": [{
		"rolls": 1,
		"entries": []
	}]
}

function add(value) {
	data.pools[0].entries[data.pools[0].entries.length] = value
}

//INSERT ENTRIES

addNormal([
	'minecraft:oak_log',
	'minecraft:raw_iron',
	'minecraft:string',
	'minecraft:bone',
	'minecraft:flint',
	'minecraft:slime_ball',
	'minecraft:apple',
	'minecraft:clay_ball',
	'minecraft:chicken',
	'minecraft:cooked_beef',
	'minecraft:bread',
	'minecraft:cookie',
	'minecraft:copper_ingot',
	'thermal:tin_gear',
	'minecraft:cobblestone',
	'kubejs:dust',
	'minecraft:stick',
	'minecraft:egg',
	'minecraft:leather',
	'thermal:nickel_plate'
])

addRare([
	'minecraft:cake',
	'thermal:lead_ingot',
	'create:crushed_raw_gold',
	'thermal:silver_dust',
	'minecraft:ender_pearl',
	'minecraft:quartz',
	'minecraft:amethyst_shard',
	'minecraft:lapis_lazuli',
	'create:brass_sheet',
	'minecraft:nether_brick',
	'minecraft:redstone',
	'minecraft:experience_bottle',
	'minecraft:honeycomb',
	'minecraft:green_dye',
	'minecraft:snowball'
])

addSuperRare([
	'minecraft:diamond',
	'thermal:enderium_dust',
	'thermal:lumium_gear',
	'thermal:signalum_ingot',
	'minecraft:enchanted_golden_apple',
	'kubejs:bread_ingot',
	'botania:manasteel_ingot',
	'minecraft:emerald',
	'thermal:ruby'
])

//SOLO ENTRIES

add({
	"type": "minecraft:item",
	"name": "minecraft:diamond_pickaxe",
	"weight": 5,
	"functions": [
		{
			"function": "minecraft:set_damage",
			"damage": {
				"min": 0.25,
				"max": 0.75
			}
		}
	]
})

add({
	"type": "minecraft:item",
	"name": "minecraft:creeper_spawn_egg",
	"weight": 1
})

add({
	"type": "minecraft:item",
	"name": "minecraft:netherite_ingot",
	"weight": 1
})

//GENERATION

list.forEach((arr,rareity) => {
	arr.forEach(value => {
		add({
			"type": "minecraft:item",
			"name": value,
			"weight": 15-(rareity*5)
		})
	})
})

JsonIO.write('kubejs/data/kubejs/loot_tables/nessie_generated.json',data)