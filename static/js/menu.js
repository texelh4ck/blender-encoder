const {render_frame} = require("../src/renders")

const render = async() => {
    const BlendList = get();
    let ok = ""

    document.getElementById("loader").style.visibility = "visible";
    
    for (let i = 0; i < BlendList.length; i++) {
        const file = data(BlendList[i]);
        document.getElementById("render-name").innerHTML = file.name;
        await render_frame(file.filepath)
    }
    
    document.getElementById("loader").style.visibility = "hidden";
}