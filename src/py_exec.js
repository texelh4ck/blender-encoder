const { exec } = require("child_process");

const bin = "python";
const blender = "D:\\3Ddesintegration.blend";

const pyexec = (script = "", callout) => {
  exec(`${bin} scripts/${script}.py`, (error, stdout, stdin) => {
    callout(stdout);
  });
};

const blend_py = (file = "", script = "", callout) => {
  exec(
    `blender -b ${file} -P scripts/${script}.py`,
    (error, stdout, stdin) => {
        if (callout != null){
            callout(stdout);
        }
    }
  );
};

module.exports = { pyexec, blend_py };
