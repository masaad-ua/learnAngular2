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
var CountdownComponent = (function () {
    function CountdownComponent() {
        var _this = this;
        this.complete = new core_1.EventEmitter();
        this.progress = new core_1.EventEmitter();
        this.intervalId = setInterval(function () { return _this.tick(); }, 300);
    }
    CountdownComponent.prototype.tick = function () {
        if (--this.seconds < 1) {
            clearInterval(this.intervalId);
            this.complete.emit(null);
        }
        this.progress.emit(this.seconds);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CountdownComponent.prototype, "seconds", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CountdownComponent.prototype, "complete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CountdownComponent.prototype, "progress", void 0);
    CountdownComponent = __decorate([
        core_1.Component({
            selector: 'countdown',
            template: "<h1> Time: left: {{seconds}}</h1>",
            styles: ['h1 { color: #900 }'],
            encapsulation: core_1.ViewEncapsulation.Emulated
        }),
        __metadata("design:paramtypes", [])
    ], CountdownComponent);
    return CountdownComponent;
}());
var PomodoroTimerComponent = (function () {
    function PomodoroTimerComponent() {
    }
    PomodoroTimerComponent.prototype.onCountdownCompleted = function () {
        console.log("Time up!");
    };
    PomodoroTimerComponent = __decorate([
        core_1.Component({
            selector: 'pomodoro-timer',
            directives: [CountdownComponent],
            templateUrl: '/built/pomodoro-timer.html',
            styleUrl: '/built/style.css'
        })
    ], PomodoroTimerComponent);
    return PomodoroTimerComponent;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [PomodoroTimerComponent, CountdownComponent],
            bootstrap: [PomodoroTimerComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
