//best way
var string = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
var hi = "hi"

//console.log(`First occurance of hi is position ${string.indexOf(hi)} and the last is position ${string.lastIndexOf(hi)}`)


var array = []
for (i = 0; i < string.length; i++)
{
    if (string.charAt(i) == "h" && string.charAt(i + 1) == "i")
    {
        array.push(i)
    }
    else
    {
        continue;
    }
}
console.log(array[0], array[array.length - 1])