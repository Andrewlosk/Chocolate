window.addEventListener('DOMContentLoaded', () => {
  const thanksRefs = {
    openModalBtn: document.querySelectorAll('[data-open-thanks]'),
    closeModalBtn: document.querySelector('[data-close-thanks]'),
    modal: document.querySelector('[data-backdrop-thanks]'),
  };

  function toggleThanksModal(backdrop, hiddenClass) {
    const modal = document.querySelector(backdrop);

    function openThanksModal() {
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
      btn.addEventListener('click', () =>
        openThanksModal(backdrop, hiddenClass)
      )
    );
    thanksRefs.closeModalBtn.addEventListener('click', () =>
      closeThanksModal(backdrop, hiddenClass)
    );
  }

  document.addEventListener('click', function () {


    thanksRefs.openModalBtn.forEach(btn =>
      btn.addEventListener('click', event => {
        event.preventDefault();
        toggleThanksModal('[data-backdrop-subscribe]', 'is-hidden-subscribe');
      })
    );
    thanksRefs.closeModalBtn.addEventListener('click', () =>
      toggleThanksModal('[data-backdrop-subscribe]', 'is-hidden-subscribe')
    );

    thanksRefs.openModalBtn.forEach(btn =>
      btn.addEventListener(
        'click',
        toggleThanksModal('[data-backdrop-sellers]', 'is-hidden-sellers')
      )
    );

    thanksRefs.closeModalBtn.addEventListener('click', () =>
      toggleThanksModal('[data-backdrop-sellers]', 'is-hidden-sellers')
    );

    thanksRefs.openModalBtn.forEach(btn =>
      btn.addEventListener(
        'click',
        toggleThanksModal('[data-backdrop-loved]', 'is-hidden-loved')
      )
    );

    thanksRefs.closeModalBtn.addEventListener('click', () =>
      toggleThanksModal('[data-backdrop-loved]', 'is-hidden-loved')
    );
  });
});
