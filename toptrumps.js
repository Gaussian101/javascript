class Cards{
    constructor(name, speed, shooting, passing, dribbling, defense, physical){
        this._name = name;
        this._speed = speed;
        this._shooting = shooting;
        this._passing = passing;
        this._dribbling = dribbling;
        this._defense = defense;
        this._physical = physical;
    }
}
let players = [new Cards("Christiano Ronaldo", 90, 93, 81, 90, 35, 79),
    new Cards("Lionel Messi", 88, 91, 88, 96, 32, 61),
    new Cards("Luis Suarez", 80, 90, 79, 87, 52, 85),
    new Cards("Thiago Sliva", 71, 54, 73, 70, 88, 79),
    new Cards("Kevin deBruyne", 77, 86, 92, 87, 60, 78),
    new Cards("Neymar", 92, 84, 83, 95, 32, 59),
    new Cards("Zlatan Ibrahimovic", 59, 86, 77, 79, 34, 78),
    new Cards("Eden Hazard", 91, 82, 86, 94, 35, 67),
    new Cards("Sergio Aguero", 84, 89, 76, 89, 28, 73),
    new Cards("Robert Lewandowski", 78, 89, 75, 85, 41, 82),
    new Cards("Antoine Griezmann", 86, 86, 81, 88, 50, 70),
    new Cards("Paul Pogba", 75, 79, 86, 85, 69, 87),
    new Cards("Sergio Ramos", 75, 63, 71, 72, 91, 84),
    new Cards("Virgil Van Dijk", 75, 61, 69, 72, 87, 86),
    new Cards("Luka Modric", 76, 76, 90, 91, 70, 67),
    new Cards("Mohamed Salah", 92, 84, 79, 89, 45, 72),
    new Cards("Vincent Kompany", 56, 54, 65, 66, 85, 81),
    new Cards("Alexis Sanchez", 82, 83, 79, 89, 45, 77),
    new Cards("Gareth Bale", 95, 88, 84, 85, 58, 76),
    new Cards("Ngolo Kante", 80, 66, 77, 81, 87, 84),
    new Cards("Mats Hummels", 65, 58, 76, 73, 90, 76),
    new Cards("Diego Godin", 68, 48, 65, 64, 89, 84),
    new Cards("Toni Kroos", 67, 82, 89, 82, 74, 69),
    new Cards("Diego Costa", 75, 83, 64, 76, 49, 87),
    new Cards("David Silva", 66, 74, 87, 91, 50, 60),
    new Cards("Gerard Pique", 55, 61, 69, 66, 87, 76),
    new Cards("Marcelo", 82, 71, 83, 90, 81, 82),
    new Cards("Leonardo Bonucci", 61, 58, 69, 71, 87, 80),
    new Cards("Jordi Alba", 93, 69, 79, 83, 79, 72),
    new Cards("Raheem Sterling", 93, 73, 76, 87, 47, 56)
]

let catagories = [
    "Speed",
    "Shooting",
    "Passing",
    "Dribbling",
    "Defense",
    "Physical"
]
function nav(){
    you = youDeck[youDraw]
    userInput = prompt(`You have drawn ${you._name}. Select catagory 1. ${catagories[0]}: ${you._speed} 2. ${catagories[1]}: ${you._shooting} 3. ${catagories[2]}: ${you._passing} 4. ${catagories[3]}: ${you._dribbling} 5. ${catagories[4]}: ${you._defense} 6. ${catagories[5]}: ${you._physical}. You also have ${youDeck.length}/30 cards`)
    if (userInput >= 1 && userInput < 7){
        choice = userInput - 1 
        compare()
    }
    else {
        alert("This is not a valid input")
        nav()
    }
}
function moveCard(){
    if (compare1){
        youDeck.push(comp)
        compDeck.splice(compDraw)
    }
    else{
        compDeck.push(you);
        youDeck.splice(youDraw)
    }
}
function compare(){
    if (choice == 0 && you._speed > comp._speed){
        alert(`You won! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._speed}`)
        moveCard()
        compare1 = true
    }
    else if(choice == 0 && you._speed < comp._speed){
        alert(`You lost! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._speed}`)
        compare1 = false
    }
    else if (choice == 1 && you._shooting > comp._shooting){
        alert(`You won! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._shooting}`)
        compare1 = true
    }
    else if(choice == 1 && you._shooting < comp._shooting){
        alert(`You lost! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._shooting}`)
        compare1 = false
    }
    else if (choice == 2 && you._passing > comp._passing){
        alert(`You won! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._passing}`)
        compare1 = true
    }
    else if(choice == 2 && you._passing < comp._passing){
        alert(`You lost! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._passing}`)
        compare1 = false
    }
    else if (choice == 3 && you._dribbling > comp._dribbling){
        alert(`You won! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._dribbling}`)
        compare1 = true
    }
    else if(choice == 3 && you._dribbling < comp._dribbling){
        alert(`You lost! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._dribbling}`)
        compare1 = false
    }
    else if (choice == 4 && you._defense > comp._defense){
        alert(`You won! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._defense}`)
        compare1 = true
    }
    else if(choice == 4 && you._defense < comp._defense){
        alert(`You lost! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._defense}`)
        compare1 = false
    }
    else if (choice == 5 && you._physical > comp._physical){
        alert(`You won! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._physical}`)
        compare1 = true
    }
    else if(choice == 5 && you._physical < comp._physical){
        alert(`You lost! The opponents card is ${comp._name}, ${catagories[choice]} was ${comp._physical}`)
        compare1 = false
    }
    console.log("test")
    win()
    draw()
}
function win(){
    if (youDeck == iterations){
        userInput = prompt("You win! Restart? Y/N");
        if (userInput == "Y" || userInput == "y"){
            alert("Magic restart")
        }
        else if (userInput == "N" || userInput == "n"){

        }
        else {
            alert("You're a dick")
        }
    }
}
function start(){
    for (i = 0; i < iterations/2; i++){
        randomNumber1 = Math.floor(Math.random() * (30 - i))
        you = players[randomNumber1]
        // console.log(players)
        // console.log(youDeck)
        // console.log(you)
        youDeck.push(you)
        players.splice(randomNumber1, 1)
        // console.log(players)
        // console.log(youDeck)
        // console.log(you)
        // console.log(comp)
    }
    for (i = 0; i < iterations/2; i++){
        randomNumber = Math.floor(Math.random() * (15 - i))
        comp = players[randomNumber]
        compDeck.push(comp)
        players.splice(randomNumber, 1)
        compDeck = players
    }
    console.log(players)
    console.log(youDeck)
    console.log(compDeck)
    // console.log(you)
    nav()
}
function draw(){
    if (youDraw >= youDeck.length && compare1){
        youDraw = 0;
        nav()
    }
    else if (compDraw >= compDeck.length && compare1 == false){
        compDraw = 0;
        nav()
    }
    else if (compare){
        youDraw += 1;
        console.log(youDraw)
        nav()
    }
    else if (compare1 == false){
        compDraw += 1;
        nav()
    }
}
let userInput
let choice
let randomNumber1
let you
let youDeck = []
let comp
let compDeck = []
let iterations = players.length
let youDraw = 0
let compDraw
let compare1
start()