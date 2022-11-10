import { Apartment, Selector } from '../types/index.js'
import puppeteer, { Page } from 'puppeteer'

async function destroyParser(parser: Page) {
	await parser.browser().close()
}

// Opens headless browser on a specific page
async function createParser(limit: number) {
	const parser = await puppeteer.launch({
		headless: process.env.SHOW_BROWSER !== 'true'
	})
	const page = await parser.newPage()
	const host = new URL(process.env.PAGE_URI).host
	await page.setCookie({
		name: 'per_page',
		value: limit.toString(),
		domain: host
	})
	await page.goto(process.env.PAGE_URI, {
		waitUntil: ['domcontentloaded']
	})
	// TODO: Deal with cookies popup (?)
	return page
}

function parseDOM(
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

async function parseApartments(limit: number): Promise<Apartment[]> {
	const parser = await createParser(limit)
	try {
		await parser.waitForSelector(Selector.APARTMENT, {
			timeout: process.env.TIMEOUT
		})
	} catch (error) {
		// Capture screen at the moment of error
		// TODO: Move path to environment
		await parser.screenshot({
			path: './error.png'
		})
		throw error
	}
	const apartments = await parser.$$eval(
		Selector.APARTMENT,
		parseDOM,
		Selector.TITLE,
		Selector.IMAGE,
		Selector.ADDRESS
	)
	await destroyParser(parser)
	return apartments
}

export { createParser, parseApartments, destroyParser }
