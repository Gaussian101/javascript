// method using one console log (messy)
console.log("   |   |\n   |   |\n   |   |\n-----------\n   |   |\n   |   |\n   |   |\n-----------\n   |   |\n   |   |\n   |   |")


console.log("\n\n\n") //making a space between the two different ways

// method using multiple console logs (less messy)
console.log("   |   |")
console.log("   |   |")
console.log("   |   |")
console.log("------------")
console.log("   |   |")
console.log("   |   |")
console.log("   |   |")
console.log("------------")
console.log("   |   |")
console.log("   |   |")
console.log("   |   |")

console.log("\n\n\n") // space between ways

// method using a for loop
for (i = 1; i <= 3; i++)
{
    console.log("   |   |")
}
console.log("-----------")
for (i = 1; i <= 3; i++)
{
    console.log("   |   |")
}
console.log("-----------")
for (i = 1; i <= 3; i++)
{
    console.log("   |   |")
}

console.log("\n\n\n")

//method using forlook and if statement
for (i = 1; i <= 11; i++)
{
    if (i == 4 || i == 8)
    {
        console.log("-----------")
    }
    else
    {
    console.log("   |   |")
    }
}

console.log("\n\n\n")

// method using for loop and if statement using a variable to work out if it is a multiple of 4
for (i = 1; i <= 11; i++)
{
    var remainder = i % 4;
    if (remainder == 0)
    {
        console.log("-----------")
    }
    else
    {
    console.log("   |   |")
    }
}