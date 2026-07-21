//create some kind of storage = obj // array
//loop thru the string
//check to see if char we are at is in the lookup:
//if it is not = 1
//if it is ADD one to it
//return the obj

interface Lookup {
    [key: string]: number;
}
function charCount(str: string){
    const lookup: Lookup = {};

    for(let i=0; i < str.length; i++){
        let char = str[i];
        if(lookup[char] === undefined){
            lookup[char] = 1;
        } else {
            lookup[char]+=1;
        }
    }
    return lookup;
}


//create var to stoire count
// start at 0
// loop thru
//add one for every char
// end at end of str
// return count

function count(str: string){
    let x = 0;
    for(let j=0; j < str.length; j++){
        x+=1;
    }   
    return x;
}