export async function getPhrase() {
  try {
    const response = await fetch(
      'https://cutemessage-api.herokuapp.com/server'
    );
    const data = await response.json();
    console.log(data.phrase);

    show(data);
  } catch (error) {
    console.error;
  }
}

function show(data) {
  const phrase = document.querySelector('.phrase');
  const author = document.querySelector('.author');

  phrase.innerText = data.phrase;
  author.innerText = data.author;
}
