const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const os = require("os");
const path = require("path");
const { exec } = require("child_process");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true
    }
  });

  mainWindow.loadURL("http://localhost:3001");

  const menu = Menu.buildFromTemplate([
    {
      label: "Menu",
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

// Obter nome do usuário logado
ipcMain.handle("get-user", () => {
  return os.userInfo().username;
});
