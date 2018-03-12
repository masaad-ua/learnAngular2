System.register(['./mail-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mail_form_component_1;
    var FORM_DIRECTIVES;
    return {
        setters:[
            function (mail_form_component_1_1) {
                mail_form_component_1 = mail_form_component_1_1;
            }],
        execute: function() {
            FORM_DIRECTIVES = [
                mail_form_component_1.default,
            ];
            exports_1("FORM_DIRECTIVES", FORM_DIRECTIVES);
            exports_1("MailForm", mail_form_component_1.default);
        }
    }
});
