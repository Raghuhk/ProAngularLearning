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
var core_1 = require("@angular/core");
var repository_model_1 = require("./repository.model");
var ProductComponent = (function () {
    function ProductComponent(ref) {
        this.model = new repository_model_1.Model();
        this.targetName = "Kayak";
        window.appRef = ref;
        window.model = this.model;
    }
    ProductComponent.prototype.getProductByPosition = function (position) {
        return this.model.getProducts()[position];
    };
    ProductComponent.prototype.getClassesByPosition = function (position) {
        var product = this.getProductByPosition(position);
        return this.getClassesById(product.id);
    };
    ProductComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    ProductComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    ProductComponent.prototype.getProductCount = function () {
        console.log("Entered getProductCount");
        return this.getProducts().length;
    };
    ProductComponent.prototype.getClasses = function () {
        console.log("Entered getClasses");
        return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
    };
    ProductComponent.prototype.getClassesById = function (key) {
        var product = this.model.getProduct(key);
        var backgroundClass = "";
        if (product.price > 200) {
            backgroundClass = "bg-warning";
        }
        else if (product.price > 50) {
            backgroundClass = "bg-info";
        }
        else {
            backgroundClass = "bg-success";
        }
        var returnClass = "p-a-1 " + backgroundClass;
        return returnClass;
    };
    ProductComponent.prototype.getKeyForTracking = function (id, product) {
        return product.id;
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "app/template.html"
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
