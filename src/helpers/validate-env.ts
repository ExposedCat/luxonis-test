function validateEnv() {
	const required = ['BASE_PAGE_URI', 'TIMEOUT']
	for (const env of required) {
		if (process.env[env] === undefined) {
			throw `ERROR: Required variable "${env}" is  not specified`
		}
	}
}

export { validateEnv }
