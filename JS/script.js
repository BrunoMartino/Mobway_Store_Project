import MenuMobile from "./modules/menu-mobile.js";
import SlideNav from "./modules/slide.js";
import RegressiveTimer from "./modules/regressive-timer.js";
import InfiniteCarousel from "./modules/infinite-carousel.js";

const menuBtnMobile = document.querySelector(".header__cat-btn");
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

const slideExist = document.querySelector('[data-home="slide"]');
if (slideExist) {
  const slide = new SlideNav(".slide", ".slide-wrapper");
  slide.init();
  slide.addControl();
}
const cronoExist = document.querySelector('[data-home="crono"]');
if (cronoExist) {
  const timer = new RegressiveTimer(
    ".crono-gallery .product__list .product__list-item"
  );
  timer.init();
}
const newestProduct = new InfiniteCarousel(
  ".newest-gallery .product__list .prev-btn",
  ".newest-gallery .product__list .next-btn",
  ".newest-gallery .product__list .product__list-item"
);
newestProduct.init();
