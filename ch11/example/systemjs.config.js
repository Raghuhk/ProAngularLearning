(function (global) {
    var paths = {
        "@angular/*": "node_modules/@angular/*",
		"rxjs/*":"node_modules/rxjs/bundles/Rx.min.js"
    }
    var packages = { "app": {} };
    var angularModules = ["common", "compiler",
     "core", "platform-browser", "platform-browser-dynamic",
     "forms", "http", "router"];
    angularModules.forEach(function (pkg) {
        packages["@angular/" + pkg] = {
            main: "/bundles/" + pkg + ".umd.min.js"
        };
    });
    System.config({ paths: paths, packages: packages });
})(this);
