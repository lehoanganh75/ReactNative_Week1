class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const chuoi = new Repository<string>();
chuoi.add("Xin chao");
chuoi.add("Hoang Anh");
console.log("String Repo:", chuoi.getAll());

const so = new Repository<number>();
so.add(7);
so.add(5);
console.log("Number Repo:", so.getAll());