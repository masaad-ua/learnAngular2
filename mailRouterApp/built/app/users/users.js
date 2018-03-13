System.register(['./users.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var users_component_1;
    var USERS_DIRECTIVES;
    return {
        setters:[
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            }],
        execute: function() {
            //import MailEditorComponent from './mail-editor.component';
            //import ShowDate from './show-date.directive';
            USERS_DIRECTIVES = [
                users_component_1.default,
            ];
            exports_1("USERS_DIRECTIVES", USERS_DIRECTIVES);
            exports_1("UsersComponent", users_component_1.default);
        }
    }
});
