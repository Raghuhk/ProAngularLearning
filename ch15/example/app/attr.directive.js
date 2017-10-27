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
const core_1 = require("@angular/core");
const product_model_1 = require("./product.model");
let PaAttrDirective = class PaAttrDirective {
    constructor(element) {
        this.element = element;
        this.customClick = new core_1.EventEmitter();
        this.element.nativeElement.addEventListener("click", e => {
            // if(this.product!=null){
            this.customClick.emit(e);
            //}
        });
    }
    ngOnInit() {
        console.log("Input attribute value is :" + this.inputAttribute);
        console.log("Input expression input is :" + this.bgClass);
        this.element.nativeElement.classList.add(this.bgClass || 'bg-warning');
    }
};
__decorate([
    core_1.Input("pa-attr"), 
    __metadata('design:type', String)
], PaAttrDirective.prototype, "bgClass", void 0);
__decorate([
    core_1.Input("pa-product"), 
    __metadata('design:type', product_model_1.Product)
], PaAttrDirective.prototype, "product", void 0);
__decorate([
    core_1.Output("pa-category"), 
    __metadata('design:type', Object)
], PaAttrDirective.prototype, "customClick", void 0);
PaAttrDirective = __decorate([
    core_1.Directive({
        selector: "[pa-attr]"
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], PaAttrDirective);
exports.PaAttrDirective = PaAttrDirective;
let PaSmallestIdentifierDirective = class PaSmallestIdentifierDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        console.log("smallest :" + this.isSmallest);
        if (this.isSmallest) {
            this.element.nativeElement.classList.add('bg-warning');
        }
    }
    ngOnChanges(updates) {
        let change = updates["isSmallest"];
        console.log("ngOnChanges of pa-smallest calledPrevious val:" + change.previousValue + " and current val:" + change.currentValue);
        if (change.currentValue == true) {
            this.element.nativeElement.classList.add('bg-warning');
        }
        else {
            this.element.nativeElement.classList.remove('bg-warning');
        }
    }
};
__decorate([
    core_1.Input("pa-smallest"), 
    __metadata('design:type', Boolean)
], PaSmallestIdentifierDirective.prototype, "isSmallest", void 0);
PaSmallestIdentifierDirective = __decorate([
    core_1.Directive({
        selector: "[pa-smallest]"
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], PaSmallestIdentifierDirective);
exports.PaSmallestIdentifierDirective = PaSmallestIdentifierDirective;
