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


// contact.js (or whatever your JS file is named)

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                alert('Message sent successfully!');
                form.reset(); // Clear the form after success
            }, (err) => {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', err);
            });
        });
    }
});
