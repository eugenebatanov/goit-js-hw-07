import { galleryItems } from './gallery-items.js';

// Creating markup

const listEl = document.querySelector('.gallery');

const makeMarkup = ({ preview, original, description }) =>
  `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`;

const galleryMaker = galleryItems.map(makeMarkup).join('');

listEl.insertAdjacentHTML('afterbegin', galleryMaker);

// Connecting listener

listEl.addEventListener('click', openPicture);

function openPicture(evt) {
  evt.preventDefault();
  const clickOnPictupe = evt.target;
  console.log(clickOnPictupe);
  console.log(clickOnPictupe.nodeName);
  console.log(clickOnPictupe.dataset.source);
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox.create(`<img src="${clickOnPictupe.dataset.source}">`).show();
}
