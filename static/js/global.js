const { blend_add, blend_get, blend_data, blend_change, blend_del } = require("../src/blendfile");
const { render_frame, render_anim } = require("../src/renders");
const { dialog } = require("electron");
const { welcome } = require("../src/config");

let selected = null;

if (welcome) {
    document.getElementById("welcome").style.animation = "welcome 3s 1";
    document.getElementById("container").style.animation = "init 3s 1";
}