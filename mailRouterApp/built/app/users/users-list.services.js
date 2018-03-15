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
    var ListOfUsers;
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
            ListOfUsers = (function () {
                function ListOfUsers(http) {
                    var _this = this;
                    this.http = http;
                    this.users = [];
                    this.dataUrl = '/app/shared/data/list-users.json';
                    this.dataLocal = localStorage.getItem("users");
                    this.usersFeed = new Observable_1.Observable(function (observer) {
                        _this.userObserver = observer;
                    });
                    this.fetchUsers();
                }
                ListOfUsers.prototype.fetchUsers = function () {
                    var _this = this;
                    this.http.get(this.dataLocal || this.dataUrl)
                        .map(function (response) { return response.json(); })
                        .map(function (stream) { return stream.map(function (res) {
                        return {
                            name: res.name,
                            secondName: res.secondName,
                            id: res.id
                        };
                    }); })
                        .subscribe(function (arrs) {
                        _this.users = arrs;
                        console.log(_this.users);
                        arrs.forEach(function (elem) { return _this.userObserver.next(elem); });
                    }, function (error) { return console.log(error); });
                };
                ListOfUsers = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ListOfUsers);
                return ListOfUsers;
            }());
            exports_1("default", ListOfUsers);
        }
    }
});
