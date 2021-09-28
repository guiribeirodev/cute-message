import { Modal } from './modal.js';
import { getPhrase } from './message.js';
import { getContent, getContentGif } from './media.js';

const linkGif = 'https://cataas.com/cat/gif';

Modal();

getContent();

getPhrase();

getContentGif(linkGif);
