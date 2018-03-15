System.register(['./services/list-of-letters.service', './services/authentication.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var list_of_letters_service_1, authentication_service_1;
    var SHARED_PROVIDERS;
    return {
        setters:[
            function (list_of_letters_service_1_1) {
                list_of_letters_service_1 = list_of_letters_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            SHARED_PROVIDERS = [
                list_of_letters_service_1.default,
                authentication_service_1.default
            ];
            exports_1("ListOfAllLetters", list_of_letters_service_1.default);
            exports_1("AuthenticationService", authentication_service_1.default);
            exports_1("SHARED_PROVIDERS", SHARED_PROVIDERS);
        }
    }
});
