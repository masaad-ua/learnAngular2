System.register(['@angular/core', '@angular/common', './users.services', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, common_1, users_services_1, router_deprecated_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (users_services_1_1) {
                users_services_1 = users_services_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(listOfUsers, router, formBuilder) {
                    this.listOfUsers = listOfUsers;
                    this.router = router;
                    this.users = [];
                    this.userData = {};
                    //this.name = new Control('', Validators.required);
                    //this.username = new Control('', Validators.required);
                    //
                    //this.userForm = formBuilder.group({
                    //    name: this.name,
                    //    cred: formBuilder.group({
                    //        username: this.username
                    //    })
                    //})
                    this.userForm = formBuilder.group({
                        name: formBuilder.control('', common_1.Validators.required),
                        credentials: formBuilder.group({
                            username: formBuilder.control('', common_1.Validators.required),
                            password: formBuilder.control('', common_1.Validators.required)
                        })
                    });
                }
                //saveUser(arg: NgControlGroup):void {
                //    //this.router.navigate(['MailServerComponent']);
                //    this.changesSaved = true;
                //    console.log(arg.control.value.nameControlsGroup.nameA);
                //
                //
                //}
                UserComponent.prototype.saveUser = function (arg) {
                };
                UserComponent.prototype.submitNewUsers = function (arg) {
                    console.log(arg);
                };
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.listOfUsers.usersFeed.subscribe(function (newItem) {
                        if (newItem) {
                            _this.users.push(newItem);
                        }
                    });
                };
                UserComponent.prototype.routerOnActivate = function () {
                    console.log('Welcome to the User Form!');
                };
                UserComponent.prototype.routerCanDeactivate = function () {
                    return this.changesSaved ||
                        confirm('Are you sure you want to leave?');
                };
                UserComponent.prototype.routerOnDeactivate = function () {
                    console.log('My Angular 2 Pomodoro Timer');
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user-list',
                        providers: [users_services_1.default, common_1.FormBuilder],
                        templateUrl: 'app/users/users.component.html',
                        styleUrls: ['app/users/users.component.css']
                    }), 
                    __metadata('design:paramtypes', [users_services_1.default, router_deprecated_1.Router, common_1.FormBuilder])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("default", UserComponent);
        }
    }
});
