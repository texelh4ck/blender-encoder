from getopt import getopt
import bpy, sys

# options = getopt(sys.argv[5:], ['bencoder='])
# print(options)

# bpy.ops.render.render(animation=False, write_still=False, use_viewport=False, layer="", scene="")

original = bpy.data.scenes["Scene"].render.filepath

bpy.data.scenes["Scene"].render.filepath = "C:/tmp/bencoder/" + bpy.data.filepath.split('\\')[-1] + "_preview"

bpy.ops.render.render(write_still=True)

bpy.data.scenes["Scene"].render.filepath = original