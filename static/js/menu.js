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
    
    rendering.style.visibility = "visible";
    render_name.innerHTML = "Preview: " + blend_data(selected.title).name

    const file = blend_data(selected.title);
    await render_frame(file.filepath)
    
    rendering.style.visibility = "hidden";
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