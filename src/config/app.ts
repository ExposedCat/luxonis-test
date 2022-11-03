import { dummyService } from '../services/index.js'

function initApp() {
	console.info(`Initializing app…`)
	const appInstance = dummyService()
	const runner = (app: typeof appInstance) => app
	console.info(`Done`)
	return { app: appInstance, runner }
}

export { initApp }
