const set_preview = (file) => {
    const data = blend_data(file);
    document.getElementById("preview").style.backgroundImage = `url('C:/tmp/bencoder/${data.name}_preview.png')`;
    document.getElementById("preview").style.backgroundSize = "contain";
    document.getElementById("preview").style.backgroundRepeat = "no-repeat";
    document.getElementById("preview").style.backgroundPosition = "center";
}