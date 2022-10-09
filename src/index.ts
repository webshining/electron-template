import { app, BrowserWindow } from 'electron'
require('dotenv').config()
if(process.env.NODE_ENV === 'dev') {
    require('./scripts/reloader.spec')
}

let win: BrowserWindow = null

const bootstrap = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
    })
    win.loadURL('https://github.com/webshining/electron-template')
    win.on('ready-to-show', () => {
        win.show()
    })
}

app.on('ready', () => {
    bootstrap()
})

app.on('window-all-closed', () => {
    app.exit()
})
