
const obtain = [
	['kubejs:charged_cookie','Super Cookie'],
	['kubejs:enriched_nugget', 'Chicken Nugget'],
	['kubejs:nessie_green', 'Colored Gem', true],
	['kubejs:nessie_blue', 'Colored Gem', true],
	['kubejs:nessie_red', 'Colored Gem', true],
	['kubejs:nessie_pink', 'Colored Gem', true]
]

const make = [
	['kubejs:super_cookie','Charged Cookie'],
	['kubejs:nugget', 'Enriched Chicken Nugget'],
	['kubejs:gem_green', 'Nessie', true],
	['kubejs:gem_blue', 'Nessie', true],
	['kubejs:gem_red', 'Nessie', true],
	['kubejs:gem_pink', 'Nessie', true]
]

JEIEvents.information( event => {

	obtain.forEach( e => {
		if (e[2] == true) event.addItem(e[0],["Obtained by Using "+ e[1] +" in an Amplified Dragon Cast."])
		else event.addItem(e[0],["Obtained by Using "+ e[1] +" in a Dragon Cast."])
	})

	make.forEach( e => {
		if (e[2] == true) event.addItem(e[0],["Can be Used to Make "+ e[1] +" in an Amplified Dragon Cast."])
		else event.addItem(e[0],["Can be Used to Make "+ e[1] +" in a Dragon Cast."])
	})
})