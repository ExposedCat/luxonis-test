import { ResponseName } from './index.js'

interface FieldValidationRule {
	value: unknown
	validator: (value: unknown) => boolean
	errorMessage: ResponseName
}

export { FieldValidationRule }
