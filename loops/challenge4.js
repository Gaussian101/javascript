var string = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
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
console.log(array.length, array)