import MenuMobile from "./modules/menu-mobile.js";

const menuBtnMobile = document.querySelector(".header__cat-btn");
console.log(menuBtnMobile);
menuBtnMobile.addEventListener("click", (event) => {
  event.preventDefault();
});
const headerMobile = new MenuMobile(
  ".header__cat-btn",
  '[data-menu="list"]',
  "#menu-all-category > .menu-item",
  ".sub-menu"
);
headerMobile.init();
