window.addEventListener('DOMContentLoaded', () => {
  const thanksRefs = {
    openModalBtn: document.querySelectorAll('[data-open-thanks]'),
    closeModalBtn: document.querySelector('[data-close-thanks]'),
    modal: document.querySelector('[data-backdrop-thanks]'),
  };


  function openThanksModal(backdrop, hiddenClass) {
    const modal = document.querySelector(backdrop);
    modal.classList.add(hiddenClass);
    modal.classList.add('animate__zoomOut');
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
          openThanksModal('[data-backdrop-loved]', 'is-hidden');
          openThanksModal('[data-backdrop-subscribe]', 'is-hidden');
          openThanksModal('[data-backdrop-sellers]', 'is-hidden')        

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
