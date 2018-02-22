const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');

app.on('ready', () => {

    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

    app.on('window-all-closed', () => {
        app.quit();
    });

    let sobreWindow = null;
    ipcMain.on('SobreWindow', function () {
        if (!sobreWindow) {
            sobreWindow = new BrowserWindow({
                width: 300,
                height: 220,
                alwaysOnTop: true,
                frame: false,
                resizable: false
            });
        }
        sobreWindow.on('closed', function () {
            sobreWindow = null;
        });
        sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
    });

    ipcMain.on('fechar-sobre', function () {
        sobreWindow.close();
    });
})