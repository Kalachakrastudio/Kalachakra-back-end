const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function(){
        hamburger.classList.remove("active");
        nav.classList.remove("active");
    });
});
gsap.registerPlugin(ScrollTrigger);

/* HERO LETTER ANIMATION */
gsap.from(".hero-title span", {
    y: 120,
    opacity: 0,
    stagger: 0.08,
    duration: 1,
    ease: "power4.out"
});
gsap.utils.toArray(".service-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const line = document.querySelector('.about-header .line');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                line.classList.add('active');
            }
        });
    }, { threshold: 0.5 }); // triggers when 50% of about section is visible

    observer.observe(document.querySelector('.about-header'));
});



const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            showMessage("Message sent successfully! 🚀", "#9e8f78");
            form.reset(); // clear fields
        } else {
            showMessage("Oops! Something went wrong.", "red");
        }
    } catch (error) {
        showMessage("Network error. Please try again.", "red");
    }
});

function showMessage(message, color) {
    feedback.style.display = "block";
    feedback.style.color = color;
    feedback.textContent = message;

    // Auto hide after 4 seconds
    setTimeout(() => {
        feedback.style.display = "none";
        feedback.textContent = "";
    }, 4000);
}
