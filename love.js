const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

window.onresize=()=>{
canvas.width=innerWidth;
canvas.height=innerHeight;
}

let particles=[];   class Particle{

constructor(x,y,color,size,speed,angle){

this.x=x;
this.y=y;

this.color=color;

this.size=size;

this.speed=speed;

this.angle=angle;

this.life=120;

}

draw(){

ctx.beginPath();

ctx.fillStyle=this.color;

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fill();

}

update(){

this.x+=Math.cos(this.angle)*this.speed;

this.y+=Math.sin(this.angle)*this.speed;

this.speed*=0.98;

this.life--;

this.draw();

}

}       function sakuraFirework(x,y){

const colors=[
"#ff8fb8",
"#ffc0cb",
"#ff66aa",
"#ffffff",
"#ffb6c1"
];

for(let layer=1;layer<=3;layer++){

let amount=60*layer;

let radius=2.2*layer;

for(let i=0;i<amount;i++){

let angle=Math.PI*2/amount*i;

let speed=radius+Math.random()*2;

particles.push(

new Particle(

x,

y,

colors[Math.floor(Math.random()*colors.length)],

3-layer*0.4,

speed,

angle

)

);

}

}

}         setInterval(()=>{

let x=Math.random()*canvas.width*0.8+100;

let y=Math.random()*canvas.height*0.4+50;

sakuraFirework(x,y);

},900);      const petals=document.getElementById("petals");

setInterval(()=>{

let p=document.createElement("div");

p.innerHTML="🌸";

p.style.position="absolute";

p.style.left=Math.random()*100+"vw";

p.style.top="-30px";

p.style.fontSize=20+Math.random()*20+"px";

p.style.animation=`fall ${6+Math.random()*4}s linear`;

petals.appendChild(p);

setTimeout(()=>{

p.remove();

},10000);

},180);

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(110vh) rotate(720deg);

opacity:.2;

}

}

`;

document.head.appendChild(style);        function animate(){

ctx.fillStyle="rgba(2,4,13,.2)";

ctx.fillRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.update();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();     setTimeout(()=>{

document.getElementById("text").style.opacity=1;

},6000);