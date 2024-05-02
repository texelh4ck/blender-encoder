const { blend_py } = require('./py_exec');

let BlendList = []

const add = (name) => {
    blend_py(name, "import")
}

module.exports = {
    BlendList,
    add
}