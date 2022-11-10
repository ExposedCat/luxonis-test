import { Apartment, DatabaseClient, PreparedImageURLs } from '../types/index.js'

function tuple(count: number) {
	let result = ``
	for (let i = 0; i < count * 2; i += 2) {
		if (i !== 0) {
			result += ','
		}
		result += `($${i + 1},$${i + 2})`
	}
	return result
}

function conditionalEquality(count: number, field: string) {
	if (count === 0) {
		return `FALSE`
	}
	let result = ``
	for (let i = 0; i < count; ++i) {
		if (i !== 0) {
			result += ' OR '
		}
		result += `${field} = $${i + 1}`
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
	VALUES ${tuple(number)}`,

	getApartments: (table: string) => `
	SELECT *
	FROM ${table}
	OFFSET $1
	LIMIT $2`,

	getApartmentImages: (table: string, number: number) => `
	SELECT *
	FROM ${table}
	WHERE ${conditionalEquality(number, 'apartment_id')}`,

	flushApartments: (apartmentsTable: string, apartmentImages: string) => `
	TRUNCATE ${apartmentsTable}, ${apartmentImages}`
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

const getApartmentsQuery = (
	client: DatabaseClient,
	page: number,
	resultsPerPage: number
) => {
	const offset = (page - 1) * resultsPerPage
	return client.as.format(
		templates.getApartments(process.env.DB_APARTMENTS_TABLE),
		[offset, resultsPerPage]
	)
}

const getApartmentImagesQuery = (
	client: DatabaseClient,
	apartmentIds: number[]
) => {
	return client.as.format(
		templates.getApartmentImages(
			process.env.DB_APARTMENT_IMAGES_TABLE,
			apartmentIds.length
		),
		apartmentIds
	)
}
const flushApartmentsQuery = (client: DatabaseClient) => {
	return client.as.format(
		templates.flushApartments(
			process.env.DB_APARTMENTS_TABLE,
			process.env.DB_APARTMENT_IMAGES_TABLE
		)
	)
}

export {
	insertApartmentsQuery,
	insertApartmentImagesQuery,
	getApartmentsQuery,
	getApartmentImagesQuery,
	flushApartmentsQuery
}
