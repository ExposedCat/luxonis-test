export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BASE_PAGE_URI: string
			TIMEOUT: number
		}
	}
}
