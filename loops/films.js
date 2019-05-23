//for loop
var favFilms = 
[
    "12 Angry Men",
    "Blade Runner",
    "The Holy Grail",
    "The Life of Brian",
    "The Usual Suspects"
]
favFilms.push("The Lord of the Rings", "Jumper")

for (var filmIndex = 0; filmIndex < favFilms.length; filmIndex++)
{
    console.log(favFilms[filmIndex])
}

// while loop
var currentFilm = "The Usual Suspects"
var i = 0
while (i < (favFilms.length - 1))
{
    console.log(currentFilm);
    currentFilm = favFilms[Math.floor(Math.random() * (favFilms.length - 1))]
    i++
}

var filmCheck = (Film, position) =>
{
    if (favFilms[(position - 1)] == Film)
    {
    console.log("Yay")
    }
    else
    {
    console.log("Boo")
        }
}
filmCheck("The Holy Grail", 3)