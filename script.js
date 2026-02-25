document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       MOBILE NAV SAFE CHECK
    =============================== */

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            nav.classList.toggle("active");
        });

        document.querySelectorAll(".nav a").forEach(link => {
            link.addEventListener("click", function () {
                hamburger.classList.remove("active");
                nav.classList.remove("active");
            });
        });
    }

    /* ===============================
       SERVICE → AUTO SELECT GOLD
    =============================== */

    const urlParams = new URLSearchParams(window.location.search);
    const selectedService = urlParams.get("service");

    if (selectedService) {

        const serviceField = document.getElementById("service");
        const packageField = document.getElementById("package");

        if (serviceField) {
            serviceField.value = selectedService;
        }

        if (packageField) {
            packageField.value = "Gold"; // Always highlight gold
        }

        const goldCard = document.querySelector(".pricing-card.gold");
        if (goldCard) {
            goldCard.classList.add("active-package");
        }
    }

});
