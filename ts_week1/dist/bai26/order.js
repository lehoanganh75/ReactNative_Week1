"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product2_1 = require("./product2");
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
    getProducts() {
        return this.products;
    }
}
const order = new Order();
order.addProduct(new product2_1.Product2("Laptop", 10000000));
order.addProduct(new product2_1.Product2("Mouse", 50000));
console.log("DSSP:", order.getProducts());
console.log("Total:", order.calculateTotal());
