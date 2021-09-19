export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper');
  const closeModal = document.querySelector('.close-modal');

  closeModal.addEventListener('click', close);

  function close() {
    modalWrapper.classList.remove('active');
  }

  return {
    close
  };
}
