const {BrowserWindow} = require('electron')
const config = require('../config.json')
const {updateConfig} = require('../scripts/config-edit')

const bootstrap = (cAtrs={}, saveConfig=false, lastWindow=false) => {
    
    const win = new BrowserWindow(lastWindow ? {...config['DWindow'], ...config['LWindow'], ...cAtrs} : {...config['DWindow'], ...cAtrs})
    win.removeMenu()
    win.on('ready-to-show', () => {
        config.LWindow.maximize && win.maximize()
        win.show()
    })
    win.on('close', () => {
        if(saveConfig){
            bounds = win.getBounds()
            win.isMaximized() ? config.LWindow.maximize = true : (config.LWindow = bounds, config.LWindow.maximize = false)
            updateConfig(config)
        }
    })
    return win
}

module.exports = bootstrap