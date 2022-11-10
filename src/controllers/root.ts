import {
	BasicHandler,
	HandlerData,
	HandlerType,
	ResponseName,
	ResultType
} from '../types/index.js'
import { respond } from '../services/index.js'

const handler: BasicHandler = async (req, res, next) => {
	respond(res, ResultType.Success, ResponseName.Root)
}

const data: HandlerData = {
	method: HandlerType.Get,
	path: '/api',
	handler
}

export { data }
