const {BrowserWindow} = require('electron')
const config = require('../config.json')

const bootstrap = (cAtrs) => {
    const win = new BrowserWindow({...config, ...cAtrs})
    win.removeMenu()
    win.on('ready-to-show', () => {
        win.show()
    })
    win.on('close', () => {
        
    })
    return win
}

module.exports = bootstrap