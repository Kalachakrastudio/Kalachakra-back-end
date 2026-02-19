// Scroll Progress Bar
window.addEventListener("scroll", function() {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navMenu a");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu after clicking link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
