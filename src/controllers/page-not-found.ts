import {
	BasicHandler,
	HandlerData,
	HandlerType,
	ResponseName,
	ResultType
} from '../types/index.js'
import { respond } from '../services/index.js'

const handler: BasicHandler = async (req, res, next) => {
	respond(res, ResultType.Error, ResponseName.PageNotFound)
}

const data: HandlerData = {
	method: HandlerType.Middleware,
	handler
}

export { data }
