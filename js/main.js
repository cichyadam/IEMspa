//toggling class of burger menu -> open/close nav
let hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () =>{
    if (!hamburger.classList.contains("is-active")){
        openNav(); 
    } else {
        closeNav();
    }
    hamburger.classList.toggle("is-active");
   
  });
// close the nav after click on anchor + remove active class from burger menu
    let link = document.querySelectorAll(".overlay-content a");
    link.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("is-active");
            closeNav();
        });
      });

   
function openNav() {
    document.getElementById("mobile-navigation").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-navigation").style.height = "0%";
  }
//after scrolling 200px, navbar will get a background
$(document).ready(function() {

    $(window).scroll(function() {
      if($(this).scrollTop() > 200) { 
          $('.navbar').addClass('white-bg-nav');
          $('.navbar').removeClass('bg-transparent');
      } else {
          $('.navbar').removeClass('white-bg-nav');
          $('.navbar').addClass('bg-transparent');
      }
    })
});