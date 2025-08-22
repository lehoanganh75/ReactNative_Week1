import { Product2 } from "./product2";

class Order {
    private products: Product2[] = [];

    addProduct(product: Product2): void {
        this.products.push(product);
    }

    calculateTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    getProducts(): Product[] {
        return this.products;
    }
}

const order = new Order();
order.addProduct(new Product2("Laptop", 10000000));
order.addProduct(new Product2("Mouse", 50000));


console.log("DSSP:", order.getProducts());
console.log("Total:", order.calculateTotal());