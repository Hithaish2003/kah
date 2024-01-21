let play1=document.getElementById("we1");
let audio1,audio2,audio3,audio4;
function playMusic1(){
audio1=new Audio("hanuman.mp3.mp3");
audio1.play();
audio2.pause();
audio3.pause();
audio4.pause();
}
play1.addEventListener("click",playMusic1);
let play2=document.getElementById("we2");
function playMusic2(){
audio2=new Audio("kurchi.mp3.mp3");
audio2.play();
audio1.pause();
audio3.pause();
audio4.pause();
}
play2.addEventListener("click",playMusic2);
let play3=document.getElementById("we3");
function playMusic3(){
audio3=new Audio("alien.mp3.mp3");
audio3.play();
audio1.pause();
audio2.pause();
audio4.pause();
}
play3.addEventListener("click",playMusic3);
let play4=document.getElementById("we4");
function playMusic4(){
audio4=new Audio("eagle.mp3.mp3");
audio4.play();
audio1.pause();
audio3.pause();
audio2.pause();
}
play4.addEventListener("click",playMusic4);