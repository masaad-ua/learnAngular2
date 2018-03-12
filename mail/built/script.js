"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var listOfAllLetters = (function () {
    function listOfAllLetters() {
        this.listOfAllLetter = [];
        this.listOfAllLetter = [
            {
                name: "Jastin Biber",
                address: "jasnin@mail.ru",
                text: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0437\u043D\u0430\u0435\u0442, \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0442\u0435\u043A\u0441\u0442-\u00AB\u0440\u044B\u0431\u0430\u00BB.\n                          \u0422\u0435\u043A\u0441\u0442 \u044D\u0442\u043E\u0442, \u043D\u0435\u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435, \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043E\u0431\u0438\u0442\u0430\u0442\u0435\u043B\u044F\u043C \u0432\u043E\u0434\u043E\u0435\u043C\u043E\u0432.",
                inbox: true,
                read: true,
                trash: false,
                id: 1,
                date: "Jun 23 2015"
            },
            {
                name: "Brendon Aik",
                address: "brendon@mail.ru",
                text: "\u041D\u0435 \u0441\u043B\u0435\u0434\u0443\u0435\u0442, \u043E\u0434\u043D\u0430\u043A\u043E \u0437\u0430\u0431\u044B\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0445 \u043F\u043B\u0430\u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u0432 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0435\u043F\u0435\u043D\u0438\n                            \u043E\u0431\u0443\u0441\u043B\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0439, \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447.",
                inbox: false,
                read: true,
                trash: false,
                id: 2,
                date: "Jun 20 2015"
            },
            {
                name: "Duglas Crokford",
                address: "crokford@mail.ru",
                text: " Q \u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447. \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447. ",
                inbox: true,
                read: false,
                trash: false,
                id: 3,
                date: "Jun 21 2015"
            },
            {
                name: "Maksym Osypchuk",
                address: "osypchuk@mail.ru",
                text: " \u0421 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0432\u043B\u0435\u0447\u0435\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u0438 \u043C\u043E\u0434\u0435\u0440\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u0439,\n                            \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447.",
                inbox: false,
                read: false,
                trash: false,
                id: 4,
                date: "Jun 22 2015"
            },
            {
                name: "Aleksandr Duma",
                address: "duma@mail.ru",
                text: " \u0417\u043D\u0430\u0447\u0438\u043C\u043E\u0441\u0442\u044C \u044D\u0442\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u0430, \u0447\u0442\u043E \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0444\u043E\u0440\u043C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u043E\u0431\u0443\u0441\u043B\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u0438\u044F.\n                            \u0420\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0438 \u0431\u043E\u0433\u0430\u0442\u044B\u0439 \u043E\u043F\u044B\u0442 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0438 \u0441\u0444\u0435\u0440\u0430 \u043D\u0430\u0448\u0435\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0432 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u043E\u0431\u0443\u0441\u043B\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
                inbox: true,
                read: true,
                trash: true,
                id: 5,
                date: "Jun 23 2015"
            }
        ];
    }
    return listOfAllLetters;
}());
var ShowDate = (function () {
    function ShowDate() {
    }
    ShowDate.prototype.onMouseOver = function () {
        this.dateLast = this.dateLetterShow.innerHTML;
        this.dateLetterShow.innerHTML = this.dateLetter;
    };
    ShowDate.prototype.onMouseOut = function () {
        this.dateLetterShow.innerHTML = this.dateLast;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ShowDate.prototype, "dateLetter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ShowDate.prototype, "dateLetterShow", void 0);
    __decorate([
        core_1.HostListener('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShowDate.prototype, "onMouseOver", null);
    __decorate([
        core_1.HostListener('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShowDate.prototype, "onMouseOut", null);
    ShowDate = __decorate([
        core_1.Directive({
            selector: '[data-id]'
        })
    ], ShowDate);
    return ShowDate;
}());
var ButtonListComponent = (function () {
    function ButtonListComponent() {
        this.buttonArray = ["inbox", "read", "unread", "outbox", "trash"];
        this.buttonWasClicked = new core_1.EventEmitter();
    }
    ButtonListComponent.prototype.clickButton = function (arg) {
        this.buttonWasClicked.emit(arg);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ButtonListComponent.prototype, "buttonWasClicked", void 0);
    ButtonListComponent = __decorate([
        core_1.Component({
            selector: 'button-list',
            templateUrl: '/built/button-list.html',
        })
    ], ButtonListComponent);
    return ButtonListComponent;
}());
var MailServerComponent = (function () {
    function MailServerComponent() {
        this.listOfCurrentLetter = [];
        this.listOfAllLetter = [];
        var list = new listOfAllLetters();
        this.listOfAllLetter = list.listOfAllLetter;
        this.changeList("inbox");
    }
    MailServerComponent.prototype.changeList = function (arg) {
        this.showFieldOfLetter = false;
        this.listOfCurrentLetter = this.listOfAllLetter.filter(function (elem, index, arr) {
            switch (true) {
                case (arg === "read" || arg === "inbox" && elem.trash === false):
                    return (elem[arg] === true && elem.trash === false);
                    break;
                case (arg === "unread" && elem.trash === false):
                    return (elem.read === false && elem.trash === false);
                    break;
                case (arg === "outbox" && elem.trash === false):
                    return (elem.inbox === false && elem.trash === false);
                    break;
                case (arg === "trash" && elem.trash === true):
                    return (elem[arg] === true);
                    break;
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
            directives: [ButtonListComponent, ShowDate],
            templateUrl: '/built/mail-server.html'
        }),
        __metadata("design:paramtypes", [])
    ], MailServerComponent);
    return MailServerComponent;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            providers: [listOfAllLetters],
            declarations: [
                ShowDate,
                ButtonListComponent,
                MailServerComponent
            ],
            bootstrap: [MailServerComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
