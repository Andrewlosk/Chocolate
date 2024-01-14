window.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.open_modal-loved');
  const closeModalBtn = document.querySelector('.modal_close-loved');
  const modal = document.querySelector('.overlay-loved');

  openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});
