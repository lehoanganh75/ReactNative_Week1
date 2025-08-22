"use strict";
class Account {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(v) {
        this.balance = v;
    }
}
const acc = new Account(7, "Hoang Anh", "Hoang Anh");
console.log(`Owner: ${acc.owner}`);
console.log(`Account Number: ${acc.accountNumber}`);
console.log(`Balance: ${acc.getBalance()}`);
