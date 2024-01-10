window.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.order__btn');
  const closeModalBtn = document.querySelector('.modal__close');
  const modal = document.querySelector('.order__modal');

  openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});
