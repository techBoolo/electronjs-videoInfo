const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready',  () => {
  const win = new BrowserWindow({});
  win.loadURL(`file://${__dirname}/index.html`);
});


