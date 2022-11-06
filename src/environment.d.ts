export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BASE_PAGE_URI: string
			APARTMENTS_PER_PAGE: string
			TIMEOUT: number
			SHOW_BROWSER: string
			DB_USER: string
			DB_PASSWORD: string
			DB_HOST: string
			DB_PORT: number
			DB_NAME: string
			DB_PORT: number
			DB_NAME: string
			DB_APARTMENTS_TABLE: string
			DB_APARTMENT_IMAGES_TABLE: string
		}
	}
}
