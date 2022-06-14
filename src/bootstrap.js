const {BrowserWindow} = require('electron')
const config = require('../config.json')

const bootstrap = (cAtrs) => {
    const win = new BrowserWindow({...config, ...cAtrs})
    win.removeMenu()
    win.on('ready-to-show', () => {
        win.show()
    })
    return win
}

module.exports = bootstrap