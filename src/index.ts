import { initApp } from './config/index.js'

const { runner: startApp } = initApp()
const closeApp = await startApp()
process.on('exit', closeApp)
