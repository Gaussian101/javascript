const pet = {
    name: "",
    typeOfPet: "",
    age: "",
    colour: "",
    eating: true,
    drinking: true,
    eat() {
        if (this.eating) {
            console.log("Your pet is eating")
        }
    },
    drink() {
        if (this.drinking) {
            console.log("Your pet is drinking")
        }
    },
}
pet.eat()
pet.drink()

console.log(pet.eat())
console.log(pet.eat)