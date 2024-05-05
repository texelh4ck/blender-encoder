const { blendlist } = require("./config");
const { blend_py } = require("./py_exec");
const fs = require("fs");

const blend_add = async(name) => {
    await blend_py(name, "import")
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

const blend_del = (file) => {
    let data = fs.readFileSync(blendlist, { encoding: "utf-8" });
    data = JSON.parse(data);
    let newData = data.filter(blend => blend != file)
    fs.writeFileSync(blendlist, JSON.stringify(newData))
}

module.exports = {
    blend_add,
    blend_get,
    blend_data,
    blend_change,
    blend_del
}