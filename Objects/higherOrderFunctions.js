// function add(num1, num2){
//     console.log(num1 + num2)
// }

// function isDivisible(num3, num4, fn){
//     if (num3 % num4 == 0){
//         fn(num3, num4)
//     }
//     else{
//         console.log(`${num3} is not divisible by ${num4}`)
//     }
// }

// for(i = 1; i <=94; i++){
//     isDivisible(96, i, add)
// }

let myFunction = () => {
    return () => {
        console.log("hello")
    }
}
let func = myFunction()
func()
console.log(`${myFunction()}`)