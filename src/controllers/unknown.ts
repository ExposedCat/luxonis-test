import {
	HandlerData,
	HandlerType,
	ResponseName,
	ResultType,
	ErrorHandler
} from '../types/index.js'
import { respond } from '../services/index.js'

const handler: ErrorHandler = async (error, req, res, next) => {
	console.trace(error)
	respond(res, ResultType.Error, ResponseName.Unknown)
}

const data: HandlerData = {
	method: HandlerType.Middleware,
	handler
}

export { data }
