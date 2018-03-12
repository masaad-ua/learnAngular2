System.register(['@angular/core', './lists/lists', './shared/shared', '@angular/http', "./form/form"], function(exports_1, context_1) {
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
    var core_1, lists_1, shared_1, http_1, form_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lists_1_1) {
                lists_1 = lists_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            }],
        execute: function() {
            //import {BUTTON_DIRECTIVES} from './button/button';
            //import {MAIL_DIRECTIVES} from './mail/mail';
            //import {USERS_DIRECTIVES} from './users/users';
            //
            //import {SHARED_PROVIDERS} from './shared/shared';
            //import {HTTP_PROVIDERS} from '@angular/http';
            //
            //import { MailEditorComponent, MailServerComponent } from './mail/mail';
            //import { UsersComponent } from './users/users'
            //import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
            //import { LoginComponent } from './login/login';
            //import {MailEditorComponent } from './tasks/tasks';
            AppComponent = (function () {
                function AppComponent() {
                    this.swiped = true;
                    this.arrayOfCheckedItem = [];
                }
                AppComponent.prototype.onSwiped = function (arg) {
                    this.swiped = arg;
                    //console.log(arg);
                };
                AppComponent.prototype.updateArrayOfCheckedItems = function (arg) {
                    console.log(arg);
                    console.log(this.arrayOfCheckedItem);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'testqap-app',
                        directives: [lists_1.LISTS_DIRECTIVES, form_1.FORM_DIRECTIVES, shared_1.SHARED_DIRECTIVES],
                        providers: [shared_1.SHARED_PROVIDERS, http_1.HTTP_PROVIDERS],
                        //directives: [ROUTER_DIRECTIVES],
                        //providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
                        templateUrl: 'app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("default", AppComponent);
        }
    }
});
