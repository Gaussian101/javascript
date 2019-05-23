const win = (t1, t2, t3, m1, m2, m3, b1, b2, b3) =>
{
    if (horizontal(t1, t2, t3, m1, m2, m3, b1, b2, b3) || vertical(t1, t2, t3, m1, m2, m3, b1, b2, b3) || diagonal(t1, t2, t3, m1, m2, m3, b1, b2, b3))
    {
        console.log("You win")
    }
    else
    {
        console.log(" ")
    }
}

const horizontal = (t1, t2, t3, m1, m2, m3, b1, b2, b3) =>
{
    if (t1 == t2 && t2 == t3 && t1 != " ")
    {
        return true;
    }
    else if (m1 == m2 && m2 == m3 && m1 != " ")
    {
        return true;
    }
    else if (b1 == b2 && b2 == b3 && b1 != " ")
    {
        return true;
    }
    else
    {
        return false;
    }
}
const vertical = (t1, t2, t3, m1, m2, m3, b1, b2, b3) =>
{
    if (t1 == m1 && m1 == b1 && t1 != " ")
    {
        return true;
    }
    else if (t2 == m2 && m2 == b2 && t2 != " ")
    {
        return true;
    }
    else if (t3 == m3 && m3 == b3 && t3 != " ")
    {
        return true;
    }
    else
    {
        return false;
    }
}
const diagonal = (t1, t3, m2, b1, b3) =>
{
    if (t1 == m2 && m2 == b3 && t1 != " ")
    {
        return true;
    }
    else if (t3 == m2 && m2 == b1 && t3 != " ")
    {
        return true;
    }
    else
    {
        return false;
    }
}

const naughtsAndCrosses = (t1, t2, t3, m1, m2, m3, b1, b2, b3) =>
{
    console.log("   |   |")
    console.log(` ${t1} | ${t2} | ${t3}`)
    console.log("   |   |")
    console.log("------------")
    console.log("   |   |")
    console.log(` ${m1} | ${m2} | ${m3}`)
    console.log("   |   |")
    console.log("------------")
    console.log("   |   |")
    console.log(` ${b1} | ${b2} | ${b3}`)
    console.log("   |   |")
}

naughtsAndCrosses("x", "o", " ", "x", "x", " ", "o", " ", " ")
win("x", "o", " ", "x", "x", " ", "o", " ", " ")