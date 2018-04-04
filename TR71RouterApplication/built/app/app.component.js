System.register(["@angular/core", "./shared/shared", "@angular/http", "@angular/router-deprecated", "./timer/timer", "./tasks/tasks"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, shared_1, http_1, router_deprecated_1, timer_1, tasks_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (timer_1_1) {
                timer_1 = timer_1_1;
            },
            function (tasks_1_1) {
                tasks_1 = tasks_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-app',
                        //Теперь заменим директивы в модуле AppComponent символом R0UTE_
                        //DIRECTIVES, так как отпала необходимость объявлять в фасаде компоненты,
                        //размещенные в шаблоне. Маршрутизатор сделает это сам:
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [shared_1.SHARED_PROVIDERS, http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS],
                        styles: ["\n      .router-link-active {\n        font-weight: bold;\n        border-bottom: 2px #d9534f solid;\n      }\n  "],
                        templateUrl: 'app/app.component.html'
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '', name: 'Home', redirectTo: ['TasksComponent'] },
                        { path: 'tasks', name: 'TasksComponent', component: tasks_1.TasksComponent, useAsDefault: true },
                        { path: 'tasks/editor', name: 'TaskEditorComponent', component: tasks_1.TaskEditorComponent },
                        { path: 'timer/...', name: 'TimerComponent', component: timer_1.TimerComponent }
                        //loader: () => {
                        //                  return new Promise(resolve => {
                        //                    setTimeout(() => resolve(TimerComponent), 500);
                        //                  });
                        //                } }
                    ])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("default", AppComponent);
        }
    };
});
