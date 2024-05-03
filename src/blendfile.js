const { blendlist } = require("./config");
const { blend_py } = require("./py_exec");
const fs = require("fs");

const add = async(name) => {
    blend_py(name, "import")
}

const get = () => {
  const data = fs.readFileSync(blendlist, { encoding: "utf-8" });
  return JSON.parse(data);
}

// Lee los datos de un archivo especificado
const data = (file) => {
    const data = fs.readFileSync("./temp/" + file, { encoding: "utf-8" });
    return JSON.parse(data);
}

module.exports = {
    add,
    get,
    data
}