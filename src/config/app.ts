import { Database, DatabaseClient } from '../types/index.js'
import { Server } from 'http'
import { loadEnv, validateEnv } from '../helpers/index.js'
import { connectToDatabase } from './index.js'
import { initServer } from './server.js'

async function startApp() {
	try {
		loadEnv()
		validateEnv()
	} catch (error) {
		console.error(`Error occurred while loading environment:`, error)
		process.exit(1)
	}

	let databaseClient: DatabaseClient
	let database: Database
	try {
		const connectedDb = await connectToDatabase()
		database = connectedDb.database
		databaseClient = connectedDb.client
	} catch (error) {
		console.error(`Error occurred while connecting to the database:`, error)
		process.exit(2)
	}

	// FIXME: Add session secret to the ENV
	const { runServer } = initServer('abc', databaseClient, database)
	let serverConnection: Server
	try {
		serverConnection = runServer(process.env.APP_PORT)
	} catch (error) {
		console.error(`Error occurred while starting the server:`, error)
		process.exit(3)
	}

	return stopApp.bind(null, serverConnection)
}

async function stopApp(server: Server) {
	server.close()
}

function initApp() {
	return { runner: startApp }
}

export { initApp }
