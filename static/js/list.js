const reload = () => {
    const BlendList =  blend_get();
    blendfiles.innerHTML = "";
    BlendList.forEach((element) => {
        const file = blend_data(element)
    blendfiles.innerHTML += 
    `<li title="${element}" ><input title="${element}" type="checkbox" ${ (file.checked ? "checked" : "") } />${ file.name }</li>`;
    });
}

// EVENTS
// Click
blendfiles.addEventListener("click", function(e){
    if (e.srcElement.tagName == "LI") { 
        // Selecciona un archivo
        if (selected != null) {selected.classList = ""}
        selected = e.srcElement
        selected.classList = "selected"
        setInfo(selected.title);
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
blendfiles.addEventListener("dblclick", function(e){
    if (e.srcElement.tagName != "LI") { 
        alert("Comming Soon...")
    } 
})

// Drag and Drop
document.getElementById("renderlist").addEventListener("drop", async (e) => {
    e.preventDefault();
    e.stopPropagation();

   spinner.style.visibility = "visible";
    for (const f of e.dataTransfer.files) {
        spinner_text.innerHTML = f.name;
        await blend_add(f.path);
    }
    reload();
   spinner.style.visibility = "hidden";
});

document.getElementById("renderlist").addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

// Key
window.addEventListener("keydown", function(e){
    // Delete file of the list
    if (e.code == 'Delete'){
        if (selected != null && confirm("Delete " + blend_data(selected.title).name + "?")){
            blend_del(selected.title)
            reload()
        }
    }
})

reload();