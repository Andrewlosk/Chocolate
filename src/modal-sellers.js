window.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector(".close_modal");
    const closeModalBtn = document.querySelector(".open_modal");
    const modal = document.querySelector(".modal__overlay");

    openModalBtn.addEventListener('click', () => {
        modal.classList.add("show");
    });
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove("show");
    });
});