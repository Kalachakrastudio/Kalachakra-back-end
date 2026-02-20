const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

/* Close menu when clicking a link */
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
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
