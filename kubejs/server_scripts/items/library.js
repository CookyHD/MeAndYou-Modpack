let LIBRARY = {}

LIBRARY.books = [
	'ftbquests:book',
	'botania:lexicon',
	Item.of('patchouli:guide_book','{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}'),
	Item.of('patchouli:guide_book', '{"patchouli:book":"thermal:guidebook"}'),
	Item.of('patchouli:guide_book', '{"patchouli:book":"irons_spellbooks:iss_guide_book"}')
]


ItemEvents.rightClicked("kubejs:library", event => {

	if (event.hand == "MAIN_HAND") {
		event.item.count--
		event.server.scheduleInTicks(5,() => {
			LIBRARY.books.forEach(e => {
				event.player.give(e)
			})
		})
	}
})