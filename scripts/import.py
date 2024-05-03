from hashlib import md5
import bpy, json

# Extrae info del archivo .blend
info = {
    "hash": "",
    "name": bpy.data.filepath.split("\\")[-1],
    "filepath": bpy.data.filepath,
    "checked": True,
    "start": bpy.data.scenes[0].frame_start,
    "end": bpy.data.scenes[0].frame_end,
    "engine": bpy.data.scenes[0].render.engine,
    "quality": bpy.data.scenes["Scene"].render.resolution_percentage
}

# Calcula el Hash del archivo
with open(info["filepath"], "rb") as blendfile:
    info["hash"] = md5(blendfile.read()).hexdigest()

# Crea un archivo temporal con la config de render local del archivo
with open(f"temp\\{info['hash']}.json", "w") as blendfile:
    json.dump(info, blendfile, indent=4)

# Agrega el archivo a blendfile.json
l = []
with open(f"temp\\blendfile.json", "r") as blendlist:
    l = json.load(blendlist)

if l.count(info["hash"] + ".json") == 0:
    with open(f"temp\\blendfile.json", "w") as blendlist:
        l.append(info["hash"] + ".json")
        json.dump(l, blendlist, indent=4)

