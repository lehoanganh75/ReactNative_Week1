class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const products: Product[] = [
    new Product("Muoi", 50), 
    new Product("Nuoc mam", 30),
    new Product("Duong", 130)
];

const filterProduct = products.filter(p => p.price > 100);

console.log("Cac san pham co gia > 100: ");
console.log(filterProduct);
filterProduct.forEach(p => console.log(`San pham ${p.name} voi gia ${p.price} VND`));

 