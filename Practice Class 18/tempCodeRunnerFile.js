function setarray(oldarray, num1){
    let newarray = []
    for(let i = 0; i < oldarray.length; i++){
        newarray[0] = num1;
        newarray[1].push(oldarray[1]);
    }
    return newarray;
}
console.log(setarray([1,2,3], 99));