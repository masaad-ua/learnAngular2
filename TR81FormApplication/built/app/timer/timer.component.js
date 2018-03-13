System.register(['@angular/core', '@angular/router-deprecated', './timer-widget.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, timer_widget_component_1;
    var TimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (timer_widget_component_1_1) {
                timer_widget_component_1 = timer_widget_component_1_1;
            }],
        execute: function() {
            TimerComponent = (function () {
                function TimerComponent() {
                }
                TimerComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-timer',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        template: '<router-outlet></router-outlet>'
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/task/:id', name: 'TaskTimer', component: timer_widget_component_1.default },
                        { path: '/', name: 'GenericTimer', component: timer_widget_component_1.default, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], TimerComponent);
                return TimerComponent;
            }());
            exports_1("default", TimerComponent);
        }
    }
});
