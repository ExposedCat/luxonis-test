import {
	BasicHandler,
	HandlerData,
	HandlerType,
	ResponseName,
	ResultType
} from '../types/index.js'
import { respond, flushApartments } from '../services/index.js'

const handler: BasicHandler = async (req, res, next) => {
	try {
		await flushApartments(req.databaseClient, req.database)
		respond(res, ResultType.Success, ResponseName.Respond)
	} catch (error) {
		console.error(error)
		respond(res, ResultType.Error, ResponseName.Unknown)
	}
}

const data: HandlerData = {
	method: HandlerType.Post,
	path: '/api/apartments/flush',
	validations: [],
	handler
}

export { data }
