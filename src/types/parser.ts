import { Page } from 'puppeteer'
import { Apartment } from './index.js'

type Parser = Page

type DataHandler = (apartments: Apartment[]) => void

export { DataHandler, Parser }
