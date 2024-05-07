const {app, BrowserWindow, dialog} = require("electron");
const {win_w, win_h} = require("./src/config")

const main = () => {
    const win = new BrowserWindow({
        width: win_w,
        height: win_h,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        icon: "images/icon-color.png",
    })
    win.loadFile('static/index.html')
}

app.whenReady().then(() => {
    main();
})
