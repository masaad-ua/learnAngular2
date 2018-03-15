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
    var ShowDate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShowDate = (function () {
                function ShowDate() {
                }
                ShowDate.prototype.onMouseOver = function () {
                    //console.log(this.dateLetter);
                    this.dateLast = this.dateLetterShow.innerHTML;
                    this.dateLetterShow.innerHTML = this.dateLetter;
                };
                ShowDate.prototype.onMouseOut = function () {
                    this.dateLetterShow.innerHTML = this.dateLast;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ShowDate.prototype, "dateLetter", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ShowDate.prototype, "dateLetterShow", void 0);
                __decorate([
                    core_1.HostListener('mouseover'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], ShowDate.prototype, "onMouseOver", null);
                __decorate([
                    core_1.HostListener('mouseout'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], ShowDate.prototype, "onMouseOut", null);
                ShowDate = __decorate([
                    core_1.Directive({
                        selector: '[data-id]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShowDate);
                return ShowDate;
            }());
            exports_1("default", ShowDate);
        }
    }
});
