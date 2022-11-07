import { IDatabase } from 'pg-promise'

type Database = IDatabase<{}>

interface Apartment {
	title: string
	address: string
	images: string[]
}

// Image URL object for insertion
// Structure: [apartment_id, url]
type PreparedImageURLs = Array<number | string>

interface ApartmentIdObject {
	apartment_id: number
}

export { Database, PreparedImageURLs, Apartment, ApartmentIdObject }
