import { initApp } from './config/index.js'

const { runner: startApp } = initApp()
await startApp()
