const bootstrap = require('../src/bootstrap')

const {app} = require('electron')

app.on('ready', () => {
    const win = bootstrap({frame: false})
    win.openDevTools()
    win.loadFile('index.html')
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})