const { app } = require('electron')
const fs = require('fs')
const paths = require('path')

module.exports = function(path = '', fileTypes = []) {
    let windows = []
    app.on('browser-window-created', (_, bw) => {
        windows.push(bw)
    })
    fs.watch(path, { encoding: 'utf8', recursive: true }, (event, file) => {
        if (paths.join(__dirname, file) !== module.parent.filename) {
            if (fileTypes.length == 0) {
                windows.forEach(w => w.webContents.reloadIgnoringCache())
            } else {
                const reg = /\w*\.(\w*)$/
                if (fileTypes.indexOf(reg.exec(file)) != -1) {
                    windows.forEach(w => w.webContents.reloadIgnoringCache())
                }
            }
        } else {
            console.log('Boot file changed, please restart app')
            app.quit()
        }
    })
}