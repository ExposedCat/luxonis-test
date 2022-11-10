import { Database, DatabaseClient } from '../types/index.js'
import { Request, Response, NextFunction } from 'express'

function createPassDatabaseMiddleware(
	client: DatabaseClient,
	database: Database
) {
	return async function passDatabase(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		req.database = database
		req.databaseClient = client
		next()
	}
}

export { createPassDatabaseMiddleware }
