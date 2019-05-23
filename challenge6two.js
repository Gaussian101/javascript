var string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
console.log(string.length)
//create an array
var vowels = ["a", "e", "i", "o", "u"]

var answer = 0
var currentPosition = string.lastIndexOf(vowels[0])

if (currentPosition > answer)
{
    answer = currentPosition
}
currentPosition = string.lastIndexOf(vowels[1])
if (currentPosition > answer)
{
    answer = currentPosition
}
currentPosition = string.lastIndexOf(vowels[2])
if (currentPosition > answer)
{
    answer = currentPosition
}
currentPosition = string.lastIndexOf(vowels[3])
if (currentPosition > answer)
{
    answer = currentPosition
}
currentPosition = string.lastIndexOf(vowels[4])
if (currentPosition > answer)
{
    answer = currentPosition
}
console.log(answer)