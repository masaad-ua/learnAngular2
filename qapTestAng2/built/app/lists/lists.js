System.register(['./lists.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lists_component_1;
    var LISTS_DIRECTIVES;
    return {
        setters:[
            function (lists_component_1_1) {
                lists_component_1 = lists_component_1_1;
            }],
        execute: function() {
            LISTS_DIRECTIVES = [
                lists_component_1.default,
            ];
            exports_1("LISTS_DIRECTIVES", LISTS_DIRECTIVES);
            exports_1("list", lists_component_1.default);
        }
    }
});
