import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeImageGalleryCard = ({ description, original, preview }) =>
  `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
    </a>
  </div>`;

const galleryEl = document.querySelector(".gallery");

galleryEl.classList.add("modal");

const markup = galleryItems
  .map((element) => makeImageGalleryCard(element))
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", markup);

galleryEl.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageEl = event.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${imageEl}" width="800" height="600">
  `);

  instance.show();

  window.addEventListener("keydown", handleEscKeyPress);
  function handleEscKeyPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
