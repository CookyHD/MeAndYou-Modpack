//EntityEvents.hurt(event => {
//	if (event.source.getType() == "player") {
//		claw_item_consume(event.level,event.source.player)
//	}
//})
//
//BlockEvents.placed(event => {
//	claw_item_consume(event.level,event.player)
//})
//
//BlockEvents.broken(event => {
//	claw_item_consume(event.level,event.player)
//})
//
///**
// * @param {Internal.Level} level
// * @param {Internal.Player} player
// */
//function claw_item_consume(level,player) {
//	if (player.getOffHandItem().id == "kubejs:crab_claw") {
//		global.itemDamageAndBreak(level,player,1)
//		return
//	}
//	if (player.getMainHandItem().id == "kubejs:crab_claw") {
//		global.itemDamageAndBreak(level,player,1)
//		return
//	}
//}