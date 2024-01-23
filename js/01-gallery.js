import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
console.log(galleryList);
galleryList.addEventListener("click", onGalleryClick);

const instance = basicLightbox.create(
  `
<img  class="modal-img" src="" alt="">
`,
  {
    onShow: (instance) => {
      document.addEventListener("keydown", onEsClick);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", onEsClick);
    },
  }
);
console.log(instance);

renderGallery(galleryItems);

function onGalleryClick(evt) {
  evt.preventDefault();
  // console.log(evt.currentTarget.nodeName);
  // console.log(evt.target.nodeName);

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const imgSrc = evt.target.dataset.source;
  const lightBoxImg = instance.element().querySelector(".modal-img");
  lightBoxImg.src = imgSrc;
  instance.show();
}

function renderGallery(galleryItems) {
  const markup = galleryItems
    .map(
      ({ original, preview, description }) => ` <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
   </li> `
    )
    .join("");
  galleryList.innerHTML = markup;
}

function onEsClick(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}
