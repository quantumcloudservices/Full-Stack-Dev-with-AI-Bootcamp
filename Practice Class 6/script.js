let arr = [1, 2, 3, 4, 5, 'Hello', 'World', true, false, null, undefined];
// Using forEach to iterate over the array and log each element
arr.forEach(function(element) {  // forEach is a method that executes a provided function once for each array element
    console.log(element); // logs each element in the array
});

console.log(arr[0]) //gives the first item in the array
console.log(arr.length) //gives the number of items in the array

console.log(arr.pop()) //removes the last item from the array and returns it
console.log(arr.shift()) //removes the first item from the array and returns it

console.log(arr.push('New Item')) //adds a new item to the end of the array
console.log(arr) // logs the updated array
