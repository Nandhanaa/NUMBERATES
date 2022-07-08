const button = document.getElementById("checkButton");
console.log(button);

const count = document.getElementById("attemptCount");
var y = Math.round(Math.random() *100);
var c = 10;
 x;
 function check()
{   console.log(y);   
    x = (document.getElementById("textBox").value);
    c--;

if(x==y){
    alert("CONGRATS YOU HAVE WON THE GAME");
    location.href = "./win.html";
}
else if(x>y){
    alert("TRY A SMALLER NUMBER");
}
else {
    alert("TRY A GREATER NUMBER");
}
if(c==0){
    alert("S0RRY BETTER LUCK NEXT TIME.....");
    location.href ="./lose.html";
}
console.log(x);
count.innerHTML=c;
}