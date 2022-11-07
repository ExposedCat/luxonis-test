import { Apartment } from '../types/index.js'
import { createParser, parsePage } from '../services/index.js'

async function startParser(
	callback: (apartments: Apartment[]) => Promise<void> | void
) {
	const parser = await createParser()
	const apartments = await parsePage(parser)
	await callback(apartments)
	return parser
}

export { startParser }
