function EliminateBasedonIndex(arr, index) {
    for (let i = index + 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.pop();
    return arr;
}

EliminateBasedonIndex([1, 2, 3, 4, 5], 2);