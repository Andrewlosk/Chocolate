(()=>{let e=document.querySelector(".menu"),t=document.querySelector(".header__hamburger"),d=document.querySelector(".menu-btn"),o=()=>{let d="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!d),e.classList.toggle("menu-open"),bodyScrollLock[d?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",o),d.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",d=>{d.matches&&(e.classList.remove("menu-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=index.e986efe9.js.map
