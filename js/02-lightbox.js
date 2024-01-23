import { galleryItems } from "./gallery-items.js";
// // Change code below this line

const galleryList = document.querySelector(".gallery");

renderGallery(galleryItems);

function renderGallery(galleryItems) {
  const markup = galleryItems
    .map(
      ({ original, preview, description }) => ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
    )
    .join("");
  galleryList.insertAdjacentHTML("beforeend", markup);
}
const lightBox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  navText: [":)", "(:"],
  captionDelay: 250,
});

lightBox.on("show.simplelightbox", () => {
  document.body.style.backgroundColor = "red";
});

lightBox.on("close.simplelightbox", () => {
  document.body.style.backgroundColor = "green";
});
