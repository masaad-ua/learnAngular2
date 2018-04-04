System.register(["rxjs/add/operator/map", "@angular/platform-browser-dynamic", "./app.component", "@angular/core", "@angular/common"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, core_1, common_1;
    return {
        setters: [
            function (_1) {
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            //bootstrap(AppComponent,[provide(APP_BASE_HREF, {
            //    useValue: '/my-apps/pomodoro-app'})]);
            //bootstrap(AppComponent,[]);
            platform_browser_dynamic_1.bootstrap(app_component_1.default, [core_1.provide(common_1.LocationStrategy, {
                    useClass: common_1.HashLocationStrategy
                })]);
        }
    };
});
