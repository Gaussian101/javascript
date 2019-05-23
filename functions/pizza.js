var orderCount = 0;

const takeOrder = (pizzaType, topping, base) =>
{
    console.log(`${pizzaType} with ${base} base and extra ${topping}`);
    orderCount++;
}
takeOrder("Margarita", "Cheese", "Thin Crust" )