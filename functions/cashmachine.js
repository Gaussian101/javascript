var pinNum = 1234
var balance = 5000
var takeAll = true

const pinCheck = (enteredNum) =>
{
    if (pinNum == enteredNum)
    {
        return true;
    }
    else
    {
        console.log("Invalid Pin")
    }
}
const sure = (withdrawal) =>
{
    if (takeAll)
    {
        balance = balance - withdrawal
        return true;
    }
    else
    {
        console.log("Would you still like to withdraw?")
    }
}
const balanceCheck = (withdrawal) =>
{
    if (balance > withdrawal)
    {
        balance = balance - withdrawal
        return true;
    }
    else if (balance == withdrawal)
    {
        return sure;
    }
    else
    {
        console.log(`You cannot withdraw more than your balance, Your balance is:\n${balance}`)
    }
}

const validCheck = (enteredNum, withdrawal) =>
{
    if (pinCheck(enteredNum) && balanceCheck(withdrawal))
    {
            console.log(`New balance ${balance}`)
    }
}

/*
const validCheck = (enteredNum, withdrawal) =>
{
    if (pinNum == enteredNum && balance >= withdrawal)
    {
        balance = balance - withdrawal
        console.log(`New balance ${balance}`)
    }
    else if (pinNum != enteredNum)
    {
        console.log("Invalid Pin")
    }
    else
    {
        console.log(`You cannot withdraw more than your balance, Your balance is:\n${balance}`)
    }
}
*/

validCheck(1234, 500)