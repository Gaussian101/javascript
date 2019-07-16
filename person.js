const person = {
    name: "Matthew Forde",
    age: 26,
    favouriteSongs: [
        "When the Wild Wind Blows",
        "Out of the Silent Planet",
        "Fear of the Dark"
    ],
    sayHi: function() {
        console.log(`Hi my name is ${this.name}`)
    }
}
console.log(person.favouriteSongs)
person.sayHi()