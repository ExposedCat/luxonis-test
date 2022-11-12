import { IncomingMessage } from 'http'

import fs from 'fs'
import https from 'https'

async function downloadFile(
	url: string,
	path: string,
	name: string
): Promise<string> {
	const filePath = `${path}/${name}`
	const file = fs.createWriteStream(filePath)
	return new Promise((resolve, reject) => {
		const write = (data: IncomingMessage) => {
			data.pipe(file)
			file.on('finish', () => resolve(filePath))
			file.on('error', reject)
		}
		https.get(url, write)
	})
}

export { downloadFile }
