const reload = () => {
    const BlendList =  blend_get();
    document.getElementById("blendfiles").innerHTML = "";
    BlendList.forEach((element) => {
        const file = blend_data(element)
    document.getElementById("blendfiles").innerHTML += 
    `<li title="${element}" ><input title="${element}" type="checkbox" ${ (file.checked ? "checked" : "") } />${ file.name }</li>`;
    });
}

// EVENTS
// Click
document.getElementById("blendfiles").addEventListener("click", function(e){
    if (e.srcElement.tagName == "LI") { 
        // Selecciona un archivo
        if (selected != null) {selected.classList = ""}
        selected = e.srcElement
        selected.classList = "selected"

        try {
            set_preview(selected.title)
        } catch (error) {
            
        }
        
    } else if (e.srcElement.tagName == "INPUT"){
        // switch al estado de el archivo de render
        const f = blend_data(e.srcElement.title);
        blend_change(e.srcElement.title, "checked", !f.checked)
    }
})

// Double Click
document.getElementById("blendfiles").addEventListener("dblclick", function(e){
    if (e.srcElement.tagName != "LI") { 
        alert("Comming Soon...")
    } 
})

// Drag and Drop
document.getElementById("renderlist").addEventListener("drop", async (e) => {
    e.preventDefault();
    e.stopPropagation();

    document.getElementById("spinner").style.visibility = "visible";
    for (const f of e.dataTransfer.files) {
        document.getElementById("spinner-text").innerHTML = f.name;
        await blend_add(f.path);
    }
    reload();
    document.getElementById("spinner").style.visibility = "hidden";
});

document.getElementById("renderlist").addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

// Key
window.addEventListener("keydown", function(e){
    if (e.code == 'Delete'){
        if (selected != null && confirm("Delete " + selected.title + "?")){
            blend_del(selected.title)
            reload()
        }
    }
})

reload();