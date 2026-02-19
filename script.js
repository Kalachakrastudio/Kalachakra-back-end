// Parallax Effect
window.addEventListener("scroll", function() {
  const hero = document.getElementById("heroTitle");
  hero.style.transform = "translateY(" + (window.scrollY * -0.2) + "px)";
});

// Mobile Menu Toggle
function toggleMenu(){
  const nav = document.getElementById("mobileNav");

  if(nav.style.display === "flex"){
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}
