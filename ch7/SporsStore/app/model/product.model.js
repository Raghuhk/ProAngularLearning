"use strict";
var Product = (function () {
    function Product(id, name, category, description, price) {
        if (price === void 0) { price = number; }
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
