function validateEnv() {
	const required = ['BASE_PAGE_URI', 'TIMEOUT', 'APARTMENTS_PER_PAGE']
	for (const env of required) {
		if (process.env[env] === undefined) {
			throw `ERROR: Required variable "${env}" is  not specified`
		}
		switch (env) {
			case 'TIMEOUT': {
				process.env.TIMEOUT = Number(process.env.TIMEOUT)
				break
			}
			case 'BASE_PAGE_URI': {
				try {
					new URL(process.env.BASE_PAGE_URI)
				} catch {
					throw `ERROR: Variable "BASE_PAGE_URI" is not a valid URL`
				}
				break
			}
		}
	}
}

export { validateEnv }
