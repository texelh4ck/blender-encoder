const { exec } = require("child_process");

const render_frame = (file) => {
  return new Promise((resolve, reject) => {
    exec(`blender -b ${file} -P scripts/render_frame_test.py`, resolve);
  });
};

const render_anim = (file) => {
  return new Promise((resolve, reject) => {
    exec(`blender -b ${file} -P scripts/render_animation.py`, resolve);
  });
};

module.exports = {render_frame, render_anim}