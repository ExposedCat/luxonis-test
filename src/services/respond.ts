import {
	ResultType,
	Error,
	ErrorType,
	Success,
	ResponseName,
	Responses
} from '../types/index.js'

import { Response } from 'express'

function error(code: number, type: ErrorType, message: string) {
	const response: Error = {
		code,
		response: {
			isError: true,
			type,
			message
		}
	}
	return response
}

function success(message: string) {
	const response: Success = {
		code: 200,
		response: {
			isError: false,
			message,
			data: {}
		}
	}
	return response
}

function formResponse(type: ResultType, name: ResponseName, data = {}) {
	const responses: Responses = {
		[ResultType.Error]: {
			[ResponseName.PageNotFound]: error(
				404,
				ErrorType.InvalidInput,
				'Page not found'
			),
			[ResponseName.InvalidPageNumber]: error(
				404,
				ErrorType.InvalidInput,
				'Invalid page number specified'
			),
			[ResponseName.InvalidResultsNumber]: error(
				404,
				ErrorType.InvalidInput,
				'Invalid results per page number specified'
			),
			[ResponseName.Unknown]: error(
				503,
				ErrorType.Internal,
				'Internal error occurred. Please try again later'
			)
		},
		[ResultType.Success]: {
			[ResponseName.Root]: success(
				'Welcome here. Check docs for instructions how to use this API. Use current URI as main API endpoint'
			),
			[ResponseName.Respond]: success('Success')
		}
	}
	let responseObject = responses[type][name]
	if (!responseObject) {
		console.error(`Unknown "${type}" response "${name}"`)
		return responses.error.unknown as Error
	}
	if (!responseObject.response.isError) {
		responseObject.response.data = data
	}
	return responseObject
}

function respond(
	res: Response,
	type: ResultType,
	name: ResponseName,
	data = {}
) {
	const { code, response } = formResponse(type, name, data)
	return res.status(code).json(response)
}

export { respond }
