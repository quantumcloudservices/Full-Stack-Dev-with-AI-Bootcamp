const arr = [1,2,3,4]
console.log(arr.pop()) // shows 4, removes the last item from the array and returns it
console.log(arr) // shows [1, 2, 3], because the last item (4) was removed from the array
arr.push(100) 
arr.push(30)
arr.pop()
console.log(arr) // shows [1, 2, 3, 100], because the last item (30) was removed from the array