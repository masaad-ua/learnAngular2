System.register(['./mail-server.component', './show-date.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mail_server_component_1, show_date_directive_1;
    var MAIL_DIRECTIVES;
    return {
        setters:[
            function (mail_server_component_1_1) {
                mail_server_component_1 = mail_server_component_1_1;
            },
            function (show_date_directive_1_1) {
                show_date_directive_1 = show_date_directive_1_1;
            }],
        execute: function() {
            MAIL_DIRECTIVES = [
                mail_server_component_1.default,
                show_date_directive_1.default
            ];
            exports_1("MAIL_DIRECTIVES", MAIL_DIRECTIVES);
            exports_1("MailServerComponent", mail_server_component_1.default);
            exports_1("ShowDate", show_date_directive_1.default);
        }
    }
});
