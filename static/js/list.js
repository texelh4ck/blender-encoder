const { dialog } = require("electron");
const {BlendList, add} = require("../src/blendfile")

// let BlendList = require("../temp/blendfile.json");
let selected = null;

const reload = () => {
    document.getElementById("blendfiles").innerHTML = "";
    BlendList.forEach((element) => {
    document.getElementById("blendfiles").innerHTML += 
    `<li title="${element[2]}" ><input title="${element[2]}" type="checkbox" ${ (element[1] ? "checked" : "") } />${ element[0] }</li>`;
    });
}

let count = 0
const bt_import = () => {
    BlendList.push([`filename${count}.blend`, true, count])
    count += 1
    reload()
    // dialog.showOpenDialog({ properties: ["openFile", "multiSelections"] })
    //   .then((result) => {
    //     // if (!result.canceled){
    //         console.log(result)
    //     // }
    //   });
}

// EVENTS

// Click
document.getElementById("blendfiles").addEventListener("click", function(e){
    if (e.srcElement.tagName == "LI") { 
        // Selecciona un archivo
        if (selected != null) {selected.classList = ""}
        selected = e.srcElement
        selected.classList = "selected"
    } else if (e.srcElement.tagName == "INPUT"){
        // switch al estado de el archivo de render
        BlendList[e.srcElement.title][1] = !BlendList[e.srcElement.title][1];
    }
})

// Double Click
document.getElementById("blendfiles").addEventListener("dblclick", function(e){
    if (e.srcElement.tagName != "LI") { 
        let item = e.srcElement.getElementsByTagName("input")[0]
        item.checked = !item.checked
    } 
})