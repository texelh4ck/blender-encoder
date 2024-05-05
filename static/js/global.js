const { blend_add, blend_get, blend_data, blend_change, blend_del } = require("../src/blendfile");
const { render_frame, render_anim } = require("../src/renders");
const { dialog } = require("electron");
const { welcome } = require("../src/config");

let selected = null;

if (welcome) {
    document.getElementById("welcome").style.animation = "welcome 3s 1";
    document.getElementById("container").style.animation = "init 3s 1";
}

// EVENTS

// Key Pressed
window.addEventListener("keypress", e => {
    // Ctrl + Space  ->  Full Screen Preview
    if (e.code == "Space" && e.ctrlKey){
        if (document.getElementById("preview").classList.contains("fullscreen")) {
            document.getElementById("preview").classList.remove("fullscreen")
        } else {
            document.getElementById("preview").classList.add("fullscreen");
        }
    }
})
