ItemEvents.modification(event => {

	let scale_colors = [
		"red",
		"green",
		"bronze",
		"gray",
		"blue",
		"white",
		"sapphire",
		"silver",
		"electric",
		"amythest",
		"copper",
		"black"
	].forEach(e => {
		event.modify("iceandfire:armor_"+e+"_helmet",helmet => {
			helmet.setArmorProtection(4)
		})
		event.modify("iceandfire:armor_"+e+"_chestplate",chestplaate => {
			chestplaate.setArmorProtection(9)
		})
		event.modify("iceandfire:armor_"+e+"_leggings",leggings => {
			leggings.setArmorProtection(7)
		})
		event.modify("iceandfire:armor_"+e+"_boots",boots => {
			boots.setArmorProtection(4)
		})
	})

	let tide_colors = [
		"blue",
		"bronze",
		"deepblue",
		"green",
		"purple",
		"red",
		"teal"
	].forEach(e => {
		event.modify("iceandfire:tide_"+e+"_chestplate",chestplaate => {
			chestplaate.setArmorProtection(9)
		})
	})

	let types = [
		"ice",
		"fire",
		"lightning"
	].forEach(e => {

		event.modify("iceandfire:dragonbone_sword_"+e,element_sword => {
			element_sword.setAttackDamage(7.5)
		})

		// --- Moved to PropertyModifer Mod Settings ---
		//
		//event.modify("iceandfire:dragonsteel_"+e+"_sword",steel_sword => {
		//	steel_sword.setAttackDamage(9)
		//})
		//event.modify("iceandfire:dragonsteel_"+e+"_axe",steel_axe => {
		//	steel_axe.setAttackDamage(11)
		//})
		//event.modify("iceandfire:dragonsteel_"+e+"_pickaxe",steel_pickaxe => {
		//	steel_pickaxe.setAttackDamage(7)
		//})
		//event.modify("iceandfire:dragonsteel_"+e+"_shovel",steel_shovel => {
		//	steel_shovel.setAttackDamage(7.5)
		//})
		//event.modify("iceandfire:dragonsteel_"+e+"_hoe",steel_hoe => {
		//	steel_hoe.setAttackSpeed(5)
		//	steel_hoe.setAttackDamage(1)
		//})

		// --- To Be Fixed Not Working! ---
		//
		//event.modify("iceandfire:dragonsteel_"+e+"_helmet",helmet => {
		//	helmet.setArmorProtection(5)
		//	helmet.setArmorKnockbackResistance(0.2)
		//})
		//event.modify("iceandfire:dragonsteel_"+e+"_chestplate",chestplaate => {
		//	chestplaate.setArmorProtection(10)
		//	chestplaate.setArmorKnockbackResistance(0.2)
		//})
		//event.modify("iceandfire:dragonsteel_"+e+"_leggings",leggings => {
		//	leggings.setArmorProtection(8)
		//	leggings.setArmorKnockbackResistance(0.2)
		//})
		//event.modify("iceandfire:dragonsteel_"+e+"_boots",boots => {
		//	boots.setArmorProtection(5)
		//	boots.setArmorKnockbackResistance(0.2)
		//})
	})

	event.modify("iceandfire:dragonbone_sword",item => {
		item.setAttackDamage(7)
	})

	event.modify("iceandfire:dragonbone_axe",item => {
		item.setAttackDamage(9)
	})

	event.modify("iceandfire:dragonbone_pickaxe",item => {
		item.setAttackDamage(5)
	})

	event.modify("iceandfire:dragonbone_shovel",item => {
		item.setAttackDamage(5.5)
	})

	event.modify("iceandfire:dragonbone_hoe",item => {
		item.setAttackSpeed(4)
		item.setAttackDamage(1)
	})

	event.modify("iceandfire:ghost_sword",item => {
		item.setAttackDamage(9)
	})

})
