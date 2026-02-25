document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    if (hamburger && nav) {
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
    }

    const year = document.getElementById("year");
    if(year){
        year.textContent = new Date().getFullYear();
    }

});
