window.addEventListener("DOMContentLoaded",()=>{let e={openModalBtn:document.querySelector("[data-open-subscribe]"),closeModalBtn:document.querySelector("[data-close-subscribe]"),modal:document.querySelector("[data-backdrop-subscribe]")};e.closeModalBtn.addEventListener("click",function(){e.modal.classList.toggle("is-hidden-subscribe"),e.modal.classList.remove("animate__zoomIn"),e.modal.classList.add("animate__zoomOut")}),e.openModalBtn.addEventListener("click",function(){e.modal.classList.toggle("is-hidden-subscribe"),e.modal.classList.add("animate__zoomIn"),e.modal.classList.remove("animate__zoomOut")})});
//# sourceMappingURL=index.6da9fcf5.js.map
