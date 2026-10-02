import { contextBridge } from 'electron'

// Expose only the information this starter needs. Add narrow, typed methods here
// when your application needs to communicate with the main process.
contextBridge.exposeInMainWorld('app', {
  versions: {
    electron: process.versions.electron,
    chrome: process.versions.chrome,
    node: process.versions.node
  }
})
