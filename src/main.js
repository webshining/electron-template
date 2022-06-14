const { app, BrowserWindow } = require('electron')
const config = require('../config.json')
require('./reloader')(__dirname)

let win = null

const bootstrap = () => {
    win = new BrowserWindow(config)
    win.loadURL('https://github.com/webshining/electron-template')
    win.on('ready-to-show', () => {
        win.show()
    })
}

app.on('ready', () => {
    bootstrap()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})