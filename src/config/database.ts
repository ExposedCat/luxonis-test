import { Database } from '../types'
import pgPromise from 'pg-promise'

async function connectToDatabase() {
	const postgres = pgPromise({})
	const database: Database = postgres({
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD
	})
	return { database, helpers: postgres.helpers }
}

export { connectToDatabase }
