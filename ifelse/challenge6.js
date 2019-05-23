var string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

//create an array
var vowels = ["a", "e", "i", "o", "u"]

//check if each part of the array is greater than all the other parts
if (string.lastIndexOf(vowels[0]) > string.lastIndexOf(vowels[1]) && string.lastIndexOf(vowels[0]) > string.lastIndexOf(vowels[2]) && string.lastIndexOf(vowels[0]) > string.lastIndexOf(vowels[3]) && string.lastIndexOf(vowels[0]) > string.lastIndexOf(vowels[4]))
{
    console.log(string.lastIndexOf(vowels[0]))
}
else if (string.lastIndexOf(vowels[1]) > string.lastIndexOf(vowels[0]) && string.lastIndexOf(vowels[1]) > string.lastIndexOf(vowels[2]) && string.lastIndexOf(vowels[1]) > string.lastIndexOf(vowels[3]) && string.lastIndexOf(vowels[1]) > string.lastIndexOf(vowels[4]))
{
    console.log(string.lastIndexOf(vowels[1]))
}
else if (string.lastIndexOf(vowels[2]) > string.lastIndexOf(vowels[1]) && string.lastIndexOf(vowels[2]) > string.lastIndexOf(vowels[0]) && string.lastIndexOf(vowels[2]) > string.lastIndexOf(vowels[3]) && string.lastIndexOf(vowels[2]) > string.lastIndexOf(vowels[4]))
{
    console.log(string.lastIndexOf(vowels[2]))
}
else if (string.lastIndexOf(vowels[3]) > string.lastIndexOf(vowels[1]) && string.lastIndexOf(vowels[3]) > string.lastIndexOf(vowels[2]) && string.lastIndexOf(vowels[3]) > string.lastIndexOf(vowels[0]) && string.lastIndexOf(vowels[3]) > string.lastIndexOf(vowels[4]))
{
    console.log(string.lastIndexOf(vowels[3]))
}
else
{
    console.log(string.lastIndexOf(vowels[4]))
}