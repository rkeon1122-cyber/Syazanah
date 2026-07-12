// =========================
// PAGE SWITCH
// =========================

function nextPage(id){

document.querySelectorAll(".page").forEach(page=>{

page.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

// =========================
// FLOATING HEARTS
// =========================

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="🤍";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(8+Math.random()*6)+"s";

heart.style.fontSize=
(15+Math.random()*18)+"px";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

}

setInterval(createHeart,500);

// =========================
// NO BUTTON ESCAPE
// =========================

const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");

let yesScale=1;

noBtn.addEventListener("mouseenter",moveNo);
noBtn.addEventListener("touchstart",moveNo);

function moveNo(e){

e.preventDefault();

const x=Math.random()*260-130;
const y=Math.random()*180-90;

noBtn.style.position="relative";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

yesScale+=0.08;

yesBtn.style.transform=
`scale(${yesScale})`;

}

// =========================
// TYPEWRITER
// =========================

const paragraphs=document.querySelectorAll(".type");

paragraphs.forEach(p=>{

const text=p.innerHTML;

p.innerHTML="";

let i=0;

function type(){

if(i<text.length){

p.innerHTML+=text.charAt(i);

i++;

setTimeout(type,28);

}

}

const observer=new IntersectionObserver(entries=>{

if(entries[0].isIntersecting){

type();

observer.disconnect();

}

});

observer.observe(p);

});

// =========================
// END HEART BURST
// =========================

const finishBtn=document.querySelector("#video button");

if(finishBtn){

finishBtn.addEventListener("click",()=>{

for(let i=0;i<60;i++){

setTimeout(createHeart,i*40);

}

});

}

// =========================
// CAT BOUNCE
// =========================

const cat=document.querySelector(".cat");

if(cat){

setInterval(()=>{

cat.style.transform="scale(1.06)";

setTimeout(()=>{

cat.style.transform="scale(1)";

},300);

},3500);

}

// =========================
// CONSOLE 😂
// =========================

console.log(
"🐱 Built by Chip with love for Eric ❤️"
);

function openVideo() {
    nextPage("video");

    const video = document.querySelector(".video-player");

    if (video) {
        video.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });
    }
}