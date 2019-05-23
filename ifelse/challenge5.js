var time = 9
var townOfHome = "Oldham"
var placeOfWork = "Jobcentre"

//using greater than in the if statements
if (time <= 7 || time >=  18)
{
    console.log(`I'm in ${townOfHome}`)
}
else if (time > 7 && time < 9)
{
    console.log("I'm commuting")
}
else
{
    console.log(`I'm at the ${placeOfWork}`)
}