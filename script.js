// Parallax Hero Effect
window.addEventListener("scroll", function() {
  let scrollPosition = window.scrollY;
  let heroTitle = document.getElementById("heroTitle");

  heroTitle.style.transform =
    "translateY(" + (scrollPosition * -0.2) + "px)";
});

// Mobile Menu Toggle
function toggleMenu(){
  let menu = document.getElementById("mobileMenu");

  if(menu.style.display === "flex"){
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
