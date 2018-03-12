System.register(['./services/get-lists.service', './directives/swipe.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var get_lists_service_1, swipe_directive_1;
    var SHARED_PROVIDERS, SHARED_DIRECTIVES;
    return {
        setters:[
            function (get_lists_service_1_1) {
                get_lists_service_1 = get_lists_service_1_1;
            },
            function (swipe_directive_1_1) {
                swipe_directive_1 = swipe_directive_1_1;
            }],
        execute: function() {
            SHARED_PROVIDERS = [
                get_lists_service_1.default,
            ];
            SHARED_DIRECTIVES = [
                swipe_directive_1.default
            ];
            exports_1("SHARED_PROVIDERS", SHARED_PROVIDERS);
            exports_1("GetLists", get_lists_service_1.default);
            exports_1("SHARED_DIRECTIVES", SHARED_DIRECTIVES);
            exports_1("SwipeListener", swipe_directive_1.default);
        }
    }
});
