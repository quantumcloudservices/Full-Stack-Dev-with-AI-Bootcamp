// create an array with the index of 0-2
// create an empty array
// create a function with two parameters[oldArray, num1]]
//  then insert  a for loop to assighn the addition I+ to every index  in the array
// create the value of 99
// push the value of 99 into the new Array
// return the array

function setarray(oldarray, num1){
    let newarray = []
    for(let i = 0; i < oldarray.length; i++){
        newarray[0] = num1;
        newarray.push(oldarray[i]);
    }
    return newarray;
}
console.log(setarray([1,2,3], 99));