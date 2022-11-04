export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BASE_PAGE_URI: string
			APARTMENTS_PER_PAGE: string
			TIMEOUT: number
		}
	}
}
