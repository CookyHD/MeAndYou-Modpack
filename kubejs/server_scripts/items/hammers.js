let HAMMER = {}

HAMMER.convert_list = [
	["minecraft:cobblestone","minecraft:gravel"],
	["minecraft:gravel","minecraft:sand"],
	["minecraft:sand","kubejs:dust"],
	['minecraft:stone_bricks', 'minecraft:cracked_stone_bricks']
]

HAMMER.convertBlock = (block) => {
	let id = block.id
	let bool = false
	HAMMER.convert_list.forEach(arr => {
		if (arr[0] == id) {
			block.set(arr[1])
			bool = true
		}
	})
	return bool
}

BlockEvents.broken(event => {
	if (event.player.getMainHandItem().hasTag("kubejs:hammers") && !event.player.isShiftKeyDown()) {
		if (HAMMER.convertBlock(event.block)) {
			global.itemDamageAndBreak(event.level,event.player,1)
			event.cancel()
		}
	}
})

HAMMER.copper_blocks = [
	'createcopper_shingle_slab',
	'create:oxidized_copper_shingles',
	'create:weathered_copper_shingles',
	'create:exposed_copper_shingles',
	'create:copper_shingles',
	'create:exposed_copper_shingle_slab',
	'create:weathered_copper_shingle_slab',
	'create:oxidized_copper_shingle_slab',
	'create:copper_shingle_stairs',
	'create:waxed_exposed_copper_tiles',
	'create:waxed_weathered_copper_tiles',
	'create:waxed_oxidized_copper_tiles',
	'create:waxed_copper_tile_slab',
	'create:waxed_oxidized_copper_shingle_stairs',
	'create:copper_tiles',
	'create:exposed_copper_tiles',
	'create:weathered_copper_tiles',
	'create:oxidized_copper_tiles',
	'create:waxed_exposed_copper_shingle_slab',
	'create:waxed_weathered_copper_shingle_slab',
	'create:waxed_copper_shingle_slab',
	'create:waxed_oxidized_copper_shingles',
	'create:waxed_weathered_copper_shingles',
	'create:oxidized_copper_tile_slab',
	'create:weathered_copper_tile_slab',
	'create:exposed_copper_tile_slab',
	'create:copper_tile_slab',
	'create:waxed_oxidized_copper_shingle_slab',
	'create:waxed_copper_shingle_stairs',
	'create:waxed_exposed_copper_shingle_stairs',
	'create:waxed_weathered_copper_shingle_stairs',
	'create:waxed_exposed_copper_shingles',
	'create:waxed_copper_shingles',
	'create:oxidized_copper_shingle_stairs',
	'create:weathered_copper_shingle_stairs',
	'create:exposed_copper_shingle_stairs',
	'create:waxed_copper_tiles',
	'create:oxidized_copper_tile_stairs',
	'create:weathered_copper_tile_stairs',
	'create:exposed_copper_tile_stairs',
	'create:copper_tile_stairs',
	'create:waxed_oxidized_copper_tile_stairs',
	'create:waxed_weathered_copper_tile_stairs',
	'create:waxed_exposed_copper_tile_stairs',
	'create:waxed_copper_tile_stairs',
	'minecraft:waxed_weathered_cut_copper',
	'minecraft:waxed_weathered_copper',
	'minecraft:waxed_exposed_cut_copper_slab',
	'minecraft:waxed_exposed_cut_copper_stairs',
	'minecraft:waxed_exposed_cut_copper',
	'minecraft:waxed_exposed_copper',
	'minecraft:waxed_cut_copper_slab',
	'minecraft:waxed_cut_copper_stairs',
	'minecraft:weathered_cut_copper',
	'minecraft:weathered_cut_copper_stairs',
	'minecraft:exposed_cut_copper_slab',
	'minecraft:exposed_cut_copper_stairs',
	'minecraft:exposed_cut_copper',
	'minecraft:exposed_copper',
	'minecraft:cut_copper_slab',
	'minecraft:cut_copper_stairs',
	'minecraft:oxidized_cut_copper_slab',
	'minecraft:waxed_copper_block',
	'minecraft:waxed_cut_copper',
	'minecraft:waxed_weathered_cut_copper_slab',
	'minecraft:waxed_oxidized_copper',
	'minecraft:waxed_oxidized_cut_copper',
	'minecraft:waxed_oxidized_cut_copper_stairs',
	'minecraft:waxed_oxidized_cut_copper_slab',
	'create:waxed_exposed_copper_tile_slab',
	'create:waxed_weathered_copper_tile_slab',
	'create:waxed_oxidized_copper_tile_slab',
	'minecraft:waxed_weathered_cut_copper_stairs',
	'minecraft:cut_copper',
	'minecraft:copper_block',
	'minecraft:oxidized_cut_copper_stairs',
	'minecraft:oxidized_cut_copper',
	'minecraft:oxidized_copper',
	'minecraft:weathered_cut_copper_slab',
	'minecraft:weathered_copper',
	'architects_palette:copper_nub',
	'architects_palette:waxed_copper_nub',
	'architects_palette:exposed_copper_nub',
	'architects_palette:waxed_exposed_copper_nub',
	'architects_palette:weathered_copper_nub',
	'architects_palette:waxed_weathered_copper_nub',
	'architects_palette:oxidized_copper_nub',
	'architects_palette:waxed_oxidized_copper_nub'
]

BlockEvents.rightClicked(event => {

	if (event.item.hasTag("kubejs:hammers")) {
		
		if (event.block.id == "farmersdelight:cutting_board") {
			event.player.setStatusMessage(Text.of("This is no Axe?"))
		}

		let check = () => {
			if (event.block.hasTag("minecraft:logs") && !event.block.getItem().hasTag("forge:stripped_logs")) return true
			return false
		}

		if (check() || HAMMER.copper_blocks.includes(event.block.id)) {
			event.player.setStatusMessage(Text.red("Something went Wrong..."))
			event.cancel()
		}
	}
})