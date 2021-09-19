const imageModal = document.querySelector('.image-modal');
const gifMain = document.querySelector('.gif-main');

async function getContent() {
  try {
    const response = await fetch('https://cataas.com/cat');
    console.log(response);
    const data = await response.blob();

    show(data);
  } catch (error) {
    console.error(error);
  }
}

async function getContentGif() {
  try {
    const response = await fetch('https://cataas.com/cat/gif');
    console.log(response);
    const data = await response.blob();

    show2(data);
  } catch (error) {
    console.error(error);
  }
}

function show(myBlob) {
  let objectURL = URL.createObjectURL(myBlob);
  objectURL.height = 10;
  imageModal.src = objectURL;
}

function show2(myBlob) {
  let objectURL = URL.createObjectURL(myBlob);
  objectURL.height = 10;
  gifMain.src = objectURL;
}

getContent();
getContentGif();

function resizeImg(img, height, width) {
  img.height = height;
  img.width = width;
}

const modalWrapper = document.querySelector('.modal-wrapper');
const closeModal = document.querySelector('.close-modal');

closeModal.addEventListener('click', close);

function close() {
  modalWrapper.classList.remove('active');
}
