//MOBILE MODE - OPEN NAVIGATION BAR

const burgerMenu = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");

burgerMenu.addEventListener("click" , openMenu);

function openMenu() {
    navigation.classList.toggle("disp-none");
}

//HIDE NAVIGATION BAR

// const nav = document.querySelector("header");
// const navHeight = 69;

// let lastScrollY = 0;

// const delta = 10;


// function scrolled() {
//   let sy = window.scrollY;
  
//   if (Math.abs(lastScrollY - sy) > delta) {
    
//     if (sy > lastScrollY && sy > navHeight && !navigation.classList.contains("disp-none")) {
//         nav.classList.add("nav-up-menu-open");
//     } 
    
//     else if (sy > lastScrollY && sy > navHeight && navigation.classList.contains("disp-none") ) {
//         nav.classList.add("nav-up");
//     }

//     else (sy < lastScrollY) {
//       nav.classList.remove("nav-up");
//     }
   
//    lastScrollY = sy 
//   }
// }


// let didScroll = false;
// window.addEventListener("scroll", function(e){
//   didScroll = true;
// });

// setInterval(function() {
//   if (didScroll) {
//     scrolled();
//     didScroll = false;
//    }
// }, 250);



/////


const nav = document.querySelector("header");
const navHeight = 69;
// the point the scroll starts from (in px)
let lastScrollY = 0;
// how far to scroll (in px) before triggering
const delta = 10;

// function to run on scrolling
function scrolled() {
  let sy = window.scrollY;
  // only trigger if scrolled more than delta
  if (Math.abs(lastScrollY - sy) > delta) {
    // scroll down -> hide nav bar
    if (sy > lastScrollY && sy > navHeight && !navigation.classList.contains("disp-none")) {
      nav.classList.add("nav-up-menu-open");
    } else if (sy > lastScrollY && sy > navHeight && navigation.classList.contains("disp-none")) {
        nav.classList.add("nav-up");
    }
    // scroll up -> show nav bar
    else if (sy < lastScrollY) {
      nav.classList.remove("nav-up");
      nav.classList.remove("nav-up-menu-open");
    }
   // update current scroll point
   lastScrollY = sy 
  }
}

// Add event listener & debounce so not constantly checking for scroll
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



