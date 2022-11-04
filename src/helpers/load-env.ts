import dotenv from 'dotenv'

import { resolvePath } from './index.js'

function loadEnv(configName = '.env') {
	const fullPath = resolvePath(import.meta.url, `../../${configName}`)
	dotenv.config({
		path: fullPath
	})
	// Fix types (each environment variable is a string)
	if (process.env.TIMEOUT !== undefined) {
		process.env.TIMEOUT = Number(process.env.TIMEOUT)
	}
}

export { loadEnv }
