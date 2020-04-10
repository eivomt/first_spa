import b4w from "blend4web";

var m_app     = b4w.app;
var m_data    = b4w.data;
var m_geom    = b4w.geometry;
var m_scs     = b4w.scenes;
var m_obj     = b4w.objects;
var m_trans   = b4w.transform;
var m_cfg     = b4w.config;
var m_version = b4w.version;

var DEBUG = (m_version.type() === "DEBUG");

var APP_ASSETS_PATH = m_cfg.get_assets_path("dynamic_geometry");


function init() {
    m_app.init({
        canvas_container_id: "main_canvas_container",
        callback: init_cb,
        physics_enabled: false,
        show_fps: true,
        alpha: false,
        autoresize: true,
        assets_dds_available: !DEBUG,
        assets_min50_available: !DEBUG,
        console_verbose: true
    });
}

function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }
    load();
}

function load() {
    m_data.load(APP_ASSETS_PATH + "/box.json", load_cb);
}

function load_cb(data_id) {
    m_app.enable_camera_controls(false, false, false, null, true);

}

init();