// Exercise 1
var numOfChildren = 3
var partnersName = "Claire"
var jobTitle = "Software Developer"
var location = "Manchester"
var future = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numOfChildren}`
console.log(future)

// Exercise 2
var birthYear = 1993
var futureYear = 2019
var age = futureYear - birthYear
var age2 = futureYear - (birthYear + 1)
var ageOnYear = `You will be either ${age2} or ${age} in ${futureYear}`
console.log(ageOnYear)

// Exercise 3
var currentAge = 25
var maxAge = 57
var kiloPerDay = 5
var lifetime = (maxAge - currentAge) * kiloPerDay
var response = `You will need ${lifetime} kilos of whatever for a lifetime amount`
console.log(response)

// Exercise 4
var radius = 7
var diameter = radius * 2
Math.PI