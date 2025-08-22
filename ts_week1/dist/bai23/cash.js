"use strict";
class CashPayment {
    pay(amount) {
        console.log(`Thanh toan ${amount} bang tien mat.`);
    }
}
const cash = new CashPayment();
cash.pay(50000);
