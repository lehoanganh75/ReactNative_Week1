"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book2_1 = require("./book2");
const user2_1 = require("./user2");
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Sach "${book.title}" da duoc them.`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`Sinh vien "${user.name}" da dang ky.`);
    }
    listBooks() {
        console.log("Sach trong thu vien:");
        this.books.forEach(b => {
            console.log(`- [${b.id}] ${b.title} by ${b.author}`);
        });
    }
}
const library = new Library();
const book = new book2_1.Book2(1, "Hoc c can ban", "Hoang anh");
const user = new user2_1.User2(1, "Hoang Anh");
library.addBook(book);
library.addUser(user);
library.listBooks();
