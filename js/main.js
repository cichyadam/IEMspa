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
