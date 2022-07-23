const { app } = require('electron')
const fs = require('fs')

const mainFile = /(\w+\\*\w+.\w*$)/.exec(module.parent.filename)[1]

module.exports = function(path = '', fileTypes = []) {
    let windows = []
    app.on('browser-window-created', (_, bw) => {
        windows.push(bw)
    })
    const watcher = fs.watch(path, { encoding: 'utf8', recursive: true }, (event, file=/(\w+\\*\w+.\w*$)/.exec(file)[1]) => {
        if(mainFile == file) {
            watcher.close()
            return app.quit()
        }
        if (fileTypes.length === 0) {
            return windows.forEach(w => w.webContents.reloadIgnoringCache())
        }
        if(fileTypes.length > 0 && fileTypes.indexOf(/\w+.(\w+)$/.exec(file)[1]) !== -1) {
            return windows.forEach(w => w.webContents.reloadIgnoringCache())
        }
    })
}