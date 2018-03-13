System.register(['@angular/core', '@angular/platform-browser', '@angular/router-deprecated', '../shared/shared'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, router_deprecated_1, shared_1;
    var TaskEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            TaskEditorComponent = (function () {
                function TaskEditorComponent(title, router, taskService) {
                    this.title = title;
                    this.router = router;
                    this.taskService = taskService;
                    this.task = {};
                }
                TaskEditorComponent.prototype.saveTask = function () {
                    this.task.deadline = new Date(this.task.deadline.toString());
                    this.taskService.addTask(this.task);
                    this.changesSaved = true;
                    this.router.navigate(['TasksComponent']);
                };
                TaskEditorComponent.prototype.routerOnActivate = function (next, prev) {
                    this.title.setTitle('Welcome to the Task Form!');
                };
                TaskEditorComponent.prototype.routerCanDeactivate = function (next, prev) {
                    // NOTE: Refer to book for details on commented code
                    //return this.changesSaved || confirm('Are you sure you want to leave?');
                    return !shared_1.AuthenticationService.isAuthorized() ||
                        this.changesSaved ||
                        confirm('Are you sure you want to leave?');
                };
                TaskEditorComponent.prototype.routerOnDeactivate = function (next, prev) {
                    this.title.setTitle('My Angular 2 Pomodoro Timer');
                };
                TaskEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-tasks-editor',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [platform_browser_1.Title],
                        templateUrl: 'app/tasks/task-editor.component.html',
                        styles: ["\n        .ng-valid { border-color: #3c763d; }\n        .ng-invalid { border-color: #a94442; }\n        .ng-untouched { border-color: #999999; }\n    "]
                    }), 
                    __metadata('design:paramtypes', [platform_browser_1.Title, router_deprecated_1.Router, shared_1.TaskService])
                ], TaskEditorComponent);
                return TaskEditorComponent;
            }());
            exports_1("default", TaskEditorComponent);
        }
    }
});
