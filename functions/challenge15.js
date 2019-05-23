const whichIsBigger = (num1, num2) =>
{
    if (num1 > num2)
    {
        return num1;
    }
    else if (num1 < num2)
    {
        return num2;
    }
    else
    {
        return "Equal"
    }
}
console.log(whichIsBigger(5,3))