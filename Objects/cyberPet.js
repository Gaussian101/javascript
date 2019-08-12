class Animal{
    constructor(name, happiness, thirst, hunger, appearance){
        this._name = name;
        this._happiness = happiness;
        this._thirst = thirst;
        this._hunger = hunger;
        this._appearance = appearance;
    }
    get name(){
        return this._name;
    }
    get happiness(){
        return this._happiness;
    }
    get thirst(){
        return this._thirst;
    }
    get hunger(){
        return this._hunger
    }
    play(){
        if (this._thirst >= 12){
            this._thirst -= 12;
        }
        else{
            this._thirst = 0;
        }
        if (this._hunger >= 8){
            this._hunger -= 8;
        }
        else{
            this._hunger = 0;
        }
        if (this._happiness <= 85){
            this._happiness += 15;
        }
        else{
            this._happiness = 100;
        }
        this.Actions()
    }
    feed(){
        if (this._thirst >= 8){
            this._thirst -= 8;
        }
        else{
            this._thirst = 0;
        }
        if (this._happiness >= 5){
            this._happiness -= 5;
        }
        else{
            this._happiness = 0;
        }
        if (this._hunger <= 85){
            this._hunger += 15;
        }
        else{
            this._hunger = 100;
        }
        this.Actions();
    }
    water(){
        if (this._hunger >= 8){
            this._hunger -= 8;
        }
        else{
            this._hunger = 0;
        }
        if (this._happiness >= 5){
            this._happiness -= 5;
        }
        else{
            this._happiness = 0;
        }
        if (this._thirst <= 85){
            this._thirst += 15;
        }
        else{
            this._thirst = 100;
        }
        this.Actions();
    }
    observe(){
        if (animal == "Dog"){
            this.observeDog();
        }
        else if (animal == "Cat"){
            this.observeCat();
        }
        else{
            this.observeRabbit();
        }
    }
}
class Dog extends Animal{
    constructor(name, tailWag, bark){
        super(name);
        this._tailWag = tailWag;
        this._bark = bark;
        this._happiness = 100;
        this._hunger = 100;
        this._thirst = 100;
    }
    get tailWag(){
        return this._tailWag;
    }
    get bark(){
        return this._bark;
    }
    Actions(){
        userInput = prompt(`Your ${animal} ${this._name} is currently at ${this._thirst} thirst, ${this._hunger} hunger and has ${this._happiness} happiness. What do you wish to do? 'p' for Play, 'f' for feed, 'w' for water, 'o' to observe.`)
        console.log("Test")
        if (userInput == "p"){
            this.play();
        }
        else if (userInput == "f"){
            return this.feed();
        }
        else if (userInput == "w"){
            return this.water();
        }
        else if (userInput == "o"){
            console.log("Test")
            return this.observeDog();
        }
        else{
            alert("This is not a valid input");
            return this.Actions()
        }
    }
    observeDog(){
        if (this._happiness >= 85 && this._thirst >= 50 && this._hunger >= 50){
            this._tailWag = true;
            this._bark = false;
            this._appearance = `${this.name} is wagging its tail. They look happy.`
        }
        else if (this._happiness <= 25 || this._thirst <= 25 || this._hunger <= 25){
            this._tailWag = false;
            this._bark = true;
            this._appearance = `${this.name} is trying to get your attention by barking`
        }
        else{
            this._tailWag = false;
            this._bark = false;
            this._appearance = `${this.name} looks a bit bored`
        }
        alert(this._appearance);
        return this.Actions();
    }
}
class Cat extends Animal{
    constructor(name, purr, meow){
        super(name)
        this._purr = purr;
        this._meow = meow;
        this._happiness = 100;
        this._hunger = 100;
        this._thirst = 100;
    }
    get purr(){
        return this._purr;
    }
    get meow(){
        return this._meow;
    }
    Actions(){
        userInput = prompt(`Your ${animal} ${this._name} is currently at ${this._thirst} thirst, ${this._hunger} hunger and has ${this._happiness} happiness. What do you wish to do? 'p' for Play, 'f' for feed, 'w' for water, 'o' to observe.`)
        if (userInput == "p"){
            return this.play();
        }
        else if (userInput == "f"){
            return this.feed();
        }
        else if (userInput == "w"){
            return this.water();
        }
        else if (userInput == "o"){
            alert ("Test")
            return this.observe();
        }
        else{
            alert("This is not a valid input");
            return this.Actions()
        }
    }
    observeCat(){
        if (this._happiness >= 85 && this._thirst >= 50 && this._hunger >= 50){
            this._purr = true;
            this._meow = false;
            this._appearance = `${this.name} is purring. They look happy.`
        }
        else if (this._happiness <= 25 || this._thirst <= 25 || this._hunger <= 25){
            this._purr = false;
            this._meow = true;
            this._appearance = `${this.name} is trying to get your attention by meowing`
        }
        else{
            this._purr = false;
            this._meow = false;
            this._appearance = `${this.name} looks a bit bored`
        }
        alert(this._appearance);
        return this.Actions();
    }
}
class Rabbit extends Animal{
    constructor(name, binky, nuzzle){
        super(name);
        this._binky = binky;
        this._nuzzle = nuzzle;
        this._happiness = 100;
        this._hunger = 100;
        this._thirst = 100;
    }
    get binky(){
        return this._binky;
    }
    get nuzzle(){
        return this._nuzzle;
    }
    Actions(){
        userInput = prompt(`Your ${animal} ${this._name} is currently at ${this._thirst} thirst, ${this._hunger} hunger and has ${this._happiness} happiness. What do you wish to do? 'p' for Play, 'f' for feed, 'w' for water, 'o' to observe.`)
        if (userInput == "p"){
            return this.play();
        }
        else if (userInput == "f"){
            return this.feed();
        }
        else if (userInput == "w"){
            return this.water();
        }
        else if (userInput == "o"){
            return this.observe();
        }
        else{
            alert("This is not a valid input");
            return this.Actions()
        }
    }
    observeRabbit(){
        if (this._happiness >= 85 && this._thirst >= 50 && this._hunger >= 50){
            this._binky = true;
            this._nuzzle = false;
            this._appearance = `${this.name} is binking. They look happy.`
        }
        else if (this._happiness <= 25 || this._thirst <= 25 || this._hunger <= 25){
            this._binky = false;
            this._nuzzle = true;
            this._appearance = `${this.name} is trying to get your attention by nuzzling you`
        }
        else{
            this._binky = false;
            this._nuzzle = false;
            this._appearance = `${this.name} looks a bit bored`
        }
        alert(this._appearance);
        return this.Actions();
    }
}

let userInput;
let animal;

// userInput = prompt("Choose your pet, d for dog, c for cat, r for rabbit");
// if (userInput == "d"){
//     animal = "Dog";
//     userInput = prompt("Type in the name of your dog");
//     const testDog = new Dog(userInput);
//     testDog.Actions();
// }
// else if (userInput == "c"){
//     animal = "Cat";
//     userInput = prompt("Type in the name of your cat");
//     const testCat = new Cat(userInput);
//     testCat.Actions();
// }
// else if (userInput == "r"){
//     animal = "Rabbit";
//     userInput = prompt("Type in the name of your rabbit");
//     const testRabbit = new Rabbit(userInput);
//     testRabbit.Actions();
// }
// else {
//     alert("This is not a valid input");
// }