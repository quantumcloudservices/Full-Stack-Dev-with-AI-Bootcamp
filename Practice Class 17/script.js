//create algorithm to swap numbers in an array
//1. insert new array of numbers
//2. provide positions of numbers to be swapped
//3. extract numbers in those positions form the array into variables
//4. swapped extracted numbers into array
function swapping_numbers(array, i, j){
    let x = array[i];
    let y = array[j];
    array[i] = y;
    array[j] = x;
    return array;
}
let numbers = swapping_numbers([8,7,6], 1,2);
console.log(numbers);

//create algorithm to reverse an array
//1. create a function that receives an array
//2. create new empty array
//3. count the 1st array = lenght
//4. create loop to count in reverse for lenght on 1st array
//5. grab numbers based on counters from 1st array into new array
//6. print new array

function reverse_array(firtstarray){
    let secondarray = [];
    for (let t = firtstarray.length-1; t>=0; t--){
        secondarray.push(firtstarray[t]);  
        // console.log(firtstarray[t]);
    }
    return secondarray;
}

let finalarray = reverse_array([1,2,3,4,5]);
console.log (finalarray);