const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Toggle menu
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu after clicking link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
