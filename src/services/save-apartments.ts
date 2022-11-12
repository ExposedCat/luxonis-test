import { downloadFile } from '../helpers/download-file.js'
import { resolvePath } from '../helpers/resolve-path.js'
import {
	Apartment,
	ApartmentIdObject,
	Database,
	DatabaseClient,
	PreparedImageURLs
} from '../types/index.js'
import { insertApartmentsQuery, insertApartmentImagesQuery } from './index.js'

function parseImageName(url: string) {
	return url.split('/')[5]?.split('?')?.[0] || 'unnamed.jpeg'
}

async function saveApartments(
	database: Database,
	client: DatabaseClient,
	apartments: Apartment[],
	imagesPath: string
) {
	let insertedIds: ApartmentIdObject[] = []
	try {
		const apartmentsQuery = insertApartmentsQuery(client, apartments)
		insertedIds = await database.query(apartmentsQuery)
	} catch (object) {
		const error = object as Error
		throw {
			message: `DB | Error: Can't store apartments`,
			description: error.message
		}
	}
	let images: PreparedImageURLs = []
	for (let i = 0; i < insertedIds.length; ++i) {
		for (const url of apartments[i].images) {
			const name = parseImageName(url)
			try {
				await downloadFile(url, imagesPath, name)
			} catch (object) {
				const error = object as Error
				throw {
					// TODO: Move errors to separate file (?)
					message: `DB | Error: Can't store apartment images`,
					description: error.message
				}
			}
			images.push(insertedIds[i].apartment_id, name)
		}
	}
	try {
		const imagesQuery = insertApartmentImagesQuery(client, images)
		await database.query(imagesQuery)
	} catch (object) {
		// TODO: Drop stored apartments (?)
		const error = object as Error
		throw {
			message: `DB | Error: Can't store apartment images`,
			description: error.message
		}
	}
}

function createApartmentsHandler(
	database: Database,
	client: DatabaseClient,
	imagesPath: string
) {
	return (apartments: Apartment[]) =>
		saveApartments(database, client, apartments, imagesPath)
}

export { saveApartments, createApartmentsHandler }
