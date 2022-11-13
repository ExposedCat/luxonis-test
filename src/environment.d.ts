export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PAGE_URI: string
			TIMEOUT: number
			SHOW_BROWSER: string
			APP_PORT: number
			DB_USER: string
			DB_PASSWORD: string
			DB_HOST: string
			DB_PORT: number
			DB_NAME: string
			DB_PORT: number
			DB_NAME: string
			DB_APARTMENTS_TABLE: string
			DB_APARTMENT_IMAGES_TABLE: string
			IMAGES_PATH: string
		}
	}
}
