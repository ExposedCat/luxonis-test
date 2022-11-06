import { IDatabase } from 'pg-promise'

type Database = IDatabase<{}>

interface DbImageURL {
	apartment_id: number
	url: string
}

interface ImageURL {
	apartmentId: number
	url: string
}

interface DbApartment {
	apartment_id: number
	title: string
	address: string
}

interface Apartment {
	title: string
	address: string
	images: string[]
}

export { Database, DbImageURL, ImageURL, DbApartment, Apartment }
