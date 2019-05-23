// .map() creates a new array where all the elements of the first array passed through the function in it
var array = [1, 2, 3, 4]
//done on the original without retaining
console.log(array.map(x => x * 2))
//retains the function
const map = array.map(x => x * 2)
console.log(map)
console.log(array)