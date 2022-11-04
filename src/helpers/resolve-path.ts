import pathModule from 'path'
import { fileURLToPath } from 'url'

function resolvePath(localPath: string, targetPath: string) {
	const __filename = fileURLToPath(localPath)
	const __dirname = pathModule.dirname(__filename)
	return pathModule.join(__dirname, targetPath)
}

export { resolvePath }
