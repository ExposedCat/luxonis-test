import { path as resolvePath } from '../helpers/index.js'

function dummyService() {
	resolvePath(import.meta.url, '')
}

export { dummyService }
