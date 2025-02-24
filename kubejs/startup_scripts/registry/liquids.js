//LIQUID

StartupEvents.registry("fluid",event => {

	let bloody_tear = event.create('bloody_tear_fluid')
	bloody_tear.noBlock()
	bloody_tear.thickTexture(0xf04f78)
	bloody_tear.displayName('Bloody Tear Fluid')
	bloody_tear.bucketItem.displayName('Bucket of Bloody Tears')
	//bloody_tear.tag('minecarft:water')

	//let bloody_tear_attr = bloody_tear.createAttributes()
	//bloody_tear_attr.dropOff(2)
	//bloody_tear_attr.tickDelay(10)


	let bread = event.create('fluid_bread')
	bread.noBlock()
	bread.thinTexture(0xd4a144)
	bread.displayName('Fluid Bread')
	bread.bucketItem.displayName('Bucket of Fluid Bread')
	bread.luminosity(8)
	//bread.tag('minecarft:lava')

	//let bread_attr = bread.createAttributes()
	//bread_attr.dropOff(2)
	//bread_attr.tickDelay(30)


	let heavy = event.create('heavy_fluid')
	heavy.noBlock()
	heavy.thinTexture(0x4d9be6)
	heavy.displayName('Heavy Fluid')
	heavy.bucketItem.displayName('Bucket of Heavy Fluid')
	heavy.luminosity(15)
	//heavy.tag('minecarft:lava')

	//let heavy_attr = heavy.createAttributes()
	//heavy_attr.dropOff(3)
	//heavy_attr.tickDelay(30)

})

//BlockEvents.modification(event => {
//	event.modify('kubejs:bloody_tear_fluid', block => {
//		block.speedFactor = 0.8
//	})
//	event.modify('kubejs:fluid_bread', block => {
//		block.lightEmission = 8
//		block.speedFactor = 0.8
//	})
//	event.modify('kubejs:heavy_fluid', block => {
//		block.lightEmission = 15
//		block.speedFactor = 0.6
//	})
//})