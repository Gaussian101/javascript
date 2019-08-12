let gameCanvas = document.getElementById('gameCanvas')
let ctx = gameCanvas.getContext("2d");
let foodX
let foodY
class snake {
    constructor(player, dx, dy, score, position){
        this._player = player;
        this._dx = dx;
        this._dy = dy;
        this._score = score;
        this._position = position;
    }
    get player(){
        return this._player
    }
    get dx(){
        return this._dx
    }
    get dy(){
        return this._dy
    }
    drawSnakePart(snakePart){
        ctx.fillStyle = 'lightgreen';
        ctx.strokeStyle = 'darkgreen';
        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }
    drawSnake(){
        this._position.forEach(this.drawSnakePart);
    }
    advanceSnake(){
        const head = {
            x: this._position[0].x + this._dx, y: this._position[0].y + this._dy
        };
        this._position.unshift(head);
        const didEatFood = this._position[0].x === foodX && this._position[0].y === foodY;
        if (didEatFood) {
            this._score += 10;
            document.getElementById('score').innerHTML = this._score; 
            this.createFood();
        } 
        else {    
            this._position.pop();
        }
    }
    randomTen(min, max) {  
        return Math.round((Math.random() * (max-min) + min) / 10) * 10;
    }
    createFood() {  
        foodX = this.randomTen(0, gameCanvas.width - 10);  
        foodY = this.randomTen(0, gameCanvas.height - 10);
        this._position.forEach(function isFoodOnSnake(part) {    
            const foodIsOnSnake = part.x == foodX && part.y == foodY    
            if (foodIsOnSnake){
                this.createFood();  
            }  
        });
    }
    drawFood() { 
        ctx.fillStyle = 'red'; 
        ctx.strokestyle = 'darkred'; 
        ctx.fillRect(foodX, foodY, 10, 10); 
        ctx.strokeRect(foodX, foodY, 10, 10);
    }
    didGameEnd() {  
        for (let i = 4; i < this._position.length; i++) {    
            const didCollide = this._position[i].x === this._position[0].x && this._position[i].y === this._position[0].y
            if (didCollide){
                return true
            }
            const hitLeftWall = this._position[0].x < 0;
            const hitRightWall = this._position[0].x > gameCanvas.width - 10;  
            const hitToptWall = this._position[0].y < 0;  
            const hitBottomWall = this._position[0].y > gameCanvas.height - 10;
            return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
        }
    }
}
const playerOne = new snake('Player One', 10, 0, 0, [
    {x: 150, y: 170},
    {x: 140, y: 170},
    {x: 130, y: 170},
    {x: 120, y: 170},
    {x: 110, y: 170},
]);
const playerTwo = new snake('Player Two', 10, 0, 0, [
    {x: 150, y: 130},
    {x: 140, y: 130},
    {x: 130, y: 130},
    {x: 120, y: 130},
    {x: 110, y: 130},
]);
document.addEventListener("keydown", changeDirection)
playerOne.createFood();
main();

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}
function main() {
    if (playerOne.didGameEnd()){
        document.getElementById('score').innerHTML = `You died! Score: ${playerOne._score}`; 
        return;
    }
    else if(playerTwo.didGameEnd()){
        document.getElementById('score2').innerHTML = `You died! Score: ${playerTwo._score}`
        return;
    }
    else{
        setTimeout(function onTick() {
            clearCanvas();
            playerOne.drawFood();  
            playerOne.advanceSnake();
            playerTwo.advanceSnake();
            playerOne.drawSnake();
            playerTwo.drawSnake();
            main();
        }, 100)
    }
}
function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const keyPressed = event.keyCode;  
    const goingUp = playerOne._dy === -10;  
    const goingDown = playerOne._dy === 10;  
    const goingRight = playerOne._dx === 10;  
    const goingLeft = playerOne._dx === -10;
    const LEFT_KEY2 = 65;
    const RIGHT_KEY2 = 68;
    const UP_KEY2 = 87;
    const DOWN_KEY2 = 83;
    const goingUp2 = playerTwo._dy === -10;  
    const goingDown2 = playerTwo._dy === 10;  
    const goingRight2 = playerTwo._dx === 10;  
    const goingLeft2 = playerTwo._dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
        playerOne._dx = -10;
        playerOne._dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        playerOne._dx = 0;
        playerOne._dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {    
        playerOne._dx = 10;    
        playerOne._dy = 0;  
    }
    if (keyPressed === DOWN_KEY && !goingUp) {    
        playerOne._dx = 0;    
        playerOne._dy = 10;  
    }
    if (keyPressed === LEFT_KEY2 && !goingRight2) {
        playerTwo._dx = -10;
        playerTwo._dy = 0;
    }
    if (keyPressed === UP_KEY2 && !goingDown2) {
        playerTwo._dx = 0;
        playerTwo._dy = -10;
    }
    if (keyPressed === RIGHT_KEY2 && !goingLeft2) {    
        playerTwo._dx = 10;    
        playerTwo._dy = 0;  
    }
    if (keyPressed === DOWN_KEY2 && !goingUp2) {    
        playerTwo._dx = 0;    
        playerTwo._dy = 10;  
    }
}