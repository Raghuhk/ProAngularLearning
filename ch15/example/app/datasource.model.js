"use strict";
const product_model_1 = require("./product.model");
class SimpleDataSource {
    constructor() {
        this.data = new Array(new product_model_1.Product(1, "Kayak", "Watersports", 275), new product_model_1.Product(2, "Lifejacket", "Watersports", 7.95), new product_model_1.Product(3, "Soccer Ball", "Soccer", 50.50), new product_model_1.Product(4, "Corner Flags", "Soccer", 60.95), new product_model_1.Product(5, "Thinking Cap", "Chess", 16));
    }
    getData() {
        return this.data;
    }
}
exports.SimpleDataSource = SimpleDataSource;
