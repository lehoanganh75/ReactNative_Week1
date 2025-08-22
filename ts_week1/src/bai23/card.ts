class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Thanh toan ${amount} bang the`);
    }
}

const card: Payment = new CardPayment();
card.pay(20000);