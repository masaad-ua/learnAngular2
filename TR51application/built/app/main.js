System.register(['rxjs/add/operator/map', '@angular/platform-browser-dynamic', './app.component'], function(exports_1) {
    var platform_browser_dynamic_1, app_component_1;
    return {
        setters:[
            function (_1) {},
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.default, []);
        }
    }
});