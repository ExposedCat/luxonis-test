import { Database, DatabaseClient } from '../types/index.js'
import { flushApartmentsQuery } from './index.js'

async function flushApartments(
	databaseClient: DatabaseClient,
	database: Database
) {
	try {
		const query = flushApartmentsQuery(databaseClient)
		await database.query(query)
	} catch (object) {
		const error = object as Error
		throw {
			message: `DB | Error: Can't flush apartments`,
			description: error.message
		}
	}
	// TODO: Flush images
}

export { flushApartments }
