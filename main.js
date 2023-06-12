const { app, BrowserWindow, globalShortcut } = require('electron');

let win;
let zoom = 1.0; // Initial zoom factor

function createWindow() {
  const win = new BrowserWindow({
     autoHideMenuBar: true
  });
  win.loadURL('http://localhost:8000'); // Replace with your server URL
  win.webContents.setZoomFactor(10); // Adjust the value as needed

  // Register global shortcuts for zooming in and out
  globalShortcut.register('CommandOrControl+=', () => {
    zoom += 0.1;
    win.webContents.setZoomFactor(zoom);
  });

  globalShortcut.register('CommandOrControl+-', () => {
    zoom -= 0.1;
    win.webContents.setZoomFactor(zoom);
  });

  // Disable scroll behavior for the main window
  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(`
      ::-webkit-scrollbar {
        display: none;
      }
    `);
  });
}

app.whenReady().then(() => {
  createWindow();
});

