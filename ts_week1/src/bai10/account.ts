class Account{
    public accountNumber:number;
    private balance:string;
    readonly owner:string;

    constructor(accountNumber:number, balance:string, owner:string){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    public getBalance() : string {
        return this.balance;
    }
    public setBalance(v : string) {
        this.balance = v;
    }

    
}

const acc = new Account(7, "Hoang Anh", "Hoang Anh");

console.log(`Owner: ${acc.owner}`);        
console.log(`Account Number: ${acc.accountNumber}`); 
console.log(`Balance: ${acc.getBalance()}`); 