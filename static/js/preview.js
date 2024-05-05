const set_preview = (file) => {
    const data = blend_data(file);
    preview.style.backgroundImage = `url('C:/tmp/bencoder/${data.name}_preview.png')`;
    preview.style.backgroundSize = "contain";
    preview.style.backgroundRepeat = "no-repeat";
    preview.style.backgroundPosition = "center";
}

const switch_fullscreen = () => {
    if (preview.classList.contains("fullscreen")) {
        preview.classList.remove("fullscreen")
    } else {
        preview.classList.add("fullscreen");
    }
}

const { exec } = require("child_process");

preview.addEventListener("dblclick", function (e) {
    if (selected != null) {
        exec("C:/tmp/bencoder/" + blend_data(selected.title).name + "_preview.png");
    }
});
