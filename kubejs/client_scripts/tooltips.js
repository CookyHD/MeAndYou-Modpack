//TOOLTIPS

ItemEvents.tooltip(event => {

	event.addAdvanced('kubejs:dragon_block',(item, advanced, text) => {
		text.add(1,Text.green("Dancing Toothless <3"))
		if (event.shift) {
			text.add(2,Text.yellow("Right Click with Energised Meat to Cast."))
			text.add(3,Text.yellow("Transforms Certain Items in the Process."))
		} else {
			text.add(2,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
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

	event.addAdvanced('kubejs:star_pickaxe',(item, advanced, text) => {
		if (event.shift) {
			text.add(1,Text.yellow("Right Click on Bedrock to obtain it,"))
			text.add(2,Text.yellow("Cost Big Amount of Durability."))
			text.add(3,Text.yellow("Cooldown for 5s after Use."))
		} else {
			text.add(1,[Text.gray('Hold '), Text.yellow('Shift ').bold(true), Text.gray('for more info.')])
		}
	})
	
	event.add('kubejs:dragon_food',"§eUsed For Dragon Casting.")

	event.add('kubejs:galaxy_cookie',"§eCant be eaten.")
	
	event.add('botania:spawner_mover',"§c§lUNOPTAINABLE!")

	let heart = [
		'kubejs:nessie_green',
		'kubejs:nessie_blue',
		'kubejs:nessie_red',
		'kubejs:nessie_pink'
	].forEach(element => {
		event.add(element,"§c<3")
	})

	let wip = [
		'kubejs:amplifyer_totem',
		'kubejs:redstone_sword',
		'kubejs:farmer_axe'
	].forEach(element => {
		event.add(element,"§c§lWIP!")
	})

	let ctmwip = [
		'thermal:enderium_glass',
		'thermal:lumium_glass',
		'thermal:obsidian_glass',
		'thermal:signalum_glass',
		'minecraft:bookshelf',
		'minecraft:sandstone',
		'minecraft:red_sandstone'
	].forEach(element => {
		event.add(element,"§c§lCTM WIP!")
	})

	//ORES SECTION

	let setOre = (id,min,max,rate,peak,exposure,note) => {
		let spawn = ['Very Low','Low','Normal','High','Very High']
		let info = []
		if(min || max) info.push(`§7§oLevel: ${max} to ${min}`)
		if (exposure > 0) info.push(`§7§oExposure: ${exposure}`)
		if (peak) {
			let value
			if (typeof peak == "object") value = `${peak[0]} or ${peak[1]}`
			else value = peak
			info.push(`§7§oPeak: ${value}`)
		}
		if (rate) info.push(`§7§oRate: ${spawn[rate-1]}`)
		if (note) info.push(`§7§o*${note}`)
		event.add(id,info)
	}

	let setWorldOre = (namespace,name,min,max,rate,peak,exposure,note) => {
		setOre(namespace+':'+name,min,max,rate,peak,exposure,note)
		setOre(namespace+':'+'deepslate_'+name,min,max,rate,peak,exposure,note)
	}

	let setHellOre = (id,min,max,rate,peak,exposure) => {
		setOre(id,max,min,rate,peak,exposure,'Found in Nether')
	}

	let setHeavenOre = (id,min,max,rate,peak,exposure) => {
		setOre(id,max,min,rate,peak,exposure,'Found in Aether')
	}

	let setThermalOre = (name,min,max,rate,exposure,note) => {
		let calc = (min + max) / 2
		setWorldOre('thermal',name,min,max,rate,calc,exposure,note)
	}

	setWorldOre('minecraft','coal_ore',0,256,4,[96,45],0.25)
	setWorldOre('minecraft','copper_ore',-16,112,4,43)
	setWorldOre('minecraft','iron_ore',-64,256,3,[232,14])
	setWorldOre('minecraft','gold_ore',-64,32,2,-18)
	setWorldOre('minecraft','diamond_ore',-64,16,1,-59,0.5)
	setWorldOre('minecraft','emerald_ore',-16,256,3,85,null,'Only Mountain')
	setWorldOre('minecraft','redstone_ore',-64,16,2,-59)
	setWorldOre('minecraft','lapis_ore',-64,64,2,-2,0.75)

	setHellOre('minecraft:nether_quartz_ore',10,117,4)
	setHellOre('minecraft:nether_gold_ore',10,117,3)
	setHellOre('minecraft:ancient_debris',8,119,1,16,1)

	setWorldOre('biggerreactors','uranium_ore',-64,48,4,-8)
	setWorldOre('create','zinc_ore',-63,70,2)

	setHeavenOre('aether:ambrosium_ore',0,128,3)
	setHeavenOre('aether:zanite_ore',0,75,2)
	setHeavenOre('aether:gravitite_ore',-58,74,1,'Lowest Blocks')

	setThermalOre('tin_ore',-40,60,3)
	setThermalOre('lead_ore',-60,40,2)
	setThermalOre('silver_ore',-60,40,1)
	setThermalOre('nickel_ore',-40,120,2)
	setThermalOre('sulfur_ore',-16,32,2)
	setThermalOre('niter_ore',-16,64,2)
	setThermalOre('cinnabar_ore',-16,48,3)
	setThermalOre('apatite_ore',-16,96,4)

	setOre('thermal:oil_sand',null,null,4,null,null,'to Find in Desert Biomes')
	setOre('thermal:oil_red_sand',null,null,4,null,null,'to Find in Desert Biomes')

	setWorldOre('thermal','ruby_ore',null,null,null,null,null,'ERROR: not found')
	setWorldOre('thermal','sapphire_ore',null,null,null,null,null,'ERROR: not found')

})