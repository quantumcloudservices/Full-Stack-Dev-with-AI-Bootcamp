class Card {
        constructor(color, value){
        this.color = color;
        this.value = value;
    }
}

const color = ["Hearts", "Diamons","Clubs","Spades"];
const value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const deck = [];

for (let c=0; c < color.length; c++){
    for(let v=0; v < value.length; v++){
        const card = new Card(color[c], values[v]);
        deck.push(card);
    }
}
console.log(deck);
console.log(deck.length);