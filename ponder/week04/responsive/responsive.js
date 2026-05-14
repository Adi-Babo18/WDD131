let menuBtn = document.getElementsByClassName("menu-btn")[0];
let nav = document.querySelector("nav");

console.log(menuBtn);

menuBtn.addEventListener("click", handleMenuBtnClick);

function handleMenuBtnClick(event) {
    nav.classList.toggle("hide");
    menuBtn.classList.toggle("change");
}