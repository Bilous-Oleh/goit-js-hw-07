import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeImageGalleryCard = ({ description, original, preview }) =>
  `<li>
    <div class="gallery">
        <a class="gallery__item" href=${original}>
            <img class="gallery__image" src=${preview} alt="${description}"/>
        </a>
    </div>
  </li>`;

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map((element) => makeImageGalleryCard(element))
  .join("");

galleryEl.innerHTML = markup;
// galleryEl.insertAdjacentHTML("afterbegin", markup);

galleryEl.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageEl = event.target.dataset.source;

  const lightbox = new SimpleLightbox(".gallery a", {
    caption: true,
    captionDelay: 250,
    captionsData: "alt",
  });
}

console.log(galleryItems);
