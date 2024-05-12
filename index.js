const {app, BrowserWindow, dialog, ipcMain} = require("electron");
const {win_w, win_h} = require("./src/config")
const {blend_add} = require("./src/blendfile")

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

ipcMain.handle("importFile", async(e) => {
    let files = null
    await dialog.showOpenDialog({ properties: ["openFile", "multiSelections"] })
    .then((result) => {
        if (!result.canceled){
            console.log(result.filePaths)
            files = result.filePaths;
        }
    });
    return files;
})

app.whenReady().then(() => {
    main();
})