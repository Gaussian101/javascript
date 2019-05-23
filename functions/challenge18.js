const grade = (num) =>
{
    if (num <= 100 && num >= 90)
    {
        return "A"
    }
    else if (num < 90 && num >= 80)
    {
        return "B"
    }
    else if (num < 80 && num >= 70)
    {
        return "C"
    }
    else if (num < 70 && num >= 60)
    {
        return "D"
    }
    else if (num < 60)
    {
        return "F"
    }
}
console.log(grade(62))