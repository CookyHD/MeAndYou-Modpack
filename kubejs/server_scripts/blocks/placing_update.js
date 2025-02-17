//OVERALL //TODO: Revisit

const CASTER = 'kubejs:dragon_block'
const AMPLIFYER = 'kubejs:amplifyer_totem'

const MUTATION = 'kubejs:mutation_catalyst'
const SPARK = 'kubejs:spark_catalyst'

const POOLS_IDS = [
	'botania:mana_pool',
	'botania:creative_pool',
	'botania:diluted_pool',
	'botania:fabulous_pool'
]
const DILUTED_POOL = 'botania:diluted_pool'

function isPool(id) {
	let bool = false
	POOLS_IDS.forEach(e => {
		if (id == e) bool = true
	})
	return bool
}

function isTarget(event) {
	if (isPool(event.block.id) || event.block.id == MUTATION || event.block.id == SPARK) return true
	else return false
}

function totem_placed(event) {

	if (event.block.id == CASTER || event.block.id == AMPLIFYER) {

		let block = event.block
		let blockup = block.getUp()
		let blockdown = block.getDown()

		if (block.id == CASTER && blockdown.id == AMPLIFYER) {
			blockdown.set(blockdown.id,{enabled:true})
		}

		if (block.id == AMPLIFYER && blockup.id == CASTER) {
			block.set(block.id,{enabled:true})
		}

		if (block.id == AMPLIFYER && blockup.id != CASTER) {
			block.set(block.id,{enabled:false})
		}
	}
}

function totem_broken(event) {

	if (event.block.id == CASTER || event.block.id == AMPLIFYER) {

		let block = event.block
		//let blockup = block.getUp()
		let blockdown = block.getDown()

		if (block.id == CASTER && blockdown.id == AMPLIFYER) {
			blockdown.set(blockdown.id,{enabled:false})
		}
	}
}

function catalyst_placed(event,id) {

	if (isTarget(event)) {

		let block = event.block
		let blockup = block.getUp()
		let blockdown = block.getDown()

		if (isPool(block.id) && blockdown.id == id) {
			if (block.id == DILUTED_POOL) blockdown.set(blockdown.id,{level:'1'})
			else blockdown.set(blockdown.id,{level:'2'})
		}

		if (block.id == id && isPool(blockup.id)) {
			if (blockup.id == DILUTED_POOL) block.set(block.id,{level:'1'})
			else block.set(block.id,{level:'2'})
		}

		if (block.id == id && !isPool(blockup.id)) {
			block.set(block.id,{level:'0'})
		}
	}
}

function catalyst_broken(event,id) {

	if (isTarget(event)) {

		let block = event.block
		//let blockup = block.getUp()
		let blockdown = block.getDown()

		if (isPool(block.id) && blockdown.id == id) {
			blockdown.set(blockdown.id,{level:'0'})
		}
	}
}

BlockEvents.placed(event => {

	totem_placed(event)
	catalyst_placed(event,MUTATION)
	catalyst_placed(event,SPARK)
})

BlockEvents.broken(event => {

	totem_broken(event)
	catalyst_broken(event,MUTATION)
	catalyst_broken(event,SPARK)
})