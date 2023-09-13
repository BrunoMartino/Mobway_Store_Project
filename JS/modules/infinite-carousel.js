export default class InfiniteCarousel {
  constructor(prev, next, slide) {
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.slide = Array.from(document.querySelectorAll(slide));

    this.currentSlide = 0;
    this.maxItems = this.slide.length;

    this.toLeft = this.toLeft.bind(this);
    this.toRight = this.toRight.bind(this);
  }

  toLeft() {
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.maxItems - 3;
    }
    this.scrollSlide();
  }

  toRight() {
    this.currentSlide++;
    if (this.currentSlide >= this.maxItems - 2) {
      this.currentSlide = 0;
    }
    this.scrollSlide();
  }

  scrollSlide() {
    const item = this.slide[0];
    const computedStyles = getComputedStyle(item);
    const offset =
      -(item.offsetWidth - parseFloat(computedStyles.marginLeft)) *
      this.currentSlide;
    this.slide.forEach((element) => {
      element.classList.remove("selected");
      element.style.transform = `translate3d(${offset}px, 0, 0)`;
    });

    this.slide[this.currentSlide].classList.add("selected");
    this.slide[this.currentSlide + 1].classList.add("selected");
  }

  createEvents() {
    this.prev.addEventListener("click", this.toLeft);
    this.next.addEventListener("click", this.toRight);
  }
  init() {
    this.createEvents();
  }
}
