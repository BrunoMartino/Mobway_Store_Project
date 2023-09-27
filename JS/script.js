import MenuMobile from "./modules/menu-mobile.js";
import SlideNav from "./modules/slide.js";
import RegressiveTimer from "./modules/regressive-timer.js";
import InfiniteCarousel from "./modules/infinite-carousel.js";
import Cat_Swachtes from "./modules/category-swatches.js";
import Img_Swachtes from "./modules/image-swatches.js";
import IncrementQty from "./modules/increment-qty.js";

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
  const cronoProduct = new InfiniteCarousel(
    '.crono-gallery [data-product="control"]',
    '.crono-gallery .product__list [data-product="item"]'
  );
  cronoProduct.init();
}
const productNewest = document.querySelector(".newest-gallery");
if (productNewest) {
  const newestProduct = new InfiniteCarousel(
    '.newest-gallery [data-product="control"]',
    '.newest-gallery .product__list [data-product="item"]'
  );
  newestProduct.init();
}
const productMostSales = document.querySelector(".most-sales-gallery");
if (productMostSales) {
  const mostSalesProduct = new InfiniteCarousel(
    '.most-sales-gallery [data-product="control"]',
    '.most-sales-gallery .product__list [data-product="item"]'
  );
  mostSalesProduct.init();
}
const filter = document.querySelector("[data-filter='mobile-btn']");
if (filter) {
  const filterMobile = new MenuMobile(
    "[data-filter='mobile-btn']",
    '[data-filter="filter-nav"]',
    "#menu-filter-categories",
    "#menu-filter-categories menu-item .sub-menu"
  );
  filterMobile.init();
}

const infoproduct = document.querySelector(".product__info");
if (infoproduct) {
  const idImage = "#pa_image";
  const selectImgExist = document.querySelector(idImage);

  if (selectImgExist) {
    const swatchesImg = new Img_Swachtes('[data-cat="imgs"]', idImage);
    swatchesImg.init();
  }
  const swatches = new Cat_Swachtes(
    '[data-cat="attributes"]',
    ".variations select"
  );
  swatches.init();

  const qtyValues = new IncrementQty(".qty");
  qtyValues.init();
}
