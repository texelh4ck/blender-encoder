const { dialog } = require("electron");
const { blend_add, blend_get, blend_data, blend_change } = require("../src/blendfile");

let selected = null;


const reload = () => {
    const BlendList =  blend_get();
    document.getElementById("blendfiles").innerHTML = "";
    BlendList.forEach((element) => {
        const file = blend_data(element)
    document.getElementById("blendfiles").innerHTML += 
    `<li title="${element}" ><input title="${element}" type="checkbox" ${ (file.checked ? "checked" : "") } />${ file.name }</li>`;
    });
}

let count = 0
const bt_import = () => {
    alert("Comming Soon ...")
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
        const f = blend_data(e.srcElement.title);
        blend_change(e.srcElement.title, "checked", !f.checked)
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
    blend_add(f.path);
    document.getElementById("renderlist").style.background = "#05101a";
}
});

document.getElementById("renderlist").addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

reload();