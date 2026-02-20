const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("open");
});

/* Hamburger animation */
hamburger.addEventListener("click", () => {
    const spans = hamburger.querySelectorAll("span");

    if (hamburger.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px,5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(6px,-6px)";
    } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    }
});

/* Scroll Reveal */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
});
