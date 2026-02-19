// Mobile Menu
function toggleMenu(){
  const nav = document.getElementById("mobileNav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.classList.add("active");
    }
  });
});
