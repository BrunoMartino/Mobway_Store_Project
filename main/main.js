(()=>{"use strict";class e{constructor(e,t){this.links=document.querySelectorAll(e),this.submenu=document.querySelectorAll(t),this.activeSubMenu=this.activeSubMenu.bind(this)}hasSubMenu(e){const t=Array.from(e.children),n=Array.from(this.submenu);return t.some((e=>n.includes(e)))}activeSubMenu(e){const t=e.currentTarget,n=t.querySelector(".sub-menu");n&&(this.submenu.forEach((e=>{e.classList.remove("active")})),n.classList.add("active"),setTimeout((()=>{t.removeEventListener("click",this.removePreventedEvent),console.log("removeu trava")}),600))}removePreventedEvent(e){e.preventDefault()}subMenuEvents(){this.links.forEach((e=>{this.hasSubMenu(e)&&(e.addEventListener("click",this.activeSubMenu),e.addEventListener("click",this.removePreventedEvent))}))}init(){this.subMenuEvents()}}const t=document.querySelector(".header__cat-btn");console.log(t),t.addEventListener("click",(e=>{e.preventDefault()})),new class{constructor(t,n,s,i,u){this.menuButton=document.querySelector(t),this.menuList=document.querySelectorAll(n),this.parentCat=document.querySelectorAll(s),this.submenu=document.querySelectorAll(i),this.html=document.querySelector("html"),this.isOpen=!1,this.dropdownMenu=new e(s,i),this.events=void 0===u?["touchstart","click"]:u,this.openMenu=this.openMenu.bind(this),this.linkPreventRemove=this.linkPreventRemove.bind(this)}linkPreventRemove(e){e.preventDefault()}openMenu(e){"touchstart"===e.type&&e.preventDefault(),this.isOpen?(this.menuList.forEach((e=>{e.classList.remove("active")})),this.menuButton.classList.remove("active"),this.isOpen=!1):(this.menuList.forEach((e=>{e.classList.add("active")})),this.menuButton.classList.add("active"),function(e,t,n){const s=document.querySelector("html");function i(u){!e.some((e=>e.contains(u.target)))&&(n(),t.forEach((e=>{s.removeEventListener(e,i)})))}t.forEach((e=>{setTimeout((()=>{s.addEventListener(e,i)}),0)}))}(Array.from(this.menuList),this.events,(()=>{this.menuList.forEach((e=>{e.classList.remove("active")})),this.menuButton.classList.remove("active"),this.isOpen=!1})),this.isOpen=!0,this.isOpen&&this.dropdownMenu.init())}addMenuMobileEvents(){this.events.forEach((e=>{this.menuButton.addEventListener(e,this.openMenu)}))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}(".header__cat-btn",'[data-menu="list"]',"#menu-all-category > .menu-item",".sub-menu").init()})();