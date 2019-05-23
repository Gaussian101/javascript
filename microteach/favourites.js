//create some variables, the second being an array
var film = "12 Angry Men"
var films = [" 12 Angry Men", " The Usual Suspects", " The Holy Grail", " Blade Runner", " Blazing Saddles", " The Producers", " Cool Hand Luke"]
//log the two variables
console.log(film)
console.log(films)
//interacting with the variable, picking a specific string, showing a slice of the array,
//number of independent strings in the array, the length of the string,
//and the length of the string without whitespace
console.log(`My 3rd favourite film is${films[2]}.`)
console.log(`My top 5 films are:${films.slice(0, 5)}.`)
console.log(`I have ${films.length} favourite films`)
console.log(`The string in position 1:${films[0]}, has ${films[0].length} characters (including spaces).`)
console.log(`The string in position 1:${films[0]}, has ${films[0].split(" ").join("").split("").length} letters.`)
//add 2 new arrays called books and songs, tested books first
var books = [" The Hitchhikers Guide to the Galaxy", " The Lord of the Rings", " Night Watch", " Feet of Clay", " The Pawn of Prophecy"]

console.log(`I have ${books.length} favourite books. My second favourite book is${books[1]}`)

//var favourites = [...films, ...books]
//console.log(favourites)
//console.log(`I have ${favourites.length} favourite films and books.`)

var songs = ["When the Wild Wind Blows", "Painkiller", "Breaking the Law", "Out of the Silent Planet", "Empire of the Clouds", "22 Acacia Avenue"]
//merge the 3 arrays
var favourites = [...films, ...books, ...songs]
//post the results
console.log(favourites)
console.log(`I have ${favourites.length} favourite films, books and songs.`)