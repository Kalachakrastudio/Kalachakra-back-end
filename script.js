document.addEventListener("DOMContentLoaded",function(){

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");
  const overlay = document.getElementById("overlay");
  const links = document.querySelectorAll("#nav-menu a");

  function openMenu(){
    nav.classList.add("active");
    hamburger.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
  }

  function closeMenu(){
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  hamburger.addEventListener("click",function(e){
    e.stopPropagation();
    nav.classList.contains("active") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click",closeMenu);

  links.forEach(link=>{
    link.addEventListener("click",closeMenu);
  });

});
