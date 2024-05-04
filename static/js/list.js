const { dialog } = require("electron");
const { add, get, data } = require("../src/blendfile");

let selected = null;


const reload = () => {
    const BlendList =  get();
    document.getElementById("blendfiles").innerHTML = "";
    BlendList.forEach((element) => {
        const file = data(element)
    document.getElementById("blendfiles").innerHTML += 
    `<li title="${file.name}" ><input title="${file.name}" type="checkbox" ${ (file.checked ? "checked" : "") } />${ file.name }</li>`;
    });
}

let count = 0
const bt_import = () => {
    // BlendList.push([`filename${count}.blend`, true, count])
    // count += 1
    // reload()
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
        console.log(e.srcElement.title);
    }
})

// Double Click
document.getElementById("blendfiles").addEventListener("dblclick", function(e){
    if (e.srcElement.tagName != "LI") { 
        let item = e.srcElement.getElementsByTagName("input")[0]
        item.checked = !item.checked
    } 
})

// Drag and Drop
document.getElementById("renderlist").addEventListener("drop", (e) => {
e.preventDefault();
e.stopPropagation();

for (const f of e.dataTransfer.files) {
    document.getElementById("renderlist").style.background = "#fff";
    add(f.path);
    document.getElementById("renderlist").style.background = "#05101a";
}
});

document.getElementById("renderlist").addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

reload();