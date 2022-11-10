import { IDatabase } from 'pg-promise'

type Database = IDatabase<{}>

interface Apartment {
	title: string
	address: string
	images: string[]
}

type ApartmentId = number

// Image URL object for insertion
// Structure: [apartment_id, url]
type PreparedImageURLs = Array<number | string>

interface ApartmentIdObject {
	apartment_id: ApartmentId
}

interface ApartmentObject extends ApartmentIdObject {
	title: string
	address: string
}

interface ApartmentImageObject {
	apartment_id: ApartmentId
	url: string
}

export {
	Database,
	PreparedImageURLs,
	Apartment,
	ApartmentIdObject,
	ApartmentObject,
	ApartmentImageObject
}
