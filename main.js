const {app, BrowserWindow} = require('electron')
    , url = require('url')
    , path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    //win.webContents.openDevTools();
}

app.on('ready', createWindow);