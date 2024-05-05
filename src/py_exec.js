const { exec } = require("child_process");
const { resolve } = require("path");

const bin = "python";
const blender = "D:\\3Ddesintegration.blend";

const pyexec = (script = "", callout) => {
  return new Promise((resolve, reject) => {
    exec(`${bin} scripts/${script}.py`, resolve);
  })
};

const blend_py = (file = "", script = "", callout) => {
  return new Promise((resolve, reject) => {
    exec(`blender -b ${file} -P scripts/${script}.py`, resolve);
  })
};

module.exports = { pyexec, blend_py };
