// Navbar shrink
window.addEventListener("scroll", ()=>{
  const header = document.getElementById("header");
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth reveal
const reveals = document.querySelectorAll(".reveal");

function reveal(){
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Premium magnetic button effect
const magneticBtn = document.querySelector(".magnetic");

if(magneticBtn){
  magneticBtn.addEventListener("mousemove", e=>{
    const rect = magneticBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    magneticBtn.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
  });

  magneticBtn.addEventListener("mouseleave", ()=>{
    magneticBtn.style.transform = "translate(0,0)";
  });
}

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const msg = document.getElementById("formMessage");
  msg.textContent = "Message sent successfully!";
  msg.style.color = "#00f0ff";
  this.reset();
});
