"use strict";
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const chuoi = new Repository();
chuoi.add("Xin chao");
chuoi.add("Hoang Anh");
console.log("String Repo:", chuoi.getAll());
const so = new Repository();
so.add(7);
so.add(5);
console.log("Number Repo:", so.getAll());
