System.register(["@angular/core", "./timer/timer", "./tasks/tasks", "./shared/shared"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, timer_1, tasks_1, shared_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (timer_1_1) {
                timer_1 = timer_1_1;
            },
            function (tasks_1_1) {
                tasks_1 = tasks_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-app',
                        directives: [timer_1.TIMER_DIRECTIVES, tasks_1.TASKS_DIRECTIVES],
                        providers: [shared_1.SHARED_PROVIDERS],
                        template: "\n    <nav class=\"navbar navbar-default navbar-static-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <strong class=\"navbar-brand\">My Pomodoro App</strong>\n        </div>\n      </div>\n    </nav>\n\n    <pomodoro-timer-widget></pomodoro-timer-widget>\n    <pomodoro-tasks></pomodoro-tasks>\n    "
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("default", AppComponent);
        }
    };
});
