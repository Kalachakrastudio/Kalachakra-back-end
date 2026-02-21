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

/* HERO LETTER ANIMATION */
gsap.from(".hero-title span", {
    y: 120,
    opacity: 0,
    stagger: 0.08,
    duration: 1,
    ease: "power4.out"
});
gsap.utils.toArray(".service-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});
<script>

/* =============================
   SCROLL REVEAL
============================= */

const revealElements = document.querySelectorAll(
  '.reveal, .reveal-left, .reveal-right, .reveal-scale'
);

function revealOnScroll(){
    const windowHeight = window.innerHeight;

    revealElements.forEach(el=>{
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


/* =============================
   HAMBURGER SUPPORT
============================= */

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if(hamburger){
    hamburger.addEventListener("click",()=>{
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
    });
}

/* Close menu when clicking link */
document.querySelectorAll(".nav a").forEach(link=>{
    link.addEventListener("click",()=>{
        if(nav.classList.contains("active")){
            nav.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});

/* Close when clicking outside */
document.addEventListener("click",(e)=>{
    if(nav && hamburger){
        if(!nav.contains(e.target) && !hamburger.contains(e.target)){
            nav.classList.remove("active");
            hamburger.classList.remove("active");
        }
    }
});

</script>
