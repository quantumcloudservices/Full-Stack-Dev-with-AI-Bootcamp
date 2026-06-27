let arr2 = ['two of hearts', 'three of diamonds', 'four of clubs', 'five of spades', 'six of hearts', 'seven of diamonds', 'eight of clubs', 'nine of spades', 'ten of hearts', 'jack of diamonds', 'queen of clubs', 'king of spades', 'ace of hearts'];

console.log(arr2);

const cardDealt = arr2.pop(); // removes the last card from the deck and returns it
console.log(cardDealt); // logs the card that was dealt
arr2.push(cardDealt); // adds the dealt card back to the end of the deck
console.log(arr2); // logs the updated deck of cards


