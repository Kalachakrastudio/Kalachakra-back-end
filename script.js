const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");

/* Toggle Menu */
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("open");

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

/* Close menu when link clicked */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        hamburger.classList.remove("open");

        const spans = hamburger.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    });
});
