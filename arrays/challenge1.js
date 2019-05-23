// .shift removes the first element of an array (similar to .pop)

var array = [1, 2, 3]
console.log(array.shift())
console.log(array)

// like .shift is similar to .pop .unshift is similar to .push
var array2 = [1, 2, 3]
array2.unshift(-1, 0)
console.log(array2)

// I previously showed an example of .slice() in dotnotation challenges.js here is the example
// .slice fuction (shows the strings that are in the positions of the array starting from the end (0 gives you all, 5 gives you none))
var animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(0));
console.log(animals.slice(5));
console.log(animals.slice(2, 5));
console.log(animals.slice(3));
console.log(animals.slice(2, 4));

// .splice() changes the content of an array by replacing the elements or adding new elements at specific positions
var array3 = [1, 2, 3]
//adding to position 1 the number 1.5 (remember the first element is 0)
array3.splice(1, 0 , 1.5)
console.log(array3)
//replacing at position 3 the number 2.25 (remember the first element is 0)
array3.splice(3, 1, 2.25)
console.log(array3)

// .split() splits a string into an array
var number = "1234"
var stringArray = number.split("")
console.log(stringArray)

// .join() connects an array into a string with the ability to specify how they are seperated
var string = stringArray.join("")
console.log(string)

// .toString does the same without the option to choose a seperator (comma no matter)
var toString = stringArray.toString()
console.log(toString)

// .reverse() reverses the order of the array
var reverse = stringArray.reverse()
console.log(reverse)

// .sort() sorts an array of strings alphabetically
var alpha = ["a", "r", "d", "b", "e"]
var alphabetically = alpha.sort()
console.log(alphabetically)
//with a bit of manipulation sort can be used for numbers
var numbers = [7, 4, 40, 98, 12, 3]
var accend = numbers.sort(function(a, b) {return a - b})
console.log(accend)
// this is because if b is bigger than a then the result is false meaning a is sorted before b and the opposite too

//Math.max.apply() finds the highest number in the array
console.log(Math.max.apply(null, numbers))
//also Math.min.apply()
console.log(Math.min.apply(null, numbers))