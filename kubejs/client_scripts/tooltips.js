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
			text.add(3,Text.yellow("Right Click to,"))
			text.add(4,Text.yellow("Enchant Entity's in a 4 Block Radius."))
			text.add(5,Text.yellow("Entity's Transfrom to random Farm Animal on Death."))
			text.add(6," ")
			text.add(7,Text.of("§9Cooldown: §75s"))
			text.add(8,Text.of("§9Cost: §73 Wheat"))
		} else {
			text.add(3,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:anchor_pickaxe',(item, advanced, text) => {
		text.add(1,Text.green("Miminator's Creator Item."))
		text.add(2,"")
		if (event.shift) {
			text.add(3,Text.yellow("Right Click to,"))
			text.add(4,Text.yellow("Slow and Throw Entity's in a 6 Block Radius."))
			text.add(5," ")
			text.add(6,Text.of("§9Cooldown: §715s"))
			text.add(7,Text.of("§9Cost: §73 Lapis Lazuli"))
		} else {
			text.add(3,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:redstone_sword',(item, advanced, text) => {
		text.add(1,Text.green("CookyHD's Creator Item."))
		text.add(2,"")
		if (event.shift) {
			text.add(3,Text.yellow("Right Click to,"))
			text.add(4,Text.yellow("Damage Entity's in a 4 Block Radius and Shoot a Strong Laser."))
			text.add(5,Text.yellow("Slows down the User for 2,5s."))
			text.add(6," ")
			text.add(7,Text.of("§9Cooldown: §75s"))
			text.add(8,Text.of("§9Cost: §73 Redstone Dust"))
		} else {
			text.add(3,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})


	event.addAdvanced('kubejs:needle_gun',(item, advanced, text) => {
		text.add(1,Text.blue(item.hasNBT() ? "Ammo: " + item.getNbt()["Ammo"] : "Ammo: undefined"))
	})

	event.addAdvanced('kubejs:mixture_tank_filled',(item, advanced, text) => {
		text.add(1,Text.of(item.hasNBT() ? "§7Air Mixture: §8" + item.getNbt()["Uses"] + "/1000": "§7Air Mixture: §8undefined"))
	})

	event.add('kubejs:mixture_tank_empty',Text.of("§7Air Mixture: §80/1000"))
	
	event.addAdvanced('kubejs:needle_gun_forged',(item, advanced, text) => {
		text.add(1,Text.red("Reforged"))
		text.add(1,Text.blue(item.hasNBT() ? "Ammo: " + item.getNbt()["Ammo"]: "Ammo: undefined"))
	})

	event.add("kubejs:space_upgrade",[
		"§7Ancient Space Suit Upgrade",
		" ",
		"§7Applies to:",
		" §9Techit Equipment",
		"§7Ingredients:",
		" §9Insulated Ingot"
	])


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
			text.add(1,Text.yellow("Right Click to,"))
			text.add(2,Text.yellow("Enchant Entity's in a 6 Block Radius."))
			text.add(3,Text.yellow("Makes them drop Xp Nuggets on Death."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})

	event.addAdvanced('kubejs:fire_wand',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Right Click While,"))
			text.add(2,Text.yellow("Riding a Happy Ghast to,"))
			text.add(3,Text.yellow("Let the Ghast shoot a Fire Ball."))
			text.add(4,Text.gray("Tip: Aim a Little Higher."))
			text.add(5,Text.yellow("Right Click in Air to,"))
			text.add(6,Text.yellow("Pull any Happy Ghast to You."))
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

		event.addAdvanced('kubejs:space_'+e,(item, advanced, text) => {
			if (event.shift) {
				text.add(1,Text.yellow("Full set Bonus:"))
				text.add(2,Text.yellow("    Intense Heat/Freeze Resitance."))
				text.add(3,Text.red("    Needs Air Mixture Tank for,"))
				text.add(4,Text.red("    Underwater/lava Oprations!"))
			} else {
				text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
			}
		})
	})

	event.add("kubejs:galaxy_cookie",Text.yellow("Nourishment at it Finest."))

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
					text.add(2,Text.red("Stats Not Finalised."))
				} else {
					text.add(2,[Text.gray('Hold '), Text.red("Ctrl ").bold(true), Text.gray("for Warnings.")])
				}
			})
		})
	})

	event.add("kubejs:cobalt_ingot", "§7Strong Tetra Material.")

	event.add("kubejs:manyullyn_ingot", "§7Even Stronger Tetra Material.")

	Ingredient.of("#kubejs:heated").itemIds.forEach(e => {
		event.add(e,"§cHeated")
	})

	Ingredient.of("#kubejs:radioactive").itemIds.forEach(e => {
		event.add(e,"§aRadioactive")
	})

	let departed = [
		'decorative_blocks:warped_palisade',
		'everycomp:db/biomesoplenty/fir_palisade',
		'everycomp:db/biomesoplenty/pine_palisade',
		'everycomp:db/biomesoplenty/willow_palisade',
		'everycomp:db/botania/dreamwood_palisade',
		'decorative_blocks:acacia_palisade',
		'everycomp:db/biomesoplenty/hellbark_palisade',
		'decorative_blocks:dark_oak_palisade',
		'decorative_blocks:crimson_palisade',
		'decorative_blocks:brazier',
		'decorative_blocks:birch_palisade',
		'decorative_blocks:cherry_palisade',
		'everycomp:db/biomesoplenty/jacaranda_palisade',
		'decorative_blocks:bamboo_palisade',
		'decorative_blocks:mangrove_palisade',
		'everycomp:db/botania/livingwood_palisade',
		'everycomp:db/biomesoplenty/jacaranda_beam',
		'everycomp:db/biomesoplenty/mahogany_beam',
		'everycomp:db/biomesoplenty/redwood_beam',
		'everycomp:db/biomesoplenty/maple_beam',
		'everycomp:db/biomesoplenty/pine_beam',
		'decorative_blocks:soul_brazier',
		'everycomp:db/biomesoplenty/magic_palisade',
		'everycomp:db/biomesoplenty/umbran_palisade', 
		'everycomp:db/biomesoplenty/mahogany_palisade',
		'everycomp:db/biomesoplenty/maple_palisade',
		'decorative_blocks:spruce_palisade',
		'everycomp:db/biomesoplenty/dead_palisade', 
		'everycomp:db/biomesoplenty/empyreal_palisade',
		'everycomp:db/aether/skyroot_palisade',
		'everycomp:db/architects_palette/twisted_palisade',
		'everycomp:db/biomesoplenty/redwood_palisade',
		'everycomp:db/biomesoplenty/palm_palisade',
		'everycomp:db/thermal/rubberwood_palisade',
		'decorative_blocks:jungle_palisade',
		'decorative_blocks:oak_palisade',
		'everycomp:db/thermal/rubberwood_beam',
		'everycomp:db/biomesoplenty/empyreal_beam',
		'everycomp:db/biomesoplenty/hellbark_beam',
		'everycomp:db/biomesoplenty/umbran_beam',
		'everycomp:db/biomesoplenty/magic_beam',
		'decorative_blocks:crimson_beam',
		'decorative_blocks:warped_beam',
		'everycomp:db/botania/dreamwood_beam',
		'everycomp:db/biomesoplenty/fir_beam',
		'everycomp:db/biomesoplenty/palm_beam',
		'everycomp:db/aether/skyroot_beam',
		'everycomp:db/botania/livingwood_beam',
		'decorative_blocks:acacia_beam',
		'decorative_blocks:mangrove_beam',
		'decorative_blocks:cherry_beam',
		'decorative_blocks:oak_beam',
		'decorative_blocks:birch_beam',
		'decorative_blocks:spruce_beam',
		'decorative_blocks:jungle_beam',
		'decorative_blocks:dark_oak_beam',
		'everycomp:db/biomesoplenty/willow_beam',
		'everycomp:db/biomesoplenty/dead_beam',
		'everycomp:db/architects_palette/twisted_beam'
	].forEach(e => {
		event.addAdvanced(e,(item, advanced, text) => {
			if (event.ctrl) {
				text.add(1,Text.red("Departed."))
			} else {
				text.add(1,[Text.gray('Hold '), Text.red("Ctrl ").bold(true), Text.gray("for Warnings.")])
			}
		})
	})

	event.add("crabbersdelight:crab_claw",[" ",Text.gray("When in Hand:"),Text.blue("+2 Block Reach"),Text.blue("+2 Entity Reach")])

	event.add("kubejs:pizza",Text.gray("Slice it before Eating!"))
	event.add("kubejs:pizza_box",Text.gray("Receive 4x Pizza Slices upon opening!"))

	event.addAdvanced("aether:gravitite_ore",(item, advanced, text) => {
		text.add(1,"§7Y level §6-58§7 to §674")
		if (event.ctrl) {
			text.add(2,Text.red("Floating Texture Broken."))
		} else {
			text.add(2,[Text.gray('Hold '), Text.red("Ctrl ").bold(true), Text.gray("for Warnings.")])
		}
	})

	event.add("kubejs:brick_weapon",["§7Sneak to throw four at once","§7Creating a Cluster Bomb","§7Also Offhand Items effect Results"])

	function ore(name,min,max,extra) {
		let text = ["§7Y level §6"+min+"§7 to §6"+max]
		if (extra) {
			text.push(extra)
		}
		event.add(name,text)
	}

	function oreSpace(namespace,name,min,max,extra) {
		ore(namespace+':'+name,min,max,extra)
		ore(namespace+':'+'deepslate_'+name,min,max,extra)
	}

	oreSpace('minecraft','coal_ore',0,256,"§7No §8Glow")
	oreSpace('minecraft','copper_ore',-16,112)
	oreSpace('minecraft','iron_ore',-64,256)
	oreSpace('minecraft','gold_ore',-64,32)
	oreSpace('minecraft','diamond_ore',-64,16)
	oreSpace('minecraft','emerald_ore',-16,256)
	oreSpace('minecraft','redstone_ore',-64,16)
	oreSpace('minecraft','lapis_ore',-64,64)

	ore('minecraft:nether_quartz_ore',10,245)
	ore('minecraft:nether_gold_ore',10,245)
	ore('minecraft:ancient_debris',8,24,"§7No §8Glow")

	oreSpace('biggerreactors','uranium_ore',-64,48)
	oreSpace('create','zinc_ore',-63,70)

	ore('aether:ambrosium_ore',0,128)
	ore('aether:zanite_ore',0,75)
	//ore('aether:gravitite_ore',-58,74)

	oreSpace("thermal",'tin_ore',-40,60)
	oreSpace("thermal",'lead_ore',-60,40)
	oreSpace("thermal",'ruby_ore',-16,48)
	oreSpace("thermal",'sapphire_ore',-48,16)
	oreSpace("thermal",'silver_ore',-60,40)
	oreSpace("thermal",'nickel_ore',-40,120)
	oreSpace("thermal",'sulfur_ore',-16,32)
	oreSpace("thermal",'niter_ore',-16,64)
	oreSpace("thermal",'cinnabar_ore',-16,48)
	oreSpace("thermal",'apatite_ore',-16,96)

	event.add('thermal:oil_sand',['§7Spawns in §6Desert',"§7No §8Glow"])
	event.add('thermal:oil_red_sand',['§7Spawns in §6Desert',"§7No §8Glow"])

	ore("thermal:sulfur_ore_netherrack",10,245)

	ore('kubejs:nether_uranium_ore',10,245)
	ore('kubejs:nether_cobalt_ore',10,245)

})