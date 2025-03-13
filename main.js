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

// Obter e-mail (ou nome completo) do usuário logado usando o comando 'wmic'
ipcMain.handle("get-user-email", async () => {
  return new Promise((resolve, reject) => {
    exec("wmic useraccount where name='%username%' get fullName", (error, stdout, stderr) => {
      if (error || stderr) {
        console.error("Erro ao executar o comando 'wmic':", error || stderr);
        reject("Erro ao obter e-mail");
      } else {
        console.log("Saída do comando 'wmic':", stdout); // Log para debug
        const result = stdout.trim().split("\n");

        if (result.length > 1) {
          const userName = result[1].trim(); // Nome completo do usuário
          console.log("Nome do usuário:", userName);
          resolve(userName);
        } else {
          console.error("Resultado inesperado:", stdout);
          reject("Nome do usuário não encontrado");
        }
      }
    });
  });
});
