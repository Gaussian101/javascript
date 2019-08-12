function hello(){
    console.log("Hello Code Nation")
}
function loop(fn){
    for(i = 0; i < 5; i++){
        fn()
    }
}
loop(hello)

let nums = [
    1,
    2,
    3,
    4,
    5,
]
let thing = nums.map(myFunction)
function myFunction(num){
    return num * 3;
}
console.log(thing)

function multiply(a, b){
    return a * b;
}
function add(a, b){
    return a + b;
}
function divide(a, b){
    return a / b;
}
function subtract(a, b){
    return a - b;
}

function doMath(num1){
    return (num2, fn) => {
        return fn(num1, num2);
    }
}
let something = doMath(3)(2, add)
console.log(something)