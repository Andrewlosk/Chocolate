window.addEventListener('DOMContentLoaded', () => {
  const thanksRefs = {
    openModalBtn: document.querySelectorAll('[data-open-thanks]'),
    closeModalBtn: document.querySelector('[data-close-thanks]'),
    modal: document.querySelector('[data-backdrop-thanks]'),
  };


  function openThanksModal(backdrop) {
    const modal = document.querySelector(backdrop);
    modal.classList.add('is-hidden');
    modal.classList.remove('animate__zoomIn');
    thanksRefs.modal.classList.remove('is-hidden-thanks');
    thanksRefs.modal.classList.add('animate__zoomIn');
    thanksRefs.modal.classList.remove('animate__zoomOut');
  }

  function closeThanksModal() {
    thanksRefs.modal.classList.add('is-hidden-thanks');
    thanksRefs.modal.classList.remove('animate__zoomIn');
    thanksRefs.modal.classList.add('animate__zoomOut');
  }




  thanksRefs.openModalBtn.forEach(btn =>
    btn.addEventListener(
      'click', (event) => {
          event.preventDefault();
          openThanksModal('[data-backdrop-sellers]');        
          openThanksModal('[data-backdrop-loved]');
          openThanksModal('[data-backdrop-subscribe]');
        console.log('open');
      }
    )
  );

  // thanksRefs.openModalBtn.forEach(btn =>
  //   btn.addEventListener(
  //     'click', (event) => {
  //         event.preventDefault();

  //       openThanksModal('[data-backdrop-loved]', 'is-hidden-loved');

  //     }
  //   )
  // );

  // thanksRefs.openModalBtn.forEach(btn =>
  //   btn.addEventListener('click', (event) => {
  //     event.preventDefault();

  //     openThanksModal('[data-backdrop-subscribe]', 'is-hidden-subscribe')

  //   }
  //   )
  // );

  thanksRefs.closeModalBtn.addEventListener('click', closeThanksModal);
});
