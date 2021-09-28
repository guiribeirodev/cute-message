const gifMain = document.querySelector('.gif-main');
const imageModal = document.querySelector('.image-modal');

export async function getContent() {
  try {
    const response = await fetch('https://cataas.com/cat');
    console.log(response);
    const data = await response.blob();

    show(data, imageModal);
  } catch (error) {
    console.error(error);
  }
}
export async function getContentGif(link) {
  try {
    const response = await fetch(link);
    console.log(response);
    const data = await response.blob();

    show(data, gifMain);
  } catch (error) {
    console.error(error);
  }
}

function show(myBlob, myContent) {
  let objectURL = URL.createObjectURL(myBlob);
  myContent.src = objectURL;
}
