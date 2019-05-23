var num = 10
//same as challenge2 except with else if statements
if (num % 3 == 0 && num % 5 == 0)
{
    console.log("fizz buzz")
}
else if (num % 3 == 0)
{
    console.log("fizz")
}
else if (num % 5 == 0)
{
    console.log("buzz")
}
else
{
    console.log("This is not divisible by 3 or 5")
}