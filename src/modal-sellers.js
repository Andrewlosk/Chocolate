window.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelectorAll('[data-open-sellers]');
  const closeModalBtn = document.querySelector('[data-close-sellers]');
  const modal = document.querySelector('[data-backdrop-sellers]');

  // openModalBtn.addEventListener('click', () => {
  //   modal.classList.add('show');
  // });
  // closeModalBtn.addEventListener('click', () => {
  //   modal.classList.remove('show');
  // });
  closeModalBtn.addEventListener("click", toggleModal1);
  function toggleModal1() {
    modal.classList.toggle('is-hidden-sellers');
  }
  openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal1));
});
