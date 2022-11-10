enum ResultType {
	Error = 'error',
	Success = 'success'
}

enum ErrorType {
	Internal = 'internal',
	InvalidInput = 'invalidInput'
}

enum ResponseName {
	PageNotFound = 'pageNotFound',
	Unknown = 'unknown',
	InvalidPageNumber = 'invalidPageNumber',
	InvalidResultsNumber = 'invalidResultsNumber',
	Root = 'root',
	Respond = 'respond'
}

interface Success {
	code: 200
	response: {
		isError: false
		message: string
		data: object
	}
}

interface Error {
	code: number
	response: {
		isError: true
		type: ErrorType
		message: string
	}
}

interface Responses {
	[ResultType.Error]: { [key in ResponseName]?: Error }
	[ResultType.Success]: { [key in ResponseName]?: Success }
}

export { ResultType, Error, ErrorType, ResponseName, Success, Responses }
