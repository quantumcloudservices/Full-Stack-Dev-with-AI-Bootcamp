function eliminateFromArray(arr, value) {
    return arr.filter(function(ele) {
        return ele !== value;
    });
}

eliminateFromArray([1, 2, 3, 4, 5], 2);