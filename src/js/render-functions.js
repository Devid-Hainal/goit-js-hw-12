import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const formElement = document.querySelector('.form');

export const refs = {
  container: document.querySelector('.section-js'),
  inputElement: formElement.querySelector('input[name="search-text"]'),
  buttonElement: document.querySelector('.button'),
  galleryListElement: document.querySelector('.gallery'),
  loaderElement: document.querySelector('.loader'),
  loaderButtonElement: document.querySelector('.loader-button-js'),
};

const {
  container,
  inputElement,
  buttonElement,
  galleryListElement,
  loaderElement,
  loaderButtonElement,
} = refs;

let lightBox = new SimpleLightbox('.gallery a');

export async function createGallery(images) {
  const markupCreation = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-list-item">
        <a href="${largeImageURL}" class="gallery-list-link">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="img-info">
  <div class="info-item">
    <p class="info-label">Likes</p>
    <p class="info-value">${likes}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Views</p>
    <p class="info-value">${views}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Comments</p>
    <p class="info-value">${comments}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Downloads</p>
    <p class="info-value">${downloads}</p>
  </div>
</div>

      </li>`;
      }
    )
    .join('');

  galleryListElement.insertAdjacentHTML('beforeend', markupCreation);
  lightBox.refresh();
}

export function clearGallery() {
  galleryListElement.innerHTML = '';
}

export function showLoader() {
  if (loaderElement) {
    loaderElement.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  if (loaderElement) {
    loaderElement.classList.add('is-hidden');
  }
}

export function showLoadMoreButton() {
  if (loaderButtonElement) {
    loaderButtonElement.classList.remove('is-hidden');
  }
}

export function hideLoadMoreButton() {
  if (loaderButtonElement) {
    loaderButtonElement.classList.add('is-hidden');
  }
}
