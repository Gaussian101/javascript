//search fuction (finds the position the start of the searched string is at)
var searchGroup = "Search for more"
var regex = "for";
console.log(searchGroup.search(regex))

//last index fuction (finds the number of characters after the string you wish to identify)
var sentence = "A bunch of utter gibberish"
var word = "gib"
console.log('The index of the first "' + word + '" from the end is ' + sentence.lastIndexOf(word));

//slice fuction (shows the strings that are in the positions of the array starting from the end (0 gives you all, 5 gives you none))
var animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(0));
console.log(animals.slice(5));
console.log(animals.slice(2, 5));
console.log(animals.slice(3));
console.log(animals.slice(2, 4));

//substring function (shows the characters in the string between the two values specified)
var string = "Hello world";
var sub = string.substring(1, 3)
//substr function (same as substring except the second number is the length of the new string you wish to display)
var sublength = string.substr(2, 6)
console.log(sub)
console.log(sublength)

//replace function (replaces the characters enclosed with a different string)
var toReplace = "His name is Tyler";
var replace = toReplace.replace("Tyler", "Alan")
console.log(`"${toReplace}" is wrong it should be "${replace}"`)

//concat function (merges two arrays)
var parents = ["Rodger", "Leanne"]
var children = ["Steven", "Thomas", "Stacy"]
var family = parents.concat(children);
console.log(family)

//character at fuction (shows the character of a string in position identified starting with 0 as the first character in the string)
var one = string.charAt(0)
var two = string.charAt(1)
var three = string.charAt(2)
var four = string.charAt(3)
var five = string.charAt(4)
var six = string.charAt(5)
var seven = string.charAt(6)
var eight = string.charAt(7)
var nine = string.charAt(8)
var ten = string.charAt(9)
var eleven = string.charAt(10)

console.log(`1. ${one}`)
console.log(`2. ${two}`)
console.log(`3. ${three}`)
console.log(`4. ${four}`)
console.log(`5. ${five}`)
console.log(`6. ${six}`)
console.log(`7. ${seven}`)
console.log(`8. ${eight}`)
console.log(`9. ${nine}`)
console.log(`10. ${ten}`)
console.log(`11. ${eleven}`)