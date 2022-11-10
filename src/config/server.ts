import express from 'express'

import { setHandlers } from '../controllers/index.js'
import { setMiddlewares } from '../middlewares/index.js'
import { Database, DatabaseClient } from '../types/index.js'

function initServer(
	sessionSecret: string,
	databaseClient: DatabaseClient,
	database: Database
) {
	const app = express()
	
	setMiddlewares(app, sessionSecret, databaseClient, database)
	setHandlers(app)

	return {
		app,
		runServer: (port: number) => {
			return app.listen(port)
		}
	}
}

export { initServer }
