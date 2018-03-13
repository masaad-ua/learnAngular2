System.register(["@angular/core", '../shared/shared'], function(exports_1, context_1) {
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
    var core_1, shared_1;
    var ListsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            ListsComponent = (function () {
                function ListsComponent(arrayGetLists) {
                    this.arrayGetLists = arrayGetLists;
                    this.listOfItems = [];
                    this.arrayOfLists = [];
                    //arrayOfCheckedItem: Array<Element> = [];
                    this.amountOfList1 = 32;
                    this.amountOfList2 = 32;
                    this.amountOfList3 = 5;
                    this.arrayOfCheckedItem = [];
                    this.sendArrayOfCheckedItems = new core_1.EventEmitter();
                    this.chose = "add all";
                }
                ListsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.arrayGetLists.arrFeed.subscribe(function (newItem) {
                        _this.listOfItems.push(newItem);
                    });
                    setTimeout(function () {
                        _this.createArrayOfLists(_this.amountOfList1, 1);
                        _this.createArrayOfLists(_this.amountOfList2, 2);
                        _this.createArrayOfLists(_this.amountOfList3, 3);
                        //console.log(this.arrayOfLists);
                    }, 0);
                };
                ListsComponent.prototype.updateArrayOfCheckedItem = function () {
                    console.log("send");
                    this.sendArrayOfCheckedItems.emit("got it");
                };
                ListsComponent.prototype.createArrayOfLists = function (amountItems, idItems) {
                    var obj = null, arr = [];
                    if (this.listOfItems.length > 0) {
                        this.listOfItems.forEach(function (elem, index, arr) {
                            if (elem.group === idItems) {
                                obj = elem;
                            }
                        });
                    }
                    for (var i = 0; i < amountItems; ++i) {
                        var item = JSON.parse(JSON.stringify(obj));
                        item.id = i + 1;
                        arr.push(item);
                    }
                    this.arrayOfLists.push(arr);
                };
                ListsComponent.prototype.check = function (i, j) {
                    this.arrayOfLists[i][j].checked = !this.arrayOfLists[i][j].checked;
                    this.arrayOfLists[i][j].checked && this.arrayOfCheckedItem.push(this.arrayOfLists[i][j]);
                    (!this.arrayOfLists[i][j].checked) && this.arrayOfCheckedItem.splice(this.arrayOfCheckedItem.indexOf(this.arrayOfLists[i][j]), 1);
                    //console.log(this.arrayOfCheckedItem);
                    //this.updateArrayOfCheckedItem();
                    //(!this.arrayOfLists[i][j].checked) && this.arrayOfCheckedItem.splice(this.arrayOfLists[i][j])
                    this.updateArrayOfCheckedItem();
                };
                ListsComponent.prototype.chooseAll = function (arg) {
                    var _this = this;
                    console.log(this.arrayOfLists[arg] instanceof Array);
                    var arr = this.arrayOfLists[arg];
                    if (this.chose === "add all") {
                        arr.forEach(function (item, i) {
                            _this.arrayOfLists[arg][i].checked = true;
                            !_this.arrayOfCheckedItem.indexOf(_this.arrayOfLists[arg][i]) && _this.arrayOfCheckedItem.push(_this.arrayOfLists[arg][i]);
                        });
                        this.chose = "remove all";
                    }
                    else if (this.chose === "remove all") {
                        arr.forEach(function (item, i) {
                            _this.arrayOfLists[arg][i].checked = !_this.arrayOfLists[arg][i].checked;
                            _this.arrayOfCheckedItem.push(_this.arrayOfLists[arg][i]);
                        });
                        this.chose = "remove all";
                    }
                    console.log(this.arrayOfLists[arg]);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ListsComponent.prototype, "arrayOfCheckedItem", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ListsComponent.prototype, "sendArrayOfCheckedItems", void 0);
                ListsComponent = __decorate([
                    core_1.Component({
                        selector: "lists",
                        directives: [],
                        templateUrl: 'app/lists/lists.component.html',
                        styleUrls: ['app/lists/lists.component.css']
                    }), 
                    __metadata('design:paramtypes', [shared_1.GetLists])
                ], ListsComponent);
                return ListsComponent;
            }());
            exports_1("default", ListsComponent);
        }
    }
});
