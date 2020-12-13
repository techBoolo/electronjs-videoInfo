const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require('fluent-ffmpeg');
let win;

app.on('ready',  () => {
    win = new BrowserWindow( {
    webPreferences: { nodeIntegration: true }
  });
  win.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    console.log(metadata.format);
    win.webContents.send('video:metadata', metadata.format.duration);
  })
});
