document.addEventListener("DOMContentLoaded", function(){

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const links = document.querySelectorAll(".nav a");

  hamburger.addEventListener("click", function(){
    nav.classList.toggle("active");
  });

  links.forEach(function(link){
    link.addEventListener("click", function(){
      nav.classList.remove("active");
    });
  });

});
