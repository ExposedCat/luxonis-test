import { Apartment, Selector } from '../types/index.js'
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

function parseApartments(
	apartments: Element[],
	titleSelector: string,
	imageSelector: string,
	addressSelector: string
): Apartment[] {
	return apartments.map(apartment => {
		const titleTag = apartment.querySelector(
			titleSelector
		) as HTMLSpanElement
		const addressTag = apartment.querySelector(
			addressSelector
		) as HTMLSpanElement
		const imageTags = apartment.querySelectorAll(imageSelector) as NodeList
		const imageUrls = Array.from(
			imageTags,
			image => (image as HTMLImageElement).src
		)
		return {
			title: titleTag?.innerText,
			images: imageUrls,
			address: addressTag?.innerText
		}
	})
}

async function parsePage(page: Page): Promise<Apartment[]> {
	await page.waitForSelector(Selector.APARTMENT, {
		timeout: process.env.TIMEOUT
	})
	const apartments = await page.$$eval(
		Selector.APARTMENT,
		parseApartments,
		Selector.TITLE,
		Selector.IMAGE,
		Selector.ADDRESS
	)
	return apartments
}

export { createParser, parsePage, destroyParser }
