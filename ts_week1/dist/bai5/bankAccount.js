"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0) {
            console.log("Amount < 0");
            return;
        }
        this.balance += amount;
        console.log(`Amount: ${amount}$, Balance: ${this.balance}$`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw < 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Khong du amount");
            return;
        }
        this.balance -= amount;
        console.log(`Withdraw: ${amount}$, Balance: ${this.balance}$`);
    }
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
const account = new BankAccount(75);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());
