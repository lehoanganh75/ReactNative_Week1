import { Book2 } from "./book2";
import { User2 } from "./user2";

class Library {
  private books: Book2[] = [];
  private users: User2[] = [];

  addBook(book: Book2): void {
    this.books.push(book);
    console.log(`Sach "${book.title}" da duoc them.`);
  }

  addUser(user: User2): void {
    this.users.push(user);
    console.log(`Sinh vien "${user.name}" da dang ky.`);
  }

  listBooks(): void {
    console.log("Sach trong thu vien:");
    this.books.forEach(b => {
      console.log(`- [${b.id}] ${b.title} by ${b.author}`);
    });
  }
}

const library = new Library();

const book = new Book2(1, "Hoc c can ban", "Hoang anh");

const user = new User2(1, "Hoang Anh");

library.addBook(book);
library.addUser(user);
library.listBooks();