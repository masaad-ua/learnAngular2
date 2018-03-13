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
var PomodoroTimerComponent = (function () {
    function PomodoroTimerComponent() {
        var _this = this;
        this.minutes = 24;
        this.seconds = 59;
        setInterval(function () { return _this.tick(); }, 1000);
    }
    PomodoroTimerComponent.prototype.resetPomodoro = function () {
        this.minutes = 24;
        this.seconds = 59;
    };
    PomodoroTimerComponent.prototype.tick = function () {
        if (--this.seconds < 0) {
            this.seconds = 59;
            if (--this.minutes < 0) {
                this.resetPomodoro();
            }
        }
    };
    PomodoroTimerComponent = __decorate([
        core_1.Component({
            selector: 'pomodoro-timer',
            template: '<h1>{{ minutes}} : {{ seconds}}</h1>'
        }),
        __metadata("design:paramtypes", [])
    ], PomodoroTimerComponent);
    return PomodoroTimerComponent;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [PomodoroTimerComponent],
            bootstrap: [PomodoroTimerComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
