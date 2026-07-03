function MakeCookies(topping1, topping2){
    console.log('Mix');
    console.log('add in the' + topping1 +  'and' + topping2);    
    console.log('bake');
    console.log('eat');
}

MakeCookies('M&M', 'Choco Chips');
MakeCookies('Raisin');
MakeCookies('Walnut');

function sum(num1, num2){
    let x = num1 + num2
    console.log(x);
}
sum(1, 2);

function string(string1, string2){
    let bigstring = string1 + string2
    console.log(bigstring);
}
string('hello', 'world');

function iterate(array){
    for(let i = array.length-1; i>=0; i--) {
        console.log(array[i])
    }
}

iterate('1','2','3','4');

function sumarray(array1){
    let p =0;
    for (o=0; o<=array1.length-1; o++){
        p += array1[o]
    }        
    console.log(p);
}

sumarray([1,2,3,4]);