System.register(['@angular/core', './shared/shared', '@angular/http', './mail/mail', './users/users', '@angular/router-deprecated', './login/login'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shared_1, http_1, mail_1, users_1, router_deprecated_1, login_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (mail_1_1) {
                mail_1 = mail_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            //import {MailEditorComponent } from './tasks/tasks';
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'mail-app',
                        //directives: [BUTTON_DIRECTIVES, MAIL_DIRECTIVES],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [shared_1.SHARED_PROVIDERS, http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS],
                        templateUrl: 'app/app.component.html'
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: 'mail',
                            name: 'MailServerComponent',
                            component: mail_1.MailServerComponent,
                            useAsDefault: true
                        },
                        {
                            path: 'mail/editor',
                            name: 'MailEditorComponent',
                            component: mail_1.MailEditorComponent
                        },
                        {
                            path: 'users',
                            name: 'UsersComponent',
                            component: users_1.UsersComponent
                        },
                        {
                            path: 'login',
                            name: 'LoginComponent',
                            component: login_1.LoginComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("default", AppComponent);
        }
    }
});
