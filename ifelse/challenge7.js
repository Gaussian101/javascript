var word = "AQuiteLongStringA"
//var stringLength = word.length
//var firstLetter = word.charAt(0)
//var lastLetter = word.charAt(stringLength - 1)
//console.log(firstLetter)
//console.log(lastLetter)
//console.log(word.length)

//has to have 1 taken from th length as the position starts at 0
if (word.charAt(word.length - 1) == word.charAt(0))
{
    console.log(true)
}
else
{
    console.log(false)
}