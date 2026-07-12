// ==========================
// Page Navigation
// ==========================

function nextPage(pageId){

document.querySelectorAll(".page").forEach(page=>{

page.classList.remove("active");

});

document.getElementById(pageId).classList.add("active");

window.scrollTo(0,0);

}

// ==========================
// No Button
// Moves once only
// ==========================

const noBtn=document.getElementById("noBtn");

let moved=false;

noBtn.addEventListener("click",()=>{

if(!moved){

const x=Math.random()*180-90;
const y=Math.random()*40-20;

noBtn.style.position="relative";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

moved=true;

}else{

nextPage("letter");

}

});

// ==========================
// Floating Hearts
// ==========================

const heartContainer=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("span");

heart.className="heart";

heart.innerHTML="🤍";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(8+Math.random()*6)+"s";

heart.style.fontSize=
(16+Math.random()*16)+"px";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

}

setInterval(createHeart,700);

// ==========================
// Keyboard Support
// ==========================

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

const current=document.querySelector(".page.active");

if(current.id==="welcome"){

nextPage("cat");

}

}

});

// ==========================
// Console Easter Egg 😂
// ==========================

console.log(
"🐱 Built with love by Chip for Eric & Norsyazanah ❤️"
);