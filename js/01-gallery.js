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
  if (clickOnPictupe.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${clickOnPictupe.dataset.source}">`,
    {
      closable: false,
      onShow: instance => {
        window.addEventListener('keydown', checIfkEscape);
      },
      onClose: instance => {
        window.removeEventListener('keydown', checIfkEscape);
      },
    },
  );
  instance.show();

  function checIfkEscape(evt) {
    console.log(evt);
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
