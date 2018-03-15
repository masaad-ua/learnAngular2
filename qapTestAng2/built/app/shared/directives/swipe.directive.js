System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var SwipeListener;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SwipeListener = (function () {
                function SwipeListener() {
                    this.currentXCoordinate = 0;
                    this.drage = false;
                    this.itWasSwiped = new core_1.EventEmitter();
                }
                //constructor(){
                //    this.swiped = true;
                //}
                //@ViewChild('someVar') el:ElementRef;
                //ngAfterViewInit()
                //{
                //    console.log(this.el.nativeElement);
                //}
                SwipeListener.prototype.createEvent = function (element, eventName) {
                    if (document.implementation.hasFeature("CustomEvent", "3.0")) {
                        var event_1 = document.createEvent("CustomEvent");
                        event_1.initCustomEvent(eventName, true, false, eventName);
                        element.dispatchEvent(event_1);
                    }
                    //console.log(eventName);
                };
                SwipeListener.prototype.onRightSwipe = function (e) {
                    this.itWasSwiped.emit(false);
                };
                SwipeListener.prototype.onLeftSwipe = function (e) {
                    this.itWasSwiped.emit(true);
                };
                SwipeListener.prototype.onMouseDown = function (e) {
                    this.startX = e.pageX;
                    this.startTime = Date.now();
                    this.drage = true;
                };
                SwipeListener.prototype.onMouseUp = function (e) {
                    this.elem = document.getElementById('listContainer');
                    if (this.drage) {
                        this.currentXCoordinate = e.pageX - this.startX;
                        this.currentTime = Date.now() - this.startTime;
                        //if(this.currentTime < 400){
                        if (this.currentTime) {
                            (this.currentXCoordinate > 100) && this.createEvent(this.elem, "rightswipe");
                            (this.currentXCoordinate < -10) && this.createEvent(this.elem, "leftswipe");
                        }
                        this.drage = false;
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SwipeListener.prototype, "itWasSwiped", void 0);
                __decorate([
                    core_1.HostListener('rightswipe', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], SwipeListener.prototype, "onRightSwipe", null);
                __decorate([
                    core_1.HostListener('leftswipe', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], SwipeListener.prototype, "onLeftSwipe", null);
                __decorate([
                    core_1.HostListener('mousedown', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], SwipeListener.prototype, "onMouseDown", null);
                __decorate([
                    core_1.HostListener('mouseup', ['$event', '$target']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], SwipeListener.prototype, "onMouseUp", null);
                SwipeListener = __decorate([
                    core_1.Directive({
                        selector: '[swipe-listener]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SwipeListener);
                return SwipeListener;
            }());
            exports_1("default", SwipeListener);
        }
    }
});
