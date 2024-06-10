//TAGS

ServerEvents.tags('block', event => {

	event.add('chisel_chipped_integration:technical_block','chisel_chipped_integration:technical_vent')
})

ServerEvents.tags('item', event => {

	event.add('minecraft:powders',['minecraft:gunpowder','minecraft:redstone','minecraft:glowstone_dust'])
	event.add('forge:dusts/zinc', 'kubejs:zinc_dust')
	event.add('forge:dusts/brass', 'kubejs:brass_dust')
	event.add('forge:nuggets/uranium', 'kubejs:uranium_nugget')

	event.remove('forge:chests','enderchests:ender_chest')
	event.remove('forge:chests/ender','enderchests:ender_chest')

	event.add('forge:tools',"kubejs:key_wrench")
	event.add('forge:tools/wrench',"kubejs:key_wrench")
	event.add('forge:wrenches',"kubejs:key_wrench")
	event.add('minecraft:tools',"kubejs:key_wrench")
	event.add('minecraft:breaks_decorated_pots',['kubejs:redstone_sword','kubejs:star_pickaxe', 'kubejs:farmer_axe','kubejs:key_wrench'])

	event.add('forge:tools','redstone_arsenal:flux_wrench')
	event.add('forge:tools/wrench','redstone_arsenal:flux_wrench')
	event.add('forge:wrenches','redstone_arsenal:flux_wrench')
	event.add('minecraft:tools','redstone_arsenal:flux_wrench')
	event.add('minecraft:breaks_decorated_pots','redstone_arsenal:flux_wrench')

	event.add('kubejs:repair_item','kubejs:star_ingot')

	event.add('forge:bread','kubejs:bread_ingot')

	event.add('chisel_chipped_integration:technical_block','chisel_chipped_integration:technical_vent')

	event.add('minecraft:tools',['kubejs:redstone_sword','kubejs:star_pickaxe', 'kubejs:farmer_axe'])
	event.add('forge:tools',['kubejs:redstone_sword','kubejs:star_pickaxe', 'kubejs:farmer_axe'])

	event.add('minecraft:axes','kubejs:farmer_axe')
	event.add('forge:tools/axes','kubejs:farmer_axe')

	event.add('minecraft:pickaxes','kubejs:star_pickaxe')
	event.add('forge:tools/pickaxes','kubejs:star_pickaxe')

	event.add('minecraft:swords','kubejs:redstone_sword')
	event.add('forge:tools/swords','kubejs:redstone_sword')
})