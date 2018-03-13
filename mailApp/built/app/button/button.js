System.register(['./button-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var button_list_component_1;
    var BUTTON_DIRECTIVES;
    return {
        setters:[
            function (button_list_component_1_1) {
                button_list_component_1 = button_list_component_1_1;
            }],
        execute: function() {
            BUTTON_DIRECTIVES = [
                button_list_component_1.default
            ];
            exports_1("ButtonListComponent", button_list_component_1.default);
            exports_1("BUTTON_DIRECTIVES", BUTTON_DIRECTIVES);
        }
    }
});
