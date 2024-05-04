const {render_frame} = require("../src/renders")

const bt_render = async() => {
    const BlendList = blend_get();
    let ok = ""

    document.getElementById("loader").style.visibility = "visible";
    
    for (let i = 0; i < BlendList.length; i++) {
        const file = blend_data(BlendList[i]);
        if (file.checked){
            document.getElementById("render-name").innerHTML = file.name;
            await render_frame(file.filepath)
        }
    }
    
    document.getElementById("loader").style.visibility = "hidden";
}