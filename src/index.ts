import { initApp } from './config/index.js'

console.info(`- Starting app…`)
const { app, runner: startApp } = initApp()
startApp(app)
console.info(`- Done`)
