"use strict";
class CardPayment {
    pay(amount) {
        console.log(`Thanh toan ${amount} bang the`);
    }
}
const card = new CardPayment();
card.pay(20000);
