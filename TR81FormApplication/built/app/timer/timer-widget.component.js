System.register(['@angular/core', '@angular/router-deprecated', '../shared/shared'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, shared_1;
    var TimerWidgetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            TimerWidgetComponent = (function () {
                function TimerWidgetComponent(settingsService, routeParams, taskService) {
                    this.settingsService = settingsService;
                    this.routeParams = routeParams;
                    this.taskService = taskService;
                    this.buttonLabelsMap = settingsService.labelsMap.timer;
                }
                TimerWidgetComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.resetPomodoro();
                    setInterval(function () { return _this.tick(); }, 1000);
                    var taskIndex = parseInt(this.routeParams.get('id'));
                    if (!isNaN(taskIndex)) {
                        this.taskName = this.taskService.taskStore[taskIndex].name;
                    }
                };
                TimerWidgetComponent.prototype.resetPomodoro = function () {
                    this.isPaused = true;
                    this.minutes = this.settingsService.timerMinutes - 1;
                    this.seconds = 59;
                    this.buttonLabelKey = 'start';
                };
                TimerWidgetComponent.prototype.tick = function () {
                    if (!this.isPaused) {
                        this.buttonLabelKey = 'pause';
                        if (--this.seconds < 0) {
                            this.seconds = 59;
                            if (--this.minutes < 0) {
                                this.resetPomodoro();
                            }
                        }
                    }
                };
                TimerWidgetComponent.prototype.togglePause = function () {
                    this.isPaused = !this.isPaused;
                    if (this.minutes < this.settingsService.timerMinutes || this.seconds < 59) {
                        this.buttonLabelKey = this.isPaused ? 'resume' : 'pause';
                    }
                };
                TimerWidgetComponent.prototype.routerCanReuse = function () {
                    return true;
                };
                TimerWidgetComponent.prototype.routerOnReuse = function () {
                    this.taskName = null;
                    this.isPaused = false;
                    this.resetPomodoro();
                };
                TimerWidgetComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-timer-widget',
                        template: "\n    <div class=\"text-center\">\n      <img src=\"/app/shared/assets/img/pomodoro.png\" alt=\"Pomodoro\">\n      <h3><small>{{ taskName }}</small></h3>\n      <h1> {{ minutes }}:{{ seconds  | number: '2.0' }} </h1>\n      <p>\n        <button (click)=\"togglePause()\" class=\"btn btn-danger\">\n        {{ buttonLabelKey | i18nSelect: buttonLabelsMap }}\n        </button>\n      </p>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [shared_1.SettingsService, router_deprecated_1.RouteParams, shared_1.TaskService])
                ], TimerWidgetComponent);
                return TimerWidgetComponent;
            }());
            exports_1("default", TimerWidgetComponent);
        }
    }
});
