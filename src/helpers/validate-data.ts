import { FieldValidationRule } from '../types/index.js'

function isNumber(value: unknown) {
	return !isNaN(Number(value))
}

function validateFields(validationRules: FieldValidationRule[]) {
	for (const rule of validationRules) {
		const result = rule.validator(rule.value)
		const error = result ? null : rule.errorMessage
		if (error) {
			return error
		}
	}
	return null
}

export { isNumber, validateFields }
