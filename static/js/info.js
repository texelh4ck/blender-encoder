const info_engine = document.getElementById("info_engine");
const info_frame_range = document.getElementById("info_frame_range");
const info_frame_start = document.getElementById("info_frame_start");
const info_frame_end = document.getElementById("info_frame_end");
const info_w = document.getElementById("info_w");
const info_h = document.getElementById("info_h");
const info_rate = document.getElementById("info_rate");

const setInfo = (file) => {
    const data = blend_data(file);
    info_engine.innerHTML = data.engine;
    info_frame_range.innerHTML = data.end - data.start + 1;
    info_frame_start.innerHTML = data.start;
    info_frame_end.innerHTML = data.end;
    info_w.innerHTML = data.out.wxh[0];
    info_h.innerHTML = data.out.wxh[1];
    info_rate.innerHTML = data.out.fps;
}