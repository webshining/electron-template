const {BrowserWindow} = require('electron')
const config = require('../config.json')
const {updateConfig} = require('../scripts/config-edit')

const bootstrap = (cAtrs) => {
    const win = new BrowserWindow({...config['DWindow'], ...config['LWindow'], ...cAtrs})
    win.removeMenu()
    win.on('ready-to-show', () => {
        config.LWindow.maximize && win.maximize()
        win.show()
    })
    win.on('close', () => {
        bounds = win.getBounds()
        win.isMaximized() ? config.LWindow.maximize = true : (config.LWindow = bounds, config.LWindow.maximize = false)
        updateConfig(config)
    })
    return win
}

module.exports = bootstrap