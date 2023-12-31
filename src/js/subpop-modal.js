window.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('.open__subpop');
    const closeModalBtn = document.querySelector('.order__subpop__close');
    const modal = document.querySelector('.order__subpop');
  
    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault()
      modal.classList.add('show');
    });
     closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    }); 
  });
  