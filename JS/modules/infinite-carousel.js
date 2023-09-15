export default class InfiniteCarousel {
  constructor(controls, slides) {
    this.controls = document.querySelectorAll(controls);
    this.slides = Array.from(document.querySelectorAll(slides));

    this.currentItem = 0;
    this.maxItems = this.slides.length;
    this.screenWidth = window.innerWidth;

    this.moveSlide = this.moveSlide.bind(this);
  }

  callNextSlide() {
    this.slides.forEach((item) => {
      item.classList.remove("selected");
    });
    this.slides[this.currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    this.slides[this.currentItem].classList.add("selected");
  }

  createEvents() {
    this.controls.forEach((control) => {
      control.addEventListener("click", this.moveSlide);
    });
    this.slides[0].classList.add("selected");
  }

  moveSlide(e) {
    const isPrev = e.target.classList.contains("prev-btn");

    if (isPrev) {
      this.currentItem--;
    } else {
      this.currentItem++;
    }
    if (this.currentItem >= this.maxItems) {
      this.currentItem = 0;
    }
    if (this.currentItem < 0) {
      this.currentItem = this.maxItems - 1;
    }
    this.callNextSlide();
  }
  init() {
    this.createEvents();
  }
}
