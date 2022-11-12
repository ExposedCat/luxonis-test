import { Database, DatabaseClient } from '../types/index.js'
import { Request, Response, NextFunction } from 'express'

function injectDependencies(
	client: DatabaseClient,
	database: Database,
	apartmentImagesPath: string
) {
	return async function passDatabase(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		req.database = database
		req.databaseClient = client
		req.imagesPath = apartmentImagesPath
		next()
	}
}

export { injectDependencies }
