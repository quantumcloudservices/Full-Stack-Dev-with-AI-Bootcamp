
function countletters(text) {
let text = text.toLowerCase();
for(let i=0; i < text.length; i++) {
    console.log(text[i]);
}
let count = 0;
for(let i=0; i < text.length; i++) {
    count++;
}
const times = {};
for(let i=0; i < text.length; i++) {
    const letter = text[i];
    if(times[letter] === undefined) {
       times[letter] = 1;
    } else {
        times[letter]++;
    }
}
console.log(times);
}
countletters('Hello');

