System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService(http) {
                    this.http = http;
                    this.userIsloggedIn = new core_1.EventEmitter();
                }
                AuthenticationService.prototype.login = function (_a) {
                    var _this = this;
                    var username = _a.username, password = _a.password;
                    return new Promise(function (resolve) {
                        var validCredentials = false;
                        // 0ПРИМЕЧАНИЕ: в реальном приложении эта проверка
                        // должна выполняться удаленной службой:
                        if (username === 'max@mail.com' && password === '111') {
                            validCredentials = true;
                            window.sessionStorage.setItem('token', 'eyJhbGciOi');
                        }
                        _this.userIsloggedIn.emit(validCredentials);
                        resolve(validCredentials);
                    });
                };
                AuthenticationService.prototype.httpLogin = function (credentials) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        var url = '/api/authentication'; // Or your own API Auth url
                        var body = JSON.stringify(credentials);
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var options = new http_1.RequestOptions({ headers: headers });
                        _this.http.post(url, body, options)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (authResponse) {
                            var validCredentials = false;
                            if (authResponse && authResponse.token) {
                                validCredentials = true;
                                window.sessionStorage.setItem('token', authResponse.token);
                            }
                            _this.userIsloggedIn.emit(validCredentials);
                            resolve(validCredentials);
                        }, function (error) { return console.log(error); });
                    });
                };
                AuthenticationService.prototype.logout = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        window.sessionStorage.removeItem('token');
                        _this.userIsloggedIn.emit(false);
                        resolve(true);
                    });
                };
                AuthenticationService.isAuthorized = function () {
                    return !!window.sessionStorage.getItem('token');
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("default", AuthenticationService);
        }
    }
});
