import {
	BasicHandler,
	HandlerData,
	HandlerType,
	ResponseName,
	ResultType
} from '../types/index.js'
import { parseApartments, respond, saveApartments } from '../services/index.js'

const handler: BasicHandler = async (req, res, next) => {
	try {
		const apartmentsNumber = Number(req.body.apartmentsNumber)
		const apartments = await parseApartments(apartmentsNumber)
		await saveApartments(
			req.database,
			req.databaseClient,
			apartments,
			req.imagesPath
		)
		respond(res, ResultType.Success, ResponseName.Respond)
	} catch (error) {
		console.error(error)
		respond(res, ResultType.Error, ResponseName.Unknown)
	}
}

const data: HandlerData = {
	method: HandlerType.Post,
	path: '/api/apartments/parse',
	// TODO: Validate parameters
	validations: [],
	handler
}

export { data }
