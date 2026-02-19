const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu after clicking link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
