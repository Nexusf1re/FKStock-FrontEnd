const { app, BrowserWindow, Menu } = require("electron");
const os = require("os");
const { ipcMain } = require("electron");
const path = require("path");

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

  mainWindow.loadURL("https://fk-stock-front-end-git-lab-matteus-projects.vercel.app?_vercel_share=6i0qkyHZaYtKMbMhh2KUVl2Tk2Ofp8Iu");

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

ipcMain.handle("get-user", () => {
  return os.userInfo().username;
});
