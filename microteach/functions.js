var fortuneTeller = (numOfChildren, partnersName, jobTitle, location) =>
{
    var future = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numOfChildren}`
    console.log(future)
}
fortuneTeller(3, "Claire", "Software Developer", "Manchester")