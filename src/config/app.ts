import { startParser } from './index.js'
import { loadEnv, validateEnv } from '../helpers/index.js'

async function startApp() {
	try {
		loadEnv()
		validateEnv()
	} catch (error) {
		console.error(`Error occurred while loading environment:`, error)
		process.exit(1)
	}

	try {
		// TODO: Pass service to store parsed data
		await startParser()
	} catch (error) {
		console.error(`Error occurred while starting the parser:`, error)
		process.exit(2)
	}
}

function initApp() {
	return { runner: startApp }
}

export { initApp }
