const { blendlist } = require("./config");
const { blend_py } = require("./py_exec");
const fs = require("fs");

const blend_add = async(name) => {
    blend_py(name, "import")
}

const blend_get = () => {
  const data = fs.readFileSync(blendlist, { encoding: "utf-8" });
  return JSON.parse(data);
}

// Lee los datos de un archivo especificado
const blend_data = (file) => {
    const data = fs.readFileSync("./temp/" + file, { encoding: "utf-8" });
    return JSON.parse(data);
}

const blend_change = (file, key, value) => {
    let data = JSON.parse(fs.readFileSync("./temp/" + file, { encoding: "utf-8" }));
    data[key] = value
    fs.writeFileSync("./temp/" + file, JSON.stringify(data));
}

module.exports = {
    blend_add,
    blend_get,
    blend_data,
    blend_change
}