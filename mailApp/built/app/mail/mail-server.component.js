System.register(['@angular/core', '../shared/shared', '../button/button', './show-date.directive'], function(exports_1, context_1) {
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
    var core_1, shared_1, button_1, show_date_directive_1;
    var MailServerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (show_date_directive_1_1) {
                show_date_directive_1 = show_date_directive_1_1;
            }],
        execute: function() {
            MailServerComponent = (function () {
                function MailServerComponent(arrayOfLetter) {
                    this.arrayOfLetter = arrayOfLetter;
                    this.listOfCurrentLetter = [];
                    this.listOfAllLetter = [];
                    this.listOfAllLetter = this.arrayOfLetter.arr;
                    this.changeList("inbox");
                }
                MailServerComponent.prototype.changeList = function (arg) {
                    this.showFieldOfLetter = false;
                    this.listOfCurrentLetter = this.listOfAllLetter.filter(function (elem) {
                        //if(arg === "read" || arg === "inbox" && elem.trash === false){
                        //    return (elem[arg] === true && elem.trash === false);
                        //}
                        //else if(arg === "unread" && elem.trash === false){
                        //    return (elem.read === false && elem.trash === false);
                        //}
                        //else if(arg === "outbox" && elem.trash === false){
                        //    return (elem.inbox === false && elem.trash === false);
                        //}
                        //else if(arg === "trash" && elem.trash === true){
                        //    return (elem[arg] === true);
                        //}
                        switch (true) {
                            case (arg === "read" || arg === "inbox" && elem.trash === false):
                                return (elem[arg] === true && elem.trash === false);
                            case (arg === "unread" && elem.trash === false):
                                return (elem.read === false && elem.trash === false);
                            case (arg === "outbox" && elem.trash === false):
                                return (elem.inbox === false && elem.trash === false);
                            case (arg === "trash" && elem.trash === true):
                                return (elem[arg] === true);
                        }
                    });
                };
                MailServerComponent.prototype.readThisLetter = function (i) {
                    var _this = this;
                    this.listOfAllLetter.forEach(function (elem, index, arr) {
                        if (elem.id === i) {
                            _this.textLetter = elem.text;
                        }
                    });
                    this.showFieldOfLetter = true;
                };
                MailServerComponent = __decorate([
                    core_1.Component({
                        selector: 'mail-server',
                        directives: [show_date_directive_1.default, button_1.ButtonListComponent],
                        templateUrl: 'app/mail/mail-server.component.html',
                        styleUrls: ['app/mail/mail-server.component.css']
                    }), 
                    __metadata('design:paramtypes', [shared_1.ListOfAllLetters])
                ], MailServerComponent);
                return MailServerComponent;
            }());
            exports_1("default", MailServerComponent);
        }
    }
});
