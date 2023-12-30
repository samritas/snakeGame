
let scale=20;
let row=25;
let column=25;
var canvas;
var ctx;
var velocityX=0;
var velocityY=0;

var foodX;
var foodY;
var scoreCount=0;
var TotalScore;
var snakeBody=[];
var gameover=false;
var  GameOverText;

// var food=[];
// food[0]={
// x:Math.floor(Math.random()*column)*scale,
// y:Math.floor(Math.random()*row)*scale
// }
// let snake=[];
// snake[0]={
//     x:10,
//     y:20
//     // x:Math.floor(Math.random()*column)*scale,
//     // y:Math.floor(Math.random()*row)*scale
//     }

var snakeX= Math.floor(Math.random()*column)*scale;
var snakeY=Math.floor(Math.random()*row)*scale;

window.onload=function(){
    canvas=document.getElementById("canvas")
    canvas.height=row*scale;
    canvas.width=column*scale;
    ctx=canvas.getContext("2d");
    console.log(ctx);
    // 
    TotalScore=document.getElementById("score");
    TotalScore.innerHTML="";

    GameOverText=document.getElementById("game_over");
    GameOverText.innerHTML=" "

    PlaceFood()
    document.addEventListener("keyup",changeDirection)
    setInterval(update,100)
    
}

function PlaceFood(){
   foodX=Math.floor(Math.random()*column)*scale,
  foodY=Math.floor(Math.random()*row)*scale
}

function update(){
    if(gameover)
    {
        return;
    }
    ctx.fillStyle="black"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle="red"
    ctx.strokeStyle="#fff"

    ctx.fillRect(foodX,foodY,scale,scale) 
    ctx.strokeRect(foodX,foodY,scale,scale) 
    // IF YHE FOOD IS EATEN
if(snakeX==foodX&&snakeY==foodY){
    scoreCount+=1;
    snakeBody.push([foodX,foodY])
    PlaceFood()
   
}

// ***********************************

for(let i=snakeBody.length-1;i>0;i--)
{
    snakeBody[i]=snakeBody[i-1]
}
if(snakeBody.length){
    snakeBody[0]=[snakeX,snakeY]
}
    ctx.fillStyle="#fff"
    ctx.strokeStyle="pink"
    
    snakeX +=velocityX*scale;
    snakeY +=velocityY*scale;
    // console.log(snakeY);
    ctx.fillRect(snakeX,snakeY,scale,scale) 
    ctx.strokeRect(snakeX,snakeY,scale,scale) 
    for(let i=0;i<snakeBody.length;i++){
        ctx.fillRect(snakeBody[i][0],snakeBody[i][1],scale,scale)
    }

// game over conditions
if(snakeX<0||snakeX>canvas.width||snakeY<0||snakeY>canvas.height){
    gameover=true;
    TotalScore.innerHTML="you scored"+" " + scoreCount;
    GameOverText.innerHTML="game over"
}
for(let i=0;i<snakeBody.length;i++){
    if(snakeX==snakeBody[i][0]&&snakeY==snakeBody[i][1]){
        gameover=true;
        TotalScore.innerHTML="you scored"+" " + scoreCount;
        GameOverText.innerHTML="game over"
    
    }
}

}
// TO MOVE
function changeDirection(e){
    if(e.code=="ArrowLeft"&&velocityX!=1){
        velocityX=-1,velocityY=0;
    }
    else if(e.code=="ArrowRight"&&velocityX!=-1){
        velocityX=1,velocityY=0;
    }

    else if(e.code=="ArrowUp"&&velocityY!=1){
        velocityX=0,velocityY=-1;
    }

    else if(e.code=="ArrowDown"&&velocityY!=-1){
        velocityX=0,velocityY=1;
    }
}
console.log("helo");

