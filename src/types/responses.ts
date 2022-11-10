import { ResponseName } from './index.js'

interface ServiceResponseError {
	isError: true
	data: {
		errorMessage: ResponseName
	}
}

interface ServiceResponseSuccess {
	isError: false
	data: object
}

interface ApartmentResponse {
	title: string
	address: string
	images: string[]
}

interface ApartmentsResponse extends ServiceResponseSuccess {
	data: {
		apartments: ApartmentResponse[]
	}
}

type ServiceResponse = ServiceResponseSuccess | ServiceResponseError

export { ServiceResponse, ApartmentsResponse }
