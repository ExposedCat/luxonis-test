import dotenv from 'dotenv'

import { resolvePath } from './index.js'

function loadEnv(configName = '.env') {
	const fullPath = resolvePath(import.meta.url, `../../${configName}`)
	dotenv.config({
		path: fullPath
	})
}

export { loadEnv }
