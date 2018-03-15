System.register(['@angular/core'], function(exports_1, context_1) {
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
    var ListOfAllLetters;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ListOfAllLetters = (function () {
                function ListOfAllLetters() {
                    this.arr = [];
                    this.arr = [
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
                ListOfAllLetters = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ListOfAllLetters);
                return ListOfAllLetters;
            }());
            exports_1("default", ListOfAllLetters);
        }
    }
});
