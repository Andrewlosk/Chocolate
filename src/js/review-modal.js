window.addEventListener('DOMContentLoaded', () => {
  // order-modal
  const refs = {
    openModalBtn: document.querySelectorAll('[data-open-loved]'),
    closeModalBtn: document.querySelector('[data-close-loved]'),
    modal: document.querySelector('[data-backdrop-loved]'),
  };

  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.toggle('is-hidden-loved');
    refs.modal.classList.add('animate__zoomIn');
    refs.modal.classList.remove('animate__zoomOut');
  }
  function closeModal() {
    refs.modal.classList.toggle('is-hidden-subscribe');
    refs.modal.classList.remove('animate__zoomIn');
    refs.modal.classList.add('animate__zoomOut');
  }

  refs.openModalBtn.forEach(btn => btn.addEventListener('click', openModal));

  // thanks-modal

  const thanksRefs = {
    openModalBtn: document.querySelector('[data-open-thanks]'),
    closeModalBtn: document.querySelector('[data-close-thanks]'),
    modal: document.querySelector('[data-backdrop-thanks]'),
  };

  function openThanksModal() {
    refs.modal.classList.add('is-hidden-subscribe');
    thanksRefs.modal.classList.remove('is-hidden-thanks');
    thanksRefs.modal.classList.toggle('animate__zoomIn');
    refs.modal.classList.remove('animate__zoomIn');
    refs.modal.classList.add('animate__zoomOut');
    thanksRefs.modal.classList.remove('animate__zoomOut');
  }

  function closeThanksModal() {
    thanksRefs.modal.classList.toggle('animate__zoomIn');
    thanksRefs.modal.classList.add('animate__zoomOut');
    thanksRefs.modal.classList.toggle('is-hidden-thanks');
  }
  document.addEventListener('click', function (event) {
    event.preventDefault();
    thanksRefs.openModalBtn.addEventListener('click', openThanksModal);
    thanksRefs.closeModalBtn.addEventListener('click', closeThanksModal);
  });
});
