const bt_render = async() => {
    const BlendList = blend_get();

    rendering.style.visibility = "visible";
    
    for (let i = 0; i < BlendList.length; i++) {
        const file = blend_data(BlendList[i]);
        if (file.checked){
            render_name.innerHTML = file.name;
            await render_anim(file.filepath)
        }
    }
    
    rendering.style.visibility = "hidden";
}

const bt_preview = async() => {
    if (selected == null) {
        alert("Select one file please")
        return
    }
    
    document.getElementById("bt_preview").ariaBusy = true;
    
    const file = blend_data(selected.title);
    await render_frame(file.filepath)

    document.getElementById("bt_preview").ariaBusy = false;
    
    set_preview(selected.title)
}

const bt_all_preview = async() => {
    const BlendList = blend_get();

    document.getElementById("bt_all_preview").ariaBusy = true;

    for (let i = 0; i < BlendList.length; i++) {
        const file = blend_data(BlendList[i]);
        await render_frame(file.filepath)
        set_preview(selected.title)
    }
    
    document.getElementById("bt_all_preview").ariaBusy = false;
    
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