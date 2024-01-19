window.addEventListener('DOMContentLoaded', () => {
  // order-modal
  const refs = {
    openModalBtn: document.querySelectorAll('[data-open-loved]'),
    closeModalBtn: document.querySelector('[data-close-loved]'),
    modal: document.querySelector('[data-backdrop-loved]'),
  };

  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.add('animate__zoomIn');
    refs.modal.classList.remove('animate__zoomOut');
  }
  function closeModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.remove('animate__zoomIn');
    refs.modal.classList.add('animate__zoomOut');
  }

  refs.openModalBtn.forEach(btn => btn.addEventListener('click', openModal));

});