"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
require('dotenv').config();
if (process.env.NODE_ENV === 'dev') {
    require('./scripts/reloader');
}
let win = null;
const bootstrap = () => {
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        show: false,
    });
    win.loadURL('https://github.com/webshining/electron-template');
    win.on('ready-to-show', () => {
        win.show();
    });
};
electron_1.app.on('ready', () => {
    bootstrap();
});
electron_1.app.on('window-all-closed', () => {
    electron_1.app.exit();
});
//# sourceMappingURL=index.js.map