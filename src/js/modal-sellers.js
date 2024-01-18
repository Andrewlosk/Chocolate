

window.addEventListener('DOMContentLoaded', () => {

  const refs = {
    openModalBtn: document.querySelectorAll('[data-open-sellers]'),
    closeModalBtn: document.querySelector('[data-close-sellers]'),
    modal: document.querySelector('[data-backdrop-sellers]'),
  };

  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.toggle('is-hidden-sellers');
    refs.modal.classList.add('animate__zoomIn');
    refs.modal.classList.remove('animate__zoomOut');
  }
  function closeModal() {
    refs.modal.classList.add('is-hidden-sellers');
    refs.modal.classList.remove('animate__zoomIn');
    refs.modal.classList.add('animate__zoomOut');
  }

  refs.openModalBtn.forEach(btn => btn.addEventListener('click', openModal));


});