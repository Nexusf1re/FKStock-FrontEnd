const { app, BrowserWindow, Menu } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL("http://localhost:3001");

  const menu = Menu.buildFromTemplate([
    {
      label: "Arquivo",
      submenu: [
        { role: "reload", label: "Recarregar" },
        { role: "toggledevtools", label: "DevTools" },
        { type: "separator" },
        { role: "quit", label: "Sair" },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);
});
