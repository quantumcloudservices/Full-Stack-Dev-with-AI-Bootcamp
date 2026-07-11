class Card {
    constructor(value, suite){
        this.value = value;
        this.suite = suite;
    }
toString(){
    return `${this.value} of ${this.suite}` //intrapolation
}
}

class Deck{
    cards = [];
    values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    suites = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    constructor(){
        for(let value of this.values){
            for(let suite of this.suites){
                const card = new Card(value, suite);
                this.cards.push(card);
            }
        }
    }
}

const deck = new Deck();