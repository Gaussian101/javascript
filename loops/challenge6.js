var string = "Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises."
//best way
//var array = string.split(" ")
//console.log(array)
//var count = array.length + 1
var count = 2
for (i = 0; i < string.length; i++)
{
    if (string.charAt(i) == " ")
    {
        count++
    }
    else
    {
        continue;
    }
}
console.log(count)