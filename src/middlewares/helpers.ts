import express, { Express } from 'express'
import helmet, { HelmetOptions } from 'helmet'
import session from 'express-session'

import { createPassDatabaseMiddleware } from './index.js'
import { Database } from '../types/database.js'
import { DatabaseClient } from '../types/index.js'

function setMiddlewares(
	app: Express,
	sessionSecret: string,
	databaseClient: DatabaseClient,
	database: Database
) {
	// Security headers
	const helmetOptions = {
		referrerPolicy: 'strict-origin-when-cross-origin'
	} as HelmetOptions
	app.use(helmet(helmetOptions))

	// Express session
	app.use(
		session({
			secret: sessionSecret,
			resave: true,
			saveUninitialized: true
		})
	)

	// Express config
	app.use(express.json())
	app.use(
		express.urlencoded({
			extended: true
		})
	)

	// Business logic middlewares
	app.use(createPassDatabaseMiddleware(databaseClient, database))
}

export { setMiddlewares }
