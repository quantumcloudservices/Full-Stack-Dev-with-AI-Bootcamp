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
    drawCard(){
        return this.cards.pop();
    }
    shufle(){
    for(let i = 0; i < this.cards.length; i++){
        const temp = this.cards[i];
        const randomIndex = Math.floor(Math.random() * (this.cards.length));
        const randomCard = this.cards[randomIndex];
        //swap
        this.cards[i] = randomCard;
        this.cards[randomIndex] = temp;
    }
    }
}
const deck = new Deck();
deck.shufle();
console.log(deck.cards);