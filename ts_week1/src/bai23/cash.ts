class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Thanh toan ${amount} bang tien mat.`);
    }
}

const cash: Payment = new CashPayment();
cash.pay(50000);
