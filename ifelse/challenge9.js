// variable sets
let space1 = "x"
let space2 = "x"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "

//the grid
console.log("   |   |")
console.log(` ${space1} | ${space2} | ${space3}`)
console.log("   |   |")
console.log("------------")
console.log("   |   |")
console.log(` ${space4} | ${space5} | ${space6}`)
console.log("   |   |")
console.log("------------")
console.log("   |   |")
console.log(` ${space7} | ${space8} | ${space9}`)
console.log("   |   |")

if (space1 == space2 && space2 == space3 && space1 != " ")
{
    console.log("You win!")
}
else if (space4 == space5 && space5 == space6 && space4 != " ")
{
    console.log("You win!")
}
else if (space7 == space8 && space8 == space9 && space7 != " ")
{
    console.log("You win!")
}
else
{
    console.log(" ")
}