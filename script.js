const burgerMenu = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");

burgerMenu.addEventListener("click" , openMenu);

function openMenu() {
    navigation.classList.toggle("disp-none");
}