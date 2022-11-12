import { HandlerData, HandlerType } from '../types/index.js'
import { Express, RequestHandler } from 'express'
import {
	rootControllerData,
	unknownErrorControllerData,
	pageNotFoundControllerData,
	getApartmentsControllerData,
	flushApartmentsControllerData,
	parseApartmentsControllerData,
	viewApartmentsControllerData
} from './index.js'

function setHandler(app: Express, handlerData: HandlerData) {
	if (handlerData.method === HandlerType.Middleware) {
		app.use(handlerData.handler as RequestHandler)
	} else {
		const apply = app[handlerData.method].bind(app)
		const validations = handlerData.validations?.map(
			validation => validation as RequestHandler
		)
		apply(
			handlerData.path,
			...(validations || []),
			handlerData.handler as RequestHandler
		)
	}
}

function setHandlers(app: Express) {
	// View
	setHandler(app, viewApartmentsControllerData)

	// API
	setHandler(app, rootControllerData)

	setHandler(app, parseApartmentsControllerData)
	setHandler(app, getApartmentsControllerData)
	setHandler(app, flushApartmentsControllerData)

	setHandler(app, pageNotFoundControllerData)
	setHandler(app, unknownErrorControllerData)
}

export { setHandlers }
