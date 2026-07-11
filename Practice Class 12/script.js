class Card {
        constructor(color, value){
        this.color = color;
        this.value = value;
    }
}
class Player{
    constructor(name){
        this.cards = [];
        this.name = name;
    }
}

const color = ["Hearts", "Diamons","Clubs","Spades"];
const value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const player1 = new Player("Manny");
const player2 = new Player("Jimmy");
const player3 = new Player("Alexandra");
const player4 = new Player("Stephen");
const player5 = new Player("Freddy");
const deck = [];

for (let c=0; c < color.length; c++){
    for(let v=0; v < value.length; v++){
        const card = new Card(color[c], value[v]);
        deck.push(card);
    }
}
console.log(deck);
console.log(deck.length);

function shuffle(deck){
         for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
    }
    return deck;
}

function drawcard(deck){
    let removed = deck.pop();
    console.log(removed);
}

shuffle(deck);
drawcard(deck);

console.log(deck.length);
function dealcard(player){
    const card = deck.pop();
    player.cards.push(card);
}

dealcard(player1);
console.log(player1);