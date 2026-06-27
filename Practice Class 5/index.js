//TYPE OF FILES
//Primitive 
//Numeric - 200, 300, 5, 44.9 
//Booleans - true or false 
//String - 'Hey', "Hello", `Hello World` 
//Null -  intentional lack of an object
//Undefined - doesn't currently have a value
//Symbol 
//BigInt 
//Complex/Reference
    //Object
        //array
        //object
        //function

var myName = 'Manuel';
var myName2 = myName;

myName2 = myName + 'o';

console.log(myName)

const isBrazilGoingToWinWorldCup = false;

let y = [1,2,3,4];

function happyBirthday(name, age){
    console.log(`Happy birthday ${name}! You are now ${age}`);
}

happyBirthday('Manuel', 20);

function addNumbers(num1, num2){
    return num1 + num2;}
console.log(addNumbers(5, 10));

function subtractNumbers(num1, num2){
    return num1 - num2;
} 
console.log(subtractNumbers(10, 5));

function multiplyNumbers(num1, num2){
    return num1 * num2;
}
console.log(multiplyNumbers(5, 10));

function divideNumbers(num1, num2){
    return num1 / num2;
}
console.log(divideNumbers(10, 5));

function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(isEven(4));
console.log(isEven(5));

