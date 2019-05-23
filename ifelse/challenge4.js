var num = 101
//converted the number to a string of base 10
var numAsString = num.toString(10)
//split the string into an array reversed the array and joined the array together into a string again
var reverseNumString = numAsString.split("").reverse().join("");
//reverting the reversed string as a number
var reverseNum = parseInt(reverseNumString, 10)

if (num == reverseNum)
{
    console.log("Is a palindrome")
}
else
{
    console.log("Is not a palindrome")
}
