import { Database, DatabaseClient } from '../types/index.js'

import express, { Express } from 'express'
import ejsLayouts from 'express-ejs-layouts'
import session from 'express-session'
import helmet, { HelmetOptions } from 'helmet'

import { createPassDatabaseMiddleware } from './index.js'
import { resolvePath } from '../helpers/resolve-path.js'

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

	app.use(ejsLayouts)
	app.use(express.static(resolvePath(import.meta.url, '../public')))

	// Business logic middlewares
	app.use(createPassDatabaseMiddleware(databaseClient, database))
}

export { setMiddlewares }
