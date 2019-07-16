const coffee = {
    branch: "",
    drinks: [
        " Frappachino",
        " Flat White",
        " Latte",
        " Mocha"
    ],
    drinksPrice: [
        8,
        5,
        6,
        7,
    ],
    food: [
        "Cake",
        "Hot Sandwich",
        "Cold Sandwich",
        "Cookie",
    ],
    foodPrice: [
        4,
        6,
        5,
        1,
    ],
    foodOrdered: [],
    drinksOrdered: [],
    foodOrderedPrice: [],
    drinksOrderedPrice: [],
    userInput: "",
    navigation(){
        userInput = prompt("Press 'f' to order food and 'd' to order drinks and 'o' to finalise order.");
        if (userInput == "f"){
            console.log('testing nav')
            return this.orderingFood();
        }
        else if (userInput == "d"){
            return this.orderingDrinks();
        }
        else if (userInput == "o"){
            return this.ordered();
        }
        else{
            alert("This is not a valid input");
            return this.navigation();
        }
    },
    orderingFood(){
        userInput = prompt("1. Cake, 2. Hot Sandwich, 3. Cold Sandwich, 4. Cookie. Or 'x' to exit. Type the number of the order that you wish to order (one at a time.")
        if (userInput == "x"){
            console.log("test");
            return this.navigation();
        } 
        else if(userInput == 1 || userInput == 2 || userInput == 3 || userInput == 4){
            console.log('test input');
           this.foodOrdered.push(this.food[userInput - 1]);
           this.foodOrderedPrice.push(this.foodPrice[userInput - 1]);
           alert(this.foodOrdered);
           return this.orderingFood();
        }
        else{
            alert("This is not a valid input");
            return this.orderingFood();
        }
    },
    orderingDrinks(){
        userInput = prompt("1. Frappachino, 2. Flat White, 3. Latte, 4. Mocha. Or 'x' to exit. Type the number of the order that you wish to order (one at a time.");
        if (userInput == "x"){
            console.log("test");
            return this.navigation();
        } 
        else if(userInput == 1 || userInput == 2 || userInput == 3 || userInput == 4){
            console.log('test input');
           this.drinksOrdered.push(this.drinks[userInput - 1]);
           this.drinksOrderedPrice.push(this.drinksPrice[userInput - 1]);
           alert(this.drinksOrdered);
           return this.orderingDrinks();
        }
        else{
            alert("This is not a valid input");
            return this.orderingDrinks();
        }
    },
    ordered(){
        console.log(this.foodOrderedPrice + this.drinksOrderedPrice)
        let totalDrinksPrice = this.drinksOrderedPrice.reduce((a, b) => a + b, 0);
        let totalFoodPrice = this.foodOrderedPrice.reduce((a, b) => a + b, 0);
        let totalPrice = totalDrinksPrice + totalFoodPrice
        alert(`Your order is${this.drinksOrdered} ${this.drinksOrderedPrice} & ${this.foodOrdered} ${this.foodOrderedPrice} and the price is £${totalPrice}`);
    },
}


coffee.navigation()