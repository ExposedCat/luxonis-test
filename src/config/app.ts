import { Database, DatabaseHelpers, Parser } from '../types/index.js'
import { loadEnv, validateEnv } from '../helpers/index.js'
import { connectToDatabase, startParser } from './index.js'
import { createApartmentsHandler, destroyParser } from '../services/index.js'

async function startApp() {
	try {
		loadEnv()
		validateEnv()
	} catch (error) {
		console.error(`Error occurred while loading environment:`, error)
		process.exit(1)
	}

	let helpers: DatabaseHelpers
	let database: Database
	try {
		const connectedDb = await connectToDatabase()
		database = connectedDb.database
		helpers = connectedDb.helpers
	} catch (error) {
		console.error(`Error occurred while connecting to the database:`, error)
		process.exit(2)
	}

	let parser: Parser
	try {
		parser = await startParser(createApartmentsHandler(database, helpers))
	} catch (error) {
		console.error(`Error occurred while starting the parser:`, error)
		process.exit(3)
	}

	return stopApp.bind(null, parser)
}

async function stopApp(parser: Parser) {
	await destroyParser(parser)
}

function initApp() {
	return { runner: startApp }
}

export { initApp }
