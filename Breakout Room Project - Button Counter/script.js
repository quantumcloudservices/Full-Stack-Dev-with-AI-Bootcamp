let count = 0;

const plusButton = document.getElementById("plusBtn");
const minusButton = document.getElementById("minusBtn");
const countDisplay = document.getElementById("count");
const resetButton = document.getElementById("resetBtn");

plusButton.addEventListener("click", function () {
  count = count + 5;
   countDisplay.innerText = count;
   colorvalidation(count);
});

minusButton.addEventListener("click", function () {
    if (count==0) {
        countDisplay.innerText = 0;
    }else {
         count = count - 5;
        countDisplay.innerText = count;
    }
    colorvalidation(count);
});

resetButton.addEventListener("click", function(){
    count = 0;
    countDisplay.innerText = count;
    colorvalidation(count);
});

function colorvalidation(count) {
    if (count > 0) {
    countDisplay.className = 'positive';
} else if (count < 0) {
    countDisplay.className = 'negative';
} else if (count == 0){
    countDisplay.className = 'zero';
}}

