import {
	BasicHandler,
	HandlerData,
	HandlerType,
	ResponseName,
	ResultType
} from '../types/index.js'
import { respond } from '../services/index.js'
import { getApartments } from '../services/get-apartments.js'
import { validateApartmentData } from '../middlewares/index.js'

const handler: BasicHandler = async (req, res, next) => {
	try {
		const page = Number(req.query.page)
		const resultsPerPage = Number(req.query.resultsPerPage)
		const apartments = await getApartments(
			req.database,
			req.databaseClient,
			page,
			resultsPerPage
		)
		res.render('index', {
			apartments,
			page,
			resultsPerPage
		})
	} catch (error) {
		// TODO: Render human-readable page
		console.error(error)
		respond(res, ResultType.Error, ResponseName.Unknown)
	}
}

const data: HandlerData = {
	method: HandlerType.Get,
	path: '/',
	validations: [validateApartmentData],
	handler
}

export { data }
