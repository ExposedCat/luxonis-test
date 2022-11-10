import { ResponseName, ResultType } from '../types/api.js'
import { Request, Response, NextFunction } from 'express'
import { respond } from '../services/index.js'
import { isNumber, validateFields } from '../helpers/index.js'

function validateApartmentData(req: Request, res: Response, next: NextFunction) {
	const validationRules = [
		{
			value: req.query.page,
			validator: isNumber,
			errorMessage: ResponseName.InvalidPageNumber
		},
		{
			value: req.query.resultsPerPage,
			validator: isNumber,
			errorMessage: ResponseName.InvalidResultsNumber
		}
	]
	const errorMessage = validateFields(validationRules)
	if (errorMessage) {
		respond(res, ResultType.Error, errorMessage)
	} else {
		next()
	}
}

export { validateApartmentData }
