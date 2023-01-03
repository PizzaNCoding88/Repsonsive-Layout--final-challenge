//HIDE NAVIGATION BAR


const nav = document.querySelector("header");
const navHeight = 69;

let lastScrollY = 0;

const delta = 10;


function scrolled() {
  let sy = window.scrollY;
  
  if (Math.abs(lastScrollY - sy) > delta) {
    
    if (sy > lastScrollY && sy > navHeight && !navigation.classList.contains("disp-none")) {
      nav.classList.add("nav-up-menu-open");
    } else if (sy > lastScrollY && sy > navHeight && navigation.classList.contains("disp-none")) {
        nav.classList.add("nav-up");
    }
    
    else if (sy < lastScrollY) {
      nav.classList.remove("nav-up");
      nav.classList.remove("nav-up-menu-open");
    }
   
   lastScrollY = sy 
  }
}


let didScroll = false;
window.addEventListener("scroll", function(e){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
   }
}, 250)



