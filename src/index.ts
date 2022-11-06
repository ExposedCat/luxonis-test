import { initApp } from './config/index.js'

const { runner: startApp } = initApp()
const closeApp = await startApp()
await closeApp()
