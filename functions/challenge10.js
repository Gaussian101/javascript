const calc = (num1, num2, operator) =>
{
    if (operator == "+")
    {
        num1 + num2;
        console.log(`${num1} + ${num2} = ${calc}`)
    }
    else if (operator == "-")
    {
        var calc = num1 - num2;
        console.log(`${num1} - ${num2} = ${calc}`)
    }
    else if (operator == "x")
    {
        var calc = num1 * num2;
        console.log(`${num1} x ${num2} = ${calc}`)
    }
    else if (operator == "/")
    {
        var calc = num1 / num2;
        console.log(`${num1} / ${num2} = ${calc}`)
    }
    else
    {
        console.log("Error")
    }
}
calc(2,7,"x")