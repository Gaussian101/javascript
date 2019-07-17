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
    userInput = prompt(`You have drawn ${you._name}. Select catagory 1. ${catagories[0]}: ${you._speed} `)
    if (userInput >= 1 && userInput < 7){
        choice = userInput - 1 
        compare()
    }
    else {
        alert("This is not a valid input")
        nav()
    }
}
function compare(){
    if (you._speed > comp._speed){
        alert(`The opponents card is ${comp._name}, speed was ${comp._speed}`)
    }
    else{
        alert(`The opponents card is ${comp._name}, speed was ${comp._speed}`)
    }
}
let userInput
let choice
let you = players[Math.floor(Math.random() * 5)]
let comp = players[Math.floor(Math.random() * 5)]
console.log(you._name)
nav()