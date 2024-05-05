const { blend_add, blend_get, blend_data, blend_change, blend_del } = require("../src/blendfile");
const { render_frame, render_anim } = require("../src/renders");
const { dialog } = require("electron");
const { welcome } = require("../src/config");

// Panels
const preview = document.getElementById("preview");
const blendlist = document.getElementById("blendfiles");
const options = document.getElementById("options");
const menu = document.getElementById("menu");

// Loaders
const rendering = document.getElementById("render");
const render_name = document.getElementById("render-name");
const spinner = document.getElementById("spinner");
const spinner_text = document.getElementById("spinner-text");

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
        switch_fullscreen()
    }
})
