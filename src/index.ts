import {app} from "electron"
require('dotenv').config()
if(process.env.NODE_ENV === 'dev') require('./scripts/reloader').liveReloader()
import { bootstrap } from "./bootstrap"


app.on('ready', () => {
    bootstrap()
})

app.on('window-all-closed', () => {
    app.exit()
})
