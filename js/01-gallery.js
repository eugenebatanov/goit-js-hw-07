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

// const imgDataSet = document.querySelector('img[data-source');

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
// ===========================
// document.querySelector('button.image').onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`,
//     )
//     .show();
// };
// ==============================
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

// ======================

// const listEl = document.querySelector('.gallery');

// const makeMarkup = image =>
//   `<li>
//   <img src="${image.url}" alt="${image.alt}" width="360" height="244">
//   </li>`;

// const galleryMaker = images.map(makeMarkup).join('');

// listEl.insertAdjacentHTML('afterbegin', galleryMaker);

// listEl.style.display = 'flex';
// listEl.style.listStyle = 'none';
// listEl.style.justifyContent = 'space-around';
