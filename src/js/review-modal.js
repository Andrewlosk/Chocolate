window.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelectorAll('[data-open-loved]');
  const closeModalBtn = document.querySelector('[data-close-loved]');
  const modal = document.querySelector('[data-backdrop-loved]');

  closeModalBtn.addEventListener('click', toggleModal1);
  function toggleModal1() {
    modal.classList.toggle('is-hidden-loved');
    modal.classList.toggle('animate__zoomIn');
    modal.classList.toggle('animate__zoomOut');
  }
  openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal1));
});
