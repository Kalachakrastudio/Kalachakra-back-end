const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu after clicking any link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
