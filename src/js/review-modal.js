window.addEventListener('DOMContentLoaded', () =>
  //   const openModalBtn = document.querySelector('data-modal-open');
  //   const closeModalBtn = document.querySelector('.modal__close');
  //   const modal = document.querySelector('.modal');

  //   openModalBtn.addEventListener('click', () => {
  //     modal.classList.add('show');
  //   });
  //   closeModalBtn.addEventListener('click', () => {
  //     modal.classList.remove('show');
  //   });
  // });
  () => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  }
)();
