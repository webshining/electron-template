'use strict'
const path = require('path')
require('../scripts/reloader')(path.join(__dirname, '..'), ['js'])

const {app} = require('electron')

const bootstrap = require('./bootstrap')

app.on('ready', () => {
    const win = bootstrap(null, true, true)
    win.loadURL('https://github.com/webshining/electron-template')
    win.webContents.openDevTools()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})