
let scissor  = document.getElementById('fig2');
let stone = document.getElementById('fig3');
let paper = document.getElementById('fig1');
let pra = document.querySelector('pra');
let button = document.getElementById('click');
let reset = document.getElementById('reset');
let blank=document.querySelector('selected');
let play=document.getElementById('play');
let comp=document.getElementById('computer');

let count=0;
let prev;
let ele;


scissor.onclick = ()=>{

  if(count==0)
 {document.getElementsByTagName('audio')[0].play(); 
  scissor.style.borderColor = "white";
  scissor.src = "resources/images/circle-cropped.png";
  prev=scissor;
  display1(scissor);
  count++;
}

}

stone.onclick = ()=>{
  
  if(count==0)
  {
  document.getElementsByTagName('audio')[0].play();
  stone.style.borderColor = "white";
  stone.src = "resources/images/circle-cropped.png";
  prev=stone;
  display3(stone);
  count++;
  }
}

paper.onclick = ()=>{
  if(count==0){
  document.getElementsByTagName('audio')[0].play();
  paper.style.borderColor = "white";
  paper.src = "resources/images/circle-cropped.png";
  display2(paper);
  prev=paper;
  count++;
  }
}

reset.onclick = () =>{
  if(count==1)
  {
    document.getElementsByTagName('span')[0].style.backgroundColor="#ec528d";
  document.getElementsByTagName('audio')[0].play();
  button.innerHTML="Not Yet Selected!"
  comp.innerHTML="Computer is Waiting! 🤖"
  document.getElementsByTagName('span')[0].innerHTML = 'Play!';
  
  if(prev==stone)
  {
    stone.src="resources/images/stone.jpeg";
  }
  if(prev==scissor)
  {
    scissor.src="resources/images/scissor.jpeg";
  }
  if(prev==paper)
  {
    paper.src="resources/images/paper.jpeg";
  }
  count--;
}
}

const display1 = (ele) =>{
    button.innerHTML="Scissor Selected!";
}

const display2 = (ele) =>{
  button.innerHTML="Paper Selected!";
}

const display3= (ele) =>{
  button.innerHTML="Stone Selected!";
}
//0-stone
//1-paper
//2-scissor
let winner;
let choreDoor = Math.floor(Math.random()*3);
const randomChoreDoorGenerator = ()=>{
  if(choreDoor === 0 && prev == paper){
         winner="player";
  }
  if(choreDoor === 0 && prev == scissor){
    winner="computer";
  }
  if(choreDoor === 0 && prev == stone){
    winner="tie";
  }

   //paper
if(choreDoor === 1 && prev == paper){
    winner="tie";
}
if(choreDoor === 1 && prev == scissor){
winner="player";
}
if(choreDoor === 1 && prev == stone){
winner="computer";
}
    //scissor

if(choreDoor === 2 && prev == paper){
    winner="computer";
}
if(choreDoor === 2 && prev == scissor){
winner="tie";
}
if(choreDoor === 2 && prev == stone){
winner="player";
}
}
play.onclick = (function() {
  if(button.innerHTML != "Not Yet Selected!")
 { randomChoreDoorGenerator();
  if(choreDoor==0)
    comp.innerHTML="Computer Choose Stone!";
  if(choreDoor==1)
    comp.innerHTML="Computer Choose Paper!"; 
  if(choreDoor==2)
    comp.innerHTML="Computer Choose Scissor!";
  document.getElementsByTagName('audio')[0].play();
  if(winner==="computer")
  { document.getElementsByTagName('span')[0].style.backgroundColor="red";
    document.getElementsByTagName('audio')[2].play();
    document.getElementsByTagName('span')[0].innerHTML = 'Computer won!';
  }
  if(winner==="player")
  {
  document.getElementsByTagName('span')[0].style.backgroundColor="blue";
  document.getElementsByTagName('audio')[1].play();
  document.getElementsByTagName('span')[0].innerHTML = 'Player won!';
  }
  if(winner==="tie")
  {document.getElementsByTagName('span')[0].style.backgroundColor="yellow;";
  document.getElementsByTagName('span')[0].innerHTML = 'Tie!';
  }
 }
});