const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    show: false,
    icon: __dirname + '/icon.png',
    title: "ORTB Direct",
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js'),
      zoomFactor: 1,
      nodeIntegration: false
    }
  })

  win.on('page-title-updated', (event) => {
    event.preventDefault()
  })

  win.maximize()

  win.setMenu(null);

  win.loadURL("https://player.infomaniak.com/?channel=69891&player=10535&ref=me.ludndev.ortbdirect")

  win.show()

  // win.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

