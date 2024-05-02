const {app, BrowserWindow, dialog} = require("electron");
const {BlendList} = require("./src/blendfile")

const main = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('static/index.html')
}

app.whenReady().then(() => {
    main();
})
