(()=>{"use strict";class t{constructor(t,e){this.links=document.querySelectorAll(t),this.submenu=document.querySelectorAll(e),this.activeSubMenu=this.activeSubMenu.bind(this)}hasSubMenu(t){const e=Array.from(t.children),i=Array.from(this.submenu);return e.some((t=>i.includes(t)))}activeSubMenu(t){const e=t.currentTarget,i=e.querySelector(".sub-menu");i&&(this.submenu.forEach((t=>{t.classList.remove("active")})),i.classList.add("active"),setTimeout((()=>{e.removeEventListener("click",this.removePreventedEvent),console.log("removeu trava")}),600))}removePreventedEvent(t){t.preventDefault()}subMenuEvents(){this.links.forEach((t=>{this.hasSubMenu(t)&&(t.addEventListener("click",this.activeSubMenu),t.addEventListener("click",this.removePreventedEvent))}))}init(){this.subMenuEvents()}}class e{constructor(t,e){this.slide=document.querySelector(t),this.wrapper=document.querySelector(e),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="ativo",this.changeEvent=new Event("changeEvent"),this.mousedown,this.mouseup}transitionSlide(t){this.slide.style.transition=t?"transform .4s":""}moveSlide(t){this.dist.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0, 0)`}updatePosition(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}removeAnchorClick(){const t=event.target.closest("a");function e(t){t.preventDefault()}t&&(t.addEventListener("click",e),setTimeout((()=>{t.removeEventListener("click",e)}),180))}onStart(t){let e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove",this.mousedown=t.timeStamp):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transitionSlide(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";"mouseup"===t.type&&(this.mouseup=t.timeStamp),this.mouseup-this.mousedown>150&&this.removeAnchorClick(),this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transitionSlide(!0),this.changeSlideOnEnd()}addSlideEvents(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}activePrevSlide(){if(void 0!==this.index.prev)this.changeSlide(this.index.prev);else{const t=this.slideArray.length-1;this.changeSlide(t)}}activeNextSlide(){void 0!==this.index.next?this.changeSlide(this.index.next):this.changeSlide(0)}changeSlideOnEnd(){if(this.dist.movement>120&&void 0!==this.index.next)return this.activeNextSlide();if(this.dist.movement>120&&void 0===this.index.next)return this.changeSlide(0);if(this.dist.movement<-120&&void 0!==this.index.prev)return this.activePrevSlide();if(this.dist.movement<-120&&void 0===this.index.prev){const t=this.slideArray.length-1;this.changeSlide(t)}else this.changeSlide(this.index.active)}carouselSlide(){setInterval((()=>{this.activeNextSlide()}),8e3)}slidesConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slideIndexNav(t){const e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}slidePosition(t){const e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}changeSlide(t){const e=this.slideArray[t];this.moveSlide(e.position),this.slideIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}changeActiveClass(){this.slideArray.forEach((t=>{t.element.classList.remove(this.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}addResizeEvent(t){let e=this.slideArray[t].clientWidth;window.addEventListener("resize",(()=>{this.slide.style.transform=`translateX(${1*-e}px)`}))}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}init(){return this.bindEvents(),this.transitionSlide(!0),this.addSlideEvents(),this.slidesConfig(),this.changeSlide(0),this.addResizeEvent(0),this.carouselSlide(),this}}class i extends e{constructor(t,e){super(t,e),this.bindControlEvents()}addArrow(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),t&&e&&this.addArrowEvent()}addArrowEvent(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const t=document.createElement("ul");return t.dataset.control="page-slide",this.slideArray.forEach(((e,i)=>{t.innerHTML+=`<li><a href="#slide${i+1}">${i+1}</a></li>`})),this.wrapper.appendChild(t),t}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}addControl(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=[...this.control.children],this.activeControlItem(),this.controlArray.forEach(this.eventControl)}activeControlItem(){this.controlArray.forEach((t=>t.classList.remove(this.activeClass))),this.controlArray[this.index.active].classList.add(this.activeClass)}bindControlEvents(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}class s{constructor(t){this.product=document.querySelectorAll(t),this.productArray=[...this.product],this.now=new Date}createTimer(){this.productArray.forEach(((t,e)=>{const i=document.createElement("div");i.classList.add("item-timer"),t.appendChild(i),this.setTimer(i,e)}))}setTimer(t,e){let i,s=this.getTimerData();i=s&&s[e]?s[e].remainTime:1*e*3600+1500+20;let n=setInterval((()=>{let s=Math.floor(i/3600),r=Math.floor(i%3600/60),o=i%60;s=s.toString().padStart(2,"0"),r=r.toString().padStart(2,"0"),o=o.toString().padStart(2,"0"),t.innerHTML=`<p>${s}:${r}:${o}</p>`,i<=0?(t.innerHTML="<p>Acabou</p>",clearInterval(n),t.parentNode.classList.add("disabled"),this.updateTimerData(e,0)):this.updateTimerData(e,i),i--}),1e3)}getTimerData(){const t=localStorage.getItem("today");return t?JSON.parse(t):void 0}updateTimerData(t,e){let i=this.getTimerData()||[];i[t]||(i[t]={}),i[t].remainTime=e,localStorage.setItem("today",JSON.stringify(i))}resetTimerIfDayChanged(){const t=this.getTimerData(),e=t?t.day:null,i=this.now.toDateString();e!==i&&(localStorage.setItem("today",JSON.stringify({day:i})),this.productArray.forEach((t=>{t.classList.remove("disabled"),t.removeAttribute("disabled")})))}init(){this.resetTimerIfDayChanged(),this.createTimer()}}if(document.querySelector(".header__cat-btn").addEventListener("click",(t=>{t.preventDefault()})),new class{constructor(e,i,s,n,r){this.menuButton=document.querySelector(e),this.menuList=document.querySelectorAll(i),this.parentCat=document.querySelectorAll(s),this.submenu=document.querySelectorAll(n),this.html=document.querySelector("html"),this.isOpen=!1,this.dropdownMenu=new t(s,n),this.events=void 0===r?["touchstart","click"]:r,this.openMenu=this.openMenu.bind(this),this.linkPreventRemove=this.linkPreventRemove.bind(this)}linkPreventRemove(t){t.preventDefault()}openMenu(t){"touchstart"===t.type&&t.preventDefault(),this.isOpen?(this.menuList.forEach((t=>{t.classList.remove("active")})),this.menuButton.classList.remove("active"),this.isOpen=!1):(this.menuList.forEach((t=>{t.classList.add("active")})),this.menuButton.classList.add("active"),function(t,e,i){const s=document.querySelector("html");function n(r){!t.some((t=>t.contains(r.target)))&&(i(),e.forEach((t=>{s.removeEventListener(t,n)})))}e.forEach((t=>{setTimeout((()=>{s.addEventListener(t,n)}),0)}))}(Array.from(this.menuList),this.events,(()=>{this.menuList.forEach((t=>{t.classList.remove("active")})),this.menuButton.classList.remove("active"),this.isOpen=!1})),this.isOpen=!0,this.isOpen&&this.dropdownMenu.init())}addMenuMobileEvents(){this.events.forEach((t=>{this.menuButton.addEventListener(t,this.openMenu)}))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}(".header__cat-btn",'[data-menu="list"]',"#menu-all-category > .menu-item",".sub-menu").init(),document.querySelector('[data-home="slide"]')){const t=new i(".slide",".slide-wrapper");t.init(),t.addControl()}document.querySelector('[data-home="crono"]')&&new s(".crono-gallery .product__list .product__list-item").init()})();