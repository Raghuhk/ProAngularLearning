"use strict";
const product_model_1 = require("./product.model");
const datasource_model_1 = require("./datasource.model");
class Model {
    constructor() {
        this.locator = (p, id) => p.id == id;
        this.dataSource = new datasource_model_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getData().forEach(p => this.products.push(p));
        this.populateSmallestAmount();
    }
    getProducts() {
        return this.products;
    }
    getProduct(id) {
        return this.products.find(p => this.locator(p, id));
    }
    populateSmallestAmount() {
        let isSmallest;
        let priceArray = new Array();
        for (let i = 0; i < this.products.length; i++) {
            priceArray.push(this.products[i].price);
        }
        let smallestPrice;
        smallestPrice = Math.min.apply(null, priceArray);
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].price == smallestPrice) {
                this.products[i].smallest = true;
                console.log("populateSmallestAmount: smallest is " + this.products[i].name);
            }
            else {
                this.products[i].smallest = false;
            }
        }
    }
    saveProduct(product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        }
        else {
            let index = this.products
                .findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }
    deleteProduct(id) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }
    generateID() {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
    swapProducts() {
        let p = this.products.shift();
        this.products.push(new product_model_1.Product(p.id, 'New Kayak', p.category, p.price));
    }
}
exports.Model = Model;
