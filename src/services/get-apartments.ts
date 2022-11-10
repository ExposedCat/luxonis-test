import {
	ApartmentImageObject,
	ApartmentObject,
	Database,
	DatabaseClient
} from '../types/index.js'
import { getApartmentImagesQuery, getApartmentsQuery } from './index.js'

async function getApartments(
	database: Database,
	client: DatabaseClient,
	page: number,
	resultsPerPage: number
) {
	try {
		let apartments: {
			[key: string]: ApartmentObject & { images?: string[] }
		} = {}
		const apartmentsQuery = getApartmentsQuery(client, page, resultsPerPage)
		const apartmentsData = await database.query<ApartmentObject[]>(
			apartmentsQuery
		)
		for (const apartment of apartmentsData) {
			apartments[apartment.apartment_id] = apartment
			apartments[apartment.apartment_id].images = []
		}
		const apartmentIds = apartmentsData.map(data => data.apartment_id)
		const apartmentImagesQuery = getApartmentImagesQuery(
			client,
			apartmentIds
		)
		const apartmentsImages = await database.query<ApartmentImageObject[]>(
			apartmentImagesQuery
		)
		for (const image of apartmentsImages) {
			apartments[image.apartment_id].images?.push(image.url)
		}
		return Object.values(apartments)
	} catch (object) {
		const error = object as Error
		throw {
			message: `DB | Error: Can't get apartment images`,
			description: error.message
		}
	}
}

export { getApartments }
