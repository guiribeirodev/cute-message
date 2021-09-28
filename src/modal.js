export function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper');
  const closeModal = document.querySelectorAll('.close-modal');

  closeModal[0].addEventListener('click', close);
  closeModal[1].addEventListener('click', close);

  function close() {
    modalWrapper.classList.remove('active');
  }

  return {
    close
  };
}
