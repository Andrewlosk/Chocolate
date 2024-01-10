window.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('.open__pop');
    const closeModalBtn = document.querySelector('.review__pop__close');
    const modal = document.querySelector('.review__pop');
  
    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault()
      modal.classList.add('show');
    });
    /* closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    }); */
  });
  