import { galleryItems } from './gallery-items.js';

// Creating markup

const listEl = document.querySelector('.gallery');

const makeMarkup = ({ preview, original, description }) =>
  `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
`;

const galleryMaker = galleryItems.map(makeMarkup).join('');

listEl.insertAdjacentHTML('afterbegin', galleryMaker);

// Connecting listener

listEl.addEventListener(
  'click',
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }),
);
