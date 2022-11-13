function validateEnv() {
	// TODO: Move to function arguments
	const required = [
		'PAGE_URI',
		'TIMEOUT',
		'APP_PORT',
		'DB_USER',
		'DB_PASSWORD',
		'DB_HOST',
		'DB_PORT',
		'DB_NAME',
		'DB_APARTMENTS_TABLE',
		'DB_APARTMENT_IMAGES_TABLE',
		'IMAGES_PATH'
	]
	for (const env of required) {
		if (process.env[env] === undefined) {
			throw `ERROR: Required variable "${env}" is  not specified`
		}
		// TODO: Move to functions-validators
		switch (env) {
			case 'APP_PORT': {
				process.env.APP_PORT = Number(process.env.APP_PORT)
				break
			}
			case 'TIMEOUT': {
				process.env.TIMEOUT = Number(process.env.TIMEOUT)
				break
			}
			case 'DB_PORT': {
				process.env.DB_PORT = Number(process.env.DB_PORT)
				break
			}
			case 'PAGE_URI': {
				try {
					new URL(process.env.PAGE_URI)
				} catch {
					throw `ERROR: Variable "PAGE_URI" is not a valid URL`
				}
				break
			}
		}
	}
}

export { validateEnv }
