const {render_frame, render_anim} = require("../src/renders")

const bt_render = async() => {
    const BlendList = blend_get();

    document.getElementById("loader").style.visibility = "visible";
    
    for (let i = 0; i < BlendList.length; i++) {
        const file = blend_data(BlendList[i]);
        if (file.checked){
            document.getElementById("render-name").innerHTML = file.name;
            await render_anim(file.filepath)
        }
    }
    
    document.getElementById("loader").style.visibility = "hidden";
}

const bt_preview = async() => {
    if (selected == null) {
        alert("Select one file please")
        return
    }
    
    const BlendList = blend_get();
    
    document.getElementById("loader").style.visibility = "visible";

    const file = blend_data(selected.title);
    await render_frame(file.filepath)
    
    document.getElementById("preview").style.backgroundImage = "url('C:/tmp/bencoder/test.png')";
    document.getElementById("preview").style.backgroundSize = "contain";
    document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    document.getElementById("preview").style.backgroundPosition = "center";
    document.getElementById("loader").style.visibility = "hidden";
}