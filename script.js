gsap.registerPlugin(ScrollTrigger);

/* HERO LETTER ANIMATION */
gsap.from(".hero-title span", {
    y: 150,
    opacity: 0,
    stagger: 0.08,
    duration: 1,
    ease: "power4.out"
});

/* SECTION SCROLL ANIMATION */
gsap.utils.toArray(".service-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },
        y: 100,
        opacity: 0,
        duration: 1
    });
});

/* Mobile Menu */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});
