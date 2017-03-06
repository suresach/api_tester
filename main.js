const { app } = require('electron') // Module to control application life.
var electron = require('electron')
const BrowserWindow = electron.BrowserWindow
// import JSONFormatter from 'json-formatter-js'
var mainWindow = null;
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    console.log("from main");
    mainWindow = new BrowserWindow({ width: 900, height: 600 })
    mainWindow.loadURL('file://' + __dirname + '/home_page.html');
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
