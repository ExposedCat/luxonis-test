import { Apartment, DatabaseClient, PreparedImageURLs } from '../types/index.js'

function tuple(count: number) {
	console.log(count)
	let result = ``
	for (let i = 0; i < count * 2; i += 2) {
		if (i !== 0) {
			result += ','
		}
		result += `($${i + 1},$${i + 2})`
	}
	return result
}

const templates = {
	insertApartments: (table: string, number: number) => `
	INSERT INTO ${table} ("title", "address")
	VALUES ${tuple(number)}
	RETURNING apartment_id`,

	insertApartmentImages: (table: string, number: number) => `
	INSERT INTO ${table} ("apartment_id", "url")
	VALUES ${tuple(number)}`
}

const insertApartmentsQuery = (
	client: DatabaseClient,
	apartments: Apartment[]
) => {
	const data = apartments.flatMap(apartment => [
		apartment.title,
		apartment.address
	])
	return client.as.format(
		templates.insertApartments(
			process.env.DB_APARTMENTS_TABLE,
			apartments.length
		),
		data
	)
}

const insertApartmentImagesQuery = (
	client: DatabaseClient,
	images: PreparedImageURLs
) =>
	client.as.format(
		templates.insertApartmentImages(
			process.env.DB_APARTMENT_IMAGES_TABLE,
			images.length / 2
		),
		images
	)

export { insertApartmentsQuery, insertApartmentImagesQuery }
