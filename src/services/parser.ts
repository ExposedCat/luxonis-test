import { Apartment } from '../types/index.js'
import puppeteer, { Page } from 'puppeteer'

async function destroyParser(parser: Page) {
	await parser.browser().close()
}

// Opens headless browser on a specific page
async function createParser() {
	const parser = await puppeteer.launch()
	const page = await parser.newPage()
	// Open first page
	await page.goto(process.env.BASE_PAGE_URI + 1)
	// TODO: Deal with cookies popup
	// await page.screenshot({
	// 	path: './test.png'
	// })
	return page
}

async function parsePage(page: Page): Promise<Apartment[]> {
	return [{ title: 'test', images: [] }]
}

export { createParser, parsePage, destroyParser }
