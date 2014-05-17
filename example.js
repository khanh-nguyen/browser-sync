
var browserSync = require("./lib/index");
//var lr = require("./live-reload");

console.time("init");

var files = ["test/fixtures/assets/*", "test/fixtures/*.html"];
//files = ["/Users/shakyshane/Sites/swoon-static/assets/css/**"]

var options = {
    server: {
        baseDir: ["test/fixtures"]
    },
//    proxy: "swoon.static/store-home.php",
    ghostMode: {
        forms: {
            submit: false
        }
    },
    ports: {
        min: 4000,
        max: 4003
    },
    open: false,
    logConnections: false,
    minify: true,
    notify: true,
    xip: false,
    browser: ["google chrome"]
};

//var clientScript = require("/Users/shakyshane/Sites/browser-sync-modules/browser-sync-client/index");
//
//browserSync.use("client:script", clientScript.middleware, function (err) {
//    console.log(err);
//});

var bs = browserSync.init(files, options, function (err, bs) {
    console.timeEnd("init");
//    setTimeout(function () {
//        browserSync.notify("5 Seconds have passed!");
//    }, 5000);
});
