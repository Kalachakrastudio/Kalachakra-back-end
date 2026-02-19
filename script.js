// Mobile Toggle
function toggleMenu(){
  const nav = document.getElementById("mobileNav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Scroll Navbar Effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMessage");

  if(name === "" || email === "" || message === ""){
    msg.textContent = "Please fill all fields.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "lightgreen";
    this.reset();
  }
});
