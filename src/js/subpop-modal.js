window.addEventListener('DOMContentLoaded', () => { 
  const openModalBtn = document.querySelectorAll('[data-open-sellers]'); 
  const closeModalBtn = document.querySelector('[data-close-sellers]'); 
  const modal = document.querySelector('[data-backdrop-sellers]'); 
 
  closeModalBtn.addEventListener("click", toggleModal1); 
  function toggleModal1() { 
    modal.classList.toggle('is-hidden-sellers'); 
    modal.classList.toggle("animate__zoomIn"); 
    modal.classList.toggle('animate__zoomOut'); 
  } 
  openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal1)); 
});