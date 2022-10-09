import { BrowserWindow } from 'electron'

export const bootstrap = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
    })
    win.loadURL('https://github.com/webshining/electron-template')
    win.on('ready-to-show', () => {
        win.show()
    })
    return win
}
