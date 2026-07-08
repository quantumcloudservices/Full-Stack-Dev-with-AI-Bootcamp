// function coffeeRun(order, cash){

//     console.log('go downstairs and order');
//     console.log('pay' + cash);

//     return // this will be an undefined value since we are not returning anything

// }

// let boss = coffeeRun('Mocha', 1);
// console.log(boss)

let button = document.getElementById('btn');
// document.getElementsByClassName('btn') // [0]
var counter = 0;
button.addEventListener('click', function(){
    counter += 1;
    let p = document.getElementById('Text')
    p.innerText = 'This button has been clicked ' + counter + ' times!'
})