//Array(<string>) creates a string in a the same way as []
var array = Array('John')

//Array(<number>) gives you the length of the array
var array2 = Array(10)

console.log(array)
console.log(array2)

//however Array() is a function so even as a string the aren't the same even though they have the same value
var array3 = []
var array4 = Array()
const test = (array3, array4) =>
{
if (array3 == array4)
{
    return true;
}
else
{
    return false;
}
}
console.log(test(array3, array4))
// but the values of the arrays are still the same
const test2 = (array3, array4) =>
{
if (array3.value == array4.value)
{
    return true;
}
else
{
    return false;
}
}
console.log(test2(array3, array4))

// [] is a variable which is an array, Array() is an object with the function of an array