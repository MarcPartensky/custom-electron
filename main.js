const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow();
  win.loadURL('http://localhost:8000'); // Replace with your server URL
}

app.whenReady().then(() => {
  createWindow();
});

