// d is undefined
// let a = 1;
// let b = 2;
// let c = 3;

// console.log(a)
// console.log(c)

// function myFunction() {
//     console.log(b)
//     if(true){
//         let d = 4;
//         console.log(d)
//     }
//     console.log(d)
// }
// myFunction()

function whichGreeting(timeOfDay) {
    console.log(`Good ${timeOfDay}`)
}

function greet(time, fn){
    if (time < 12){
        fn("Morning")
    }
    else if (time >= 12 && time < 18){
        fn("Afternoon")
    }
    else {
        fn("Evening")
    }
}

greet(14, whichGreeting)