var p1Display= document.querySelector('#p1Display')
var p2Display= document.querySelector('#p2Display')

var p1Button= document.querySelector('#p1Button')
var p2Button= document.querySelector('#p2Button')


let p1Score =0;
let p2Score =0;
let winning_score= 3;
let winning_score1= 3;
let isGameOver= false;

p1Button.addEventListener('click',function(){
    if(!isGameOver){
        p1Score +=1;
    }
    if(p1Score === winning_score){
      isGameOver= true
    }
    p1Display.textContent= p1Score;
    
})
p2Button.addEventListener('click',function(){
    if(!isGameOver){
        p2Score +=1;
    }
    if(p2Score === winning_score1){
      isGameOver= true
    }
    p2Display.textContent= p2Score;
    
})

var Reset = document.querySelector('#Reset');
Reset.addEventListener('click',function()
{
    p1Display.textContent=0;
    p2Display.textContent=0;
})