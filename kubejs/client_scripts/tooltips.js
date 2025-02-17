//TOOLTIPS

ItemEvents.tooltip(event => {

	event.addAdvanced('kubejs:dragon_block',(item, advanced, text) => {
		text.add(1,Text.green("Dancing Toothless <3"))
		text.add(2,"")
		if (event.shift) {
			text.add(3,Text.yellow("Right Click with Energised Meat to Cast."))
			text.add(4,Text.yellow("Transforms Certain Items in the Process."))
		} else {
			text.add(3,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:amplifyer_totem',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Put under Dragon Caster,"))
			text.add(2,Text.yellow("to Change Transform Outputs."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:key_wrench',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Right Click on Dragon Caster to mute the Song."))
			text.add(2,Text.yellow("Can be Used as Forge Wrench."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:farmer_axe',(item, advanced, text) => {
		text.add(1,Text.green("Cana_xd's Creator Item."))
		text.add(2,"")
		if (event.shift) {
			text.add(3,Text.yellow("Right Click on Entity to make it Spawn,"))
			text.add(4,Text.yellow("A Farm Animal on Death. Cost 1 Wheat."))
			text.add(5,Text.yellow("Cooldown for 5s after Use."))
		} else {
			text.add(3,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:redstone_sword',(item, advanced, text) => {
		text.add(1,Text.green("CookyHD's Creator Item."))
		text.add(2,"")
		if (event.shift) {
			text.add(3,Text.yellow("Right Click to Damage Entity's in a,"))
			text.add(4,Text.yellow("5 Block Radius. Cost 3 Redstone Dust."))
			text.add(5,Text.yellow("Cooldown for 3s after Use."))
		} else {
			text.add(3,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})


	event.addAdvanced('kubejs:needle_gun',(item, advanced, text) => {
		text.add(1,Text.blue(item.hasNBT() ? "Ammo: " + item.getNbt()["Ammo"] : "Ammo: undefined"))
	})

	event.addAdvanced('kubejs:jar_of_tears',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Big Healing Potion Alike,"))
			text.add(2,Text.yellow("Heal's 10 Hearts After 5s Use Time."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:beer',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("A mixture that enhances Brawling,"))
			text.add(2,Text.yellow("but causes Nausea."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:tech_sword',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Shatters into something new upon breaking."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced("kubejs:scattered_sword",(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Right Click To Shoot Sharpnell Around."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:xp_wand',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Right Click to Enchant Entity's in a,"))
			text.add(2,Text.yellow("5 Block Radius. Makes them drop Xp Nuggets on Death."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:copper_compass',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Right Click to Locate the Nearest,"))
			text.add(2,Text.yellow("Trial Chambers."))
		} else if (event.ctrl) {
			text.add(1,Text.red("Can give Multible Location,"))
			text.add(2,Text.red("tho all are Valid Locations."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info, or '), Text.red("Ctrl ").bold(true), Text.gray("for Warnings.")])
		}
	})

	event.addAdvanced('kubejs:ship_locator',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Right Click to Locate the Nearest,"))
			text.add(2,Text.yellow("Crashed Ship."))
		} else if (event.ctrl) {
			text.add(1,Text.red("Can give Multible Location,"))
			text.add(2,Text.red("tho all are Valid Locations."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info, or '), Text.red("Ctrl ").bold(true), Text.gray("for Warnings.")])
		}
	})

	event.addAdvanced('kubejs:library',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Right Click to Obtain all the Guide Books"))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})
	
	let tools = [
		"sword",
		"axe",
		"shovel",
		"hoe",
		"hammer",
		"pickaxe"
	].forEach(e => {
		event.addAdvanced('kubejs:star_'+e,(item, advanced, text) => {
			if (event.shift) {
				text.add(1,Text.yellow("Gain a Buff on Right Click."))
			} else {
				text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
			}
		})

		event.addAdvanced('kubejs:bread_'+e,(item, advanced, text) => {
			if (event.shift) {
				text.add(1,Text.yellow("Gain Hunger on Right Click,"))
				text.add(2,Text.yellow("causing immense damage to the tool."))
			} else {
				text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
			}
		})
	})

	let armors = [
		"chestplate",
		"helmet",
		"boots",
		"leggings"
	].forEach(e => {
		event.addAdvanced('kubejs:tech_'+e,(item, advanced, text) => {
			if (event.shift) {
				text.add(1,Text.yellow("Full set Bonus:"))
				text.add(2,Text.yellow("    Gain Strength."))
			} else {
				text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
			}
		})

		event.addAdvanced('kubejs:bloody_'+e,(item, advanced, text) => {
			if (event.shift) {
				text.add(1,Text.yellow("Full set Bonus:"))
				text.add(2,Text.yellow("    Constant Regenartion."))
				text.add(3,Text.yellow("    If Bellow 20% Heatlh Gain Strong Buffs."))
			} else {
				text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
			}
		})

		event.addAdvanced('kubejs:star_'+e,(item, advanced, text) => {
			if (event.shift) {
				text.add(1,Text.yellow("Full set Bonus:"))
				text.add(2,Text.yellow("    If Bellow 20% Heatlh Gain Strong Buffs."))
			} else {
				text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
			}
		})
	})

	event.addAdvanced("kubejs:galaxy_cookie",(item, advanced, text) => {
		if (global.getServerSetting == null) return
		if (global.getServerSetting("UnstableGalaxyCookie")) {
			text.add(1,Text.red("Do not eat! It could lead to severe consequences."))
		} else {
			text.add(1,Text.yellow("Nourishment at it Finest."))
			text.add(2,Text.darkGray("Stats are not as Shown!"))
		}
	})

	event.add('kubejs:dragon_food',"§eUsed For Dragon Casting.")

	global.NessieColors.forEach(element => {
		event.add("kubejs:nessie_"+element,"§c<3")
	})

	global.NessieColors.forEach(element => {
		event.add("kubejs:nessie_"+element+"_enchanted",["§eReforged","§c<3"])
	})

	event.add("kubejs:xp_converter_knw", "§7Experience -> Knowledge")

	event.add("kubejs:xp_converter_rel", "§7Knowledge -> Experience")
	
	event.add("quarryplus:book_mover", "§7Used for Putting Enchanted Books on Quarry's.")

	event.addAdvanced("thermal:device_tree_extractor",(item, advanced, text) => {
		if (event.ctrl) {
			text.add(1,Text.red("Mahogany isn't fully functional yet. However,"))
			text.add(2,Text.red("placing logs can help make it work."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.red("Ctrl ").bold(true), Text.gray("for Warnings.")])
		}
	})

	let types = [
		"ice",
		"fire",
		"lightning"
	].forEach(element => {
		let items = [
			"helmet",
			"chestplate",
			"leggings",
			"boots"
		].forEach(item => {
			event.addAdvanced("iceandfire:dragonsteel_"+element+"_"+item,(item, advanced, text) => {
				if (event.ctrl) {
					text.add(2,Text.red("Armor stats are subject to change."))
				} else {
					text.add(2,[Text.gray('Hold '), Text.red("Ctrl ").bold(true), Text.gray("for Warnings.")])
				}
			})
		})
	})

	function ore(name,min,max) {
		event.add(name,"§7Y level §6"+min+"§7 to §6"+max)
	}

	function oreSpace(namespace,name,min,max) {
		ore(namespace+':'+name,min,max)
		ore(namespace+':'+'deepslate_'+name,min,max)
	}


	oreSpace('minecraft','coal_ore',0,256,4)
	oreSpace('minecraft','copper_ore',-16,112)
	oreSpace('minecraft','iron_ore',-64,256)
	oreSpace('minecraft','gold_ore',-64,32)
	oreSpace('minecraft','diamond_ore',-64,16)
	oreSpace('minecraft','emerald_ore',-16,256)
	oreSpace('minecraft','redstone_ore',-64,16)
	oreSpace('minecraft','lapis_ore',-64,64)

	ore('minecraft:nether_quartz_ore',10,117)
	ore('minecraft:nether_gold_ore',10,117)
	ore('minecraft:ancient_debris',8,119)

	oreSpace('biggerreactors','uranium_ore',-64,48)
	oreSpace('create','zinc_ore',-63,70)

	ore('aether:ambrosium_ore',0,128)
	ore('aether:zanite_ore',0,75)
	ore('aether:gravitite_ore',-58,74)

	ore("thermal",'tin_ore',-40,60)
	ore("thermal",'lead_ore',-60,40)
	ore("thermal",'lead_ore',-60,40)
	ore("thermal",'ruby_ore',-16,48)
	ore("thermal",'sapphire_ore',-48,16)
	ore("thermal",'silver_ore',-60,40)
	ore("thermal",'nickel_ore',-40,120)
	ore("thermal",'sulfur_ore',-16,32)
	ore("thermal",'niter_ore',-16,64)
	ore("thermal",'cinnabar_ore',-16,48)
	ore("thermal",'apatite_ore',-16,96)

	event.add('thermal:oil_sand','§7Spawns in §6Desert')
	event.add('thermal:oil_red_sand','§7Spawns in §6Desert')

})