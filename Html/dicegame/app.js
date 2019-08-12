let btn = document.getElementsByClassName("roll")
let diceImg = document.getElementsByClassName("dice")
let roll = document.getElementsByClassName("total")
let rollArea = document.getElementsByClassName("roll-area")
let winLose = document.getElementsByClassName("win-lose")
retryBtn = document.createElement('button')
let gameArea = document.getElementById("flex")
winLose[0].style.display = "none"
winLose[1].style.display = "none"
rollArea[0].appendChild(winLose[0])
rollArea[1].appendChild(winLose[1])
retryBtn.innerHTML = "Retry?"
retryBtn.style.display = "none"
gameArea.appendChild(retryBtn)
let score = 0
let victoryCondition = false

// let btn2 = document.getElementById("playerTwoBtn")
// let diceImg2 = document.getElementById("playerTwoDice")
// let roll2 = document.getElementById("playerTwoRoll")
// let rollArea2 = document.getElementById("rollAreaTwo")
// let win2 = document.createElement("p")
// let lose2 = document.createElement("p")
// let holdBtn2= document.getElementById("playerTwoHold")
// win2.innerHTML = "You Win"
// win2.style.display = "none"
// rollArea2.appendChild(win2)
// lose2.innerHTML= "You Lost"
// lose2.style.display = "none"
// rollArea2.appendChild(lose2)
// btn2.disabled = true
// holdBtn2.disabled = true
let score2 = 0

btn[0].addEventListener("click", ()=>{
    let dice = Math.floor(Math.random() * 6) + 1
    score += dice
    validate()
    if(dice == 1 && victoryCondition == false){
        score = 0
        btn.disabled = true
        btn[2].disabled = false
        btn[1].disabled = true
        btn[3].disabled = false
    }
    else{
        
    }
    diceImg.src = `img/dice${dice}.png`
    roll.innerHTML = score
    validate()
})
btn[2].addEventListener("click", ()=> {
    let dice2 = Math.floor(Math.random() * 6) + 1
    score2 += dice2
    validate()
    if(dice2 == 1 && victoryCondition == false){
        score2 = 0
        btn2.disabled = true
        btn.disabled = false
        holdBtn.disabled = false
        holdBtn2.disabled = true
    }
    else{

    }
    
    diceImg2.src = `img/dice${dice2}.png`
    roll2.innerHTML = score2
    validate()
})
btn[1].addEventListener("click", ()=>{
    btn.disabled = true
    btn2.disabled = false
    holdBtn.disabled = true
    holdBtn2.disabled = false
})
btn[3].addEventListener("click", ()=>{
    btn2.disabled = true
    btn.disabled = false
    holdBtn2.disabled = true
    holdBtn.disabled = false
})
retryBtn.addEventListener("click", ()=>{
    score = 0
    score2 = 0 
    roll[0].innerHTML = score
    roll[1].innerHTML = score2
    winLose[0].style.display = "none"
    retryBtn.style.display = "none"
    diceImg[0].style.display = "initial"
    btn[0].style.display = "initial"
    winLose.style.display = "none"
    diceImg[1].style.display = "initial"
    btn[2].style.display = "initial"
    btn[1].style.display = "initial"
    btn[3].style.display = "initial"
    victoryCondition = false
})
// retryBtn2.addEventListener("click", ()=>{
//     score = 0
//     score2 = 0 
//     roll.innerHTML = score
//     roll2.innerHTML = score2
//     winLose.style.display = "none"
//     retryBtn.style.display = "none"
//     diceImg.style.display = "initial"
//     btn.style.display = "initial"
//     win2.style.display = "none"
//     retryBtn2.style.display = "none"
//     diceImg2.style.display = "initial"
//     btn2.style.display = "initial"
//     holdBtn.style.display = "initial"
//     holdBtn2.style.display = "initial"
//     victoryCondition = false
// })
function validate() {
    if(score > 20){
        winLose.innerHTML = "You Win"
        winner()
        victoryCondition = true
    }
    else if(score2 > 20){
        winLose.innerHTML = "You Lose"
        // winner2()
        victoryCondition = true
    }
    else if(btn[0].disabled == false && score2 > 0 && score > score2){
        winLose.innerHTML = "You Win"
        winner()
        victoryCondition = true
    }
    else if(btn[2].disabled == false && score > 0 && score2 > score){
        winLose.innerHTML = "You Lose"
        // winner2()
        victoryCondition = true
    }
    else{
        
    }
}

function winner(){
    console.log(btn)
    diceImg[0].style.display = "none"
    btn[2].style.display = "none"
    winLose[0].style.display = "block"
    winLose[1].style.display = "block"
    retryBtn.style.display = "block"
    diceImg[1].style.display = "none"
    btn[3].style.display = "none"
    btn[1].style.display = "none"
    btn[0].style.display = "none"
}
function winner2(){
    console.log(diceImg)
    diceImg[0].style.display = "none"
    btn2.style.display = "none"
    // win2.style.display = "block"
    btn.style.display = "none"
    holdBtn.style.display = "none"
    holdBtn2.style.display = "none"
    winLose.style.display = "block"
    retryBtn.style.display = "block"
}