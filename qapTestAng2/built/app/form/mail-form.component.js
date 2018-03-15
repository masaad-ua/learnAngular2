System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var MailForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MailForm = (function () {
                function MailForm() {
                    this.form = {};
                    this.nameFocused = false;
                    this.emailFocused = false;
                }
                MailForm.prototype.chooseClass = function (elementGroup) {
                    var classItem;
                    switch (elementGroup) {
                        case 1:
                            return classItem = "group";
                        case 2:
                            return classItem = "group second";
                        case 3:
                            return classItem = "group third";
                        default:
                            return classItem = "";
                    }
                };
                MailForm.prototype.itWasFocused = function (e) {
                    if (e.target.labels.item(0).innerText === "Name") {
                        this.nameFocused = true;
                    }
                    else if (e.target.labels.item(0).innerText === "Email") {
                        this.emailFocused = true;
                    }
                };
                MailForm.prototype.itWasBlured = function (e) {
                    if (e.target.labels.item(0).innerText === "Name") {
                        this.nameFocused = false;
                    }
                    else if (e.target.labels.item(0).innerText === "Email") {
                        this.emailFocused = false;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MailForm.prototype, "array", void 0);
                MailForm = __decorate([
                    core_1.Component({
                        selector: "mail-form",
                        templateUrl: 'app/form/mail-form.component.html',
                        styleUrls: ['app/form/mail-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MailForm);
                return MailForm;
            }());
            exports_1("default", MailForm);
        }
    }
});
