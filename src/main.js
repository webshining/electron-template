'use strict'
// Start electron-reloader
const path = require('path')
require('../scripts/reloader')(path.join(__dirname, '..'))

const {app} = require('electron')

const bootstrap = require('./bootstrap')

app.on('ready', () => {
    const win = bootstrap()
    win.loadURL('https://github.com/webshining/electron-template')
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})