import { Apartment, DatabaseHelpers } from '../types/index.js'

const templates = {
	insertApartmentTemplate: (helpers: DatabaseHelpers) =>
		new helpers.ColumnSet(['title', 'address'], {
			table: process.env.DB_APARTMENTS_TABLE
		})
}

const insertApartmentQuery = (
	helpers: DatabaseHelpers,
	apartments: Apartment[]
) => helpers.insert(apartments, templates.insertApartmentTemplate(helpers))

export { insertApartmentQuery }
