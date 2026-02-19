const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");
const navbar = document.getElementById("navbar");
const reveals = document.querySelectorAll(".reveal");

// Hamburger toggle
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu after click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Sticky navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Reveal animation on scroll
function revealSections() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
