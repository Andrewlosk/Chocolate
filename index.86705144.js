window.addEventListener("DOMContentLoaded",()=>{let e={openModalBtn:document.querySelectorAll("[data-open-sellers]"),closeModalBtn:document.querySelector("[data-close-sellers]"),modal:document.querySelector("[data-backdrop-sellers]")};function o(){e.modal.classList.toggle("is-hidden"),e.modal.classList.add("animate__zoomIn"),e.modal.classList.remove("animate__zoomOut")}e.closeModalBtn.addEventListener("click",function(){e.modal.classList.add("is-hidden"),e.modal.classList.remove("animate__zoomIn"),e.modal.classList.add("animate__zoomOut")}),e.openModalBtn.forEach(e=>e.addEventListener("click",o))});
//# sourceMappingURL=index.86705144.js.map