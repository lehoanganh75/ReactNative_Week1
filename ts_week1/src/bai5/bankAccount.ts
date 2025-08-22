export class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount < 0) {
            console.log("Amount < 0");
            return;
        }
        this.balance += amount;
        console.log(`Amount: ${amount}$, Balance: ${this.balance}$`);
    }

    withdraw(amount: number): void {
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

    getBalance(): number {
        return this.balance;
    }

}

const account = new BankAccount(75);
account.deposit(50);     
account.withdraw(30); 
console.log(account.getBalance());
