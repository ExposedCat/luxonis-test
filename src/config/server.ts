import { Database, DatabaseClient } from '../types/index.js'

import express from 'express'

import { resolvePath } from '../helpers/index.js'
import { setMiddlewares } from '../middlewares/index.js'
import { setHandlers } from '../controllers/index.js'

function initServer(
	sessionSecret: string,
	databaseClient: DatabaseClient,
	database: Database
) {
	const app = express()

	app.set('views', resolvePath(import.meta.url, '../views'))
	app.set('view engine', 'ejs')

	setMiddlewares(app, sessionSecret, databaseClient, database)

	setHandlers(app)

	return {
		app,
		runServer: (port: number) => app.listen(port)
	}
}

export { initServer }
