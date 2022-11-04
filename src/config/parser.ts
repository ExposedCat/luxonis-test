import { createParser, destroyParser, parsePage } from '../services/index.js'

// TODO: Add function to process parsed data
async function startParser() {
	const parser = await createParser()
	const apartments = await parsePage(parser)
	console.info(apartments)
	await destroyParser(parser)
}

export { startParser }
