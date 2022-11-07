import {
	Apartment,
	ApartmentIdObject,
	Database,
	DatabaseClient,
	PreparedImageURLs
} from '../types/index.js'
import { insertApartmentsQuery, insertApartmentImagesQuery } from './index.js'

async function saveApartments(
	database: Database,
	client: DatabaseClient,
	apartments: Apartment[]
) {
	let insertedIds: ApartmentIdObject[] = []
	try {
		const apartmentsQuery = insertApartmentsQuery(client, apartments)
		insertedIds = await database.query(apartmentsQuery)
	} catch (object) {
		const error = object as Error
		console.error(
			`DB | Error: Can't store apartments, because`,
			error.message
		)
		process.exit(1)
	}
	let images: PreparedImageURLs = []
	for (let i = 0; i < insertedIds.length; ++i) {
		for (const url of apartments[i].images) {
			images.push(insertedIds[i].apartment_id, url)
		}
	}
	try {
		const imagesQuery = insertApartmentImagesQuery(client, images)
		console.log(imagesQuery)
		await database.query(imagesQuery)
	} catch (object) {
		// TODO: Drop stored apartments (?)
		const error = object as Error
		console.error(
			`DB | Error: Can't store apartment images, because`,
			error.message
		)
		process.exit(2)
	}
}

function createApartmentsHandler(database: Database, client: DatabaseClient) {
	return (apartments: Apartment[]) =>
		saveApartments(database, client, apartments)
}

export { saveApartments, createApartmentsHandler }