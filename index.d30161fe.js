(()=>{let e=document.querySelector(".header__hamburger-menu"),t=document.querySelector(".header__hamburger"),d=document.querySelector(".header__hamburger-btn"),r=()=>{let d="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!d),e.classList.toggle("menu-open"),bodyScrollLock[d?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",r),d.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",d=>{d.matches&&(e.classList.remove("menu-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=index.d30161fe.js.map
