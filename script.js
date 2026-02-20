document.addEventListener("DOMContentLoaded",function(){

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");
  const overlay = document.getElementById("overlay");
  const links = document.querySelectorAll("#nav-menu a");

  if(!hamburger || !nav || !overlay) return;

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

  // Scroll animations
  const animatedItems = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('fadeIn');
      }
    });
  }, {threshold:0.2});
  animatedItems.forEach(item=>observer.observe(item));

  // Navbar scroll effect
  window.addEventListener('scroll',()=>{
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    }else{
      navbar.classList.remove('scrolled');
    }
  });

});
