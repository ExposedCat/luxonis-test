import { Apartment, Database, DatabaseHelpers } from '../types/index.js'
import { insertApartmentQuery } from './index.js'

async function saveApartments(
	database: Database,
	helpers: DatabaseHelpers,
	apartments: Apartment[]
) {
	try {
		const query = insertApartmentQuery(helpers, apartments)
		await database.none(query)
	} catch (object) {
		const error = object as Error
		console.error(
			`DB | Error: Can't store apartments, because`,
			error.message
		)
		process.exit(1)
	}
}

function createApartmentsHandler(database: Database, helpers: DatabaseHelpers) {
	return (apartments: Apartment[]) =>
		saveApartments(database, helpers, apartments)
}

export { saveApartments, createApartmentsHandler }
