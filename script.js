var p1Display= document.querySelector('#p1Display')
var p2Display= document.querySelector('#p2Display')

var p1Button= document.querySelector('#p1Button')
var p2Button= document.querySelector('#p2Button')


let num =0;

p1Button.addEventListener('click',function(){
    num +=1;
    p1Display.textContent= num;
    if(num>20){
        p1Button.addEventListener('click',function(){
            return `Don't cross your limits....`
        })
    }
    
})

let num1 =0;
p2Button.addEventListener('click',function(){
    num1 +=1;
    p2Display.textContent= num1;

    if(num>20){
        p2Button.addEventListener('click',function(){
            return `Don't cross your limits....`
        })
    }
    
})

var Reset = document.querySelector('#Reset');
Reset.addEventListener('click',function()
{
    p1Display.textContent=0;
    p2Display.textContent=0;
})