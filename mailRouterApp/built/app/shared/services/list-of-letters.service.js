System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var ListOfAllLetters;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ListOfAllLetters = (function () {
                function ListOfAllLetters(http) {
                    var _this = this;
                    this.http = http;
                    this.arr = [];
                    this.dataUrl = '/app/shared/data/list-letters.json';
                    this.arrFeed = new Observable_1.Observable(function (observer) {
                        _this.arrObserver = observer;
                    });
                    this.fetchArr();
                }
                ListOfAllLetters.prototype.fetchArr = function () {
                    var _this = this;
                    this.http.get(this.dataUrl)
                        .map(function (response) { return response.json(); })
                        .map(function (stream) { return stream.map(function (res) {
                        return {
                            name: res.name,
                            address: res.address,
                            text: res.text,
                            inbox: res.inbox,
                            read: res.read,
                            trash: res.trash,
                            id: res.id,
                            date: res.date
                        };
                    }); })
                        .subscribe(function (arrs) {
                        _this.arr = arrs;
                        arrs.forEach(function (elem) { return _this.arrObserver.next(elem); });
                    }, function (error) { return console.log(error); });
                };
                ListOfAllLetters = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ListOfAllLetters);
                return ListOfAllLetters;
            }());
            exports_1("default", ListOfAllLetters);
        }
    }
});
