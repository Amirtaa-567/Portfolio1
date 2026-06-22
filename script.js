// Typing Effect

const text =
[
"Amirtaa Mahalingam",
"B.Tech IT Student",
"Full Stack Developer",
"UI/UX Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1000);

}else{

setTimeout(type,100);
}

})();

// Stars

const stars = document.getElementById("stars");

for(let i=0;i<200;i++){

let star = document.createElement("div");

star.classList.add("star");

star.style.left = Math.random()*100+"%";
star.style.top = Math.random()*100+"%";

stars.appendChild(star);
}


const revealElements =
document.querySelectorAll(
'.about-content,.about-planet,.info-card'
);

window.addEventListener('scroll',()=>{

revealElements.forEach(el=>{

let top =
el.getBoundingClientRect().top;

let trigger =
window.innerHeight - 100;

if(top < trigger){

el.classList.add('show');
}

});

});

// Scroll Animation 
const projectCards =
document.querySelectorAll('.project-card');

window.addEventListener('scroll',()=>{

projectCards.forEach(card=>{

let cardTop =
card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){

card.classList.add('show');

}

});

}); 

document.querySelectorAll('.project-card')
.forEach(card=>{

card.addEventListener('mousemove',(e)=>{

const x =
e.offsetX;

const y =
e.offsetY;

const rotateY =
(x/card.offsetWidth - 0.5) * 15;

const rotateX =
(y/card.offsetHeight - 0.5) * -15;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave',()=>{

card.style.transform =
'perspective(1000px) rotateX(0) rotateY(0)';
});

});