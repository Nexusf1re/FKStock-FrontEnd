const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getUser: () => ipcRenderer.invoke("get-user"),
});