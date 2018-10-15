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
//scrollmagic
$(document).ready(function() {
    let a = new ScrollMagic.Controller
      , b = new ScrollMagic.Scene({
        triggerElement: ".hero-page",
        triggerHook: 0
    }).setPin().addTo(a);
    $(".animate-section").each(function() {
        new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9,
            reverse: !1
        }).setClassToggle(this, "animation").addTo(a)
    })
});