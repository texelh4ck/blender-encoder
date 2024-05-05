const bt_render = async() => {
    const BlendList = blend_get();

    document.getElementById("render").style.visibility = "visible";
    
    for (let i = 0; i < BlendList.length; i++) {
        const file = blend_data(BlendList[i]);
        if (file.checked){
            document.getElementById("render-name").innerHTML = file.name;
            await render_anim(file.filepath)
        }
    }
    
    document.getElementById("render").style.visibility = "hidden";
}

const bt_preview = async() => {
    if (selected == null) {
        alert("Select one file please")
        return
    }
    
    document.getElementById("render").style.visibility = "visible";

    const file = blend_data(selected.title);
    await render_frame(file.filepath)
    
    document.getElementById("render").style.visibility = "hidden";
    set_preview(selected.title)
}

const bt_import = () => {
  alert("Comming Soon ...");
  // BlendList.push([`filename${count}.blend`, true, count])
  // count += 1
  // reload()
  // dialog.showOpenDialog({ properties: ["openFile", "multiSelections"] })
  //   .then((result) => {
  //     // if (!result.canceled){
  //         console.log(result)
  //     // }
  //   });
};