const { exec } = require("child_process");

const render_frame = (file) => {
  return new Promise((resolve, reject) => {
    exec(`blender -b ${file} -P scripts/render_frame.py`, resolve);
  });
};

module.exports = {render_frame}