document.getElementById("year").textContent = new Date().getFullYear();

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function(){
        hamburger.classList.remove("active");
        nav.classList.remove("active");
    });
});

gsap.registerPlugin(ScrollTrigger);

/* Hero letter animation */
gsap.from(".hero-title span", {
    y:120,
    opacity:0,
    stagger:0.08,
    duration:1,
    ease:"power4.out"
});

/* Service animation */
gsap.utils.toArray(".service-card").forEach(card=>{
    gsap.from(card,{
        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        },
        y:80,
        opacity:0,
        duration:1,
        ease:"power3.out"
    });
});
