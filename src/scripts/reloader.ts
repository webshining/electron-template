import { app, BrowserWindow } from 'electron'
import * as fs from 'fs'
import * as _path from 'path'

export const liveReloader = (path?: string) => {
    if (!path) {
        path = _path.resolve(__dirname, "..", "..")
    }
    let windows: BrowserWindow[] = []
    app.on('browser-window-created', (e, w) => {
        windows.push(w)
    })
    const watcher = fs.watch(
        path,
        { encoding: 'utf8', recursive: true },
        (event, path) => {
            windows.forEach((w) => w.webContents.reload())
        }
    )
}
