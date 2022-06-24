const {BrowserWindow} = require('electron')
const config = require('../config.json')
const {updateConfig} = require('../scripts/config-edit')

const bootstrap = (cAtrs) => {
    const win = new BrowserWindow({...config['DWindow'], ...config['LWindow'], ...cAtrs})
    win.removeMenu()
    win.on('ready-to-show', () => {
        win.show()
    })
    win.on('close', () => {
        bounds = win.getBounds()
        config.LWindow = bounds
        updateConfig(config)
    })
    return win
}

module.exports = bootstrap