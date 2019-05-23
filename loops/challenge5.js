const palindrome = (num) =>
{
    reverseNum = parseInt(num.toString(10).split("").reverse().join(""), 10)
    if (num == reverseNum)
    {
        return true
    }
    else
    {
        return false
    }
}
for (i = 90283743503594; i > 0; i--)
{
    if (palindrome(i) == true)
    {
        console.log(i)
        break;
    }
    else
    {
        continue;
    }
}