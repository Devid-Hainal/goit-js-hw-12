import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

export const refs = {
  container: document.querySelector('.section-js'),
  formElement: document.querySelector('.section-js .form'),
  inputElement: document.querySelector('.section-js input[search-text]'),
  buttonElement: document.querySelector('.section-js button'),
  galleryListElement: document.querySelector('.section-js .gallery'),
  loaderElement: document.querySelector('.section-js .loader'),
};

const {
  container,
  formElement,
  inputElement,
  buttonElement,
  galleryListElement,
  loaderElement,
} = refs;

let lightBox = new SimpleLightbox('gallery a');

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
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </li>`;
      }
    )
    .join('');

  galleryListElement.insertAdjacentHTML('beforeend', markupCreation);
  lightBox.refresh()
}

export async function clearGallery() {
  galleryListElement.innerHTML('');
}

export async function showLoader() {
  if (loader) {
    loader.classList.remove('is-hidden');
  }
}

export async function hideLoader() {
  if (loader) {
    loader.classList.add('is-hidden');
  }
}

export async function showLoadMoreButton() {
  if (loadMoreBtn) {
    loadMoreBtn.classList.remove('is-hidden');
  }
}

export async function hideLoadMoreButton() {
  if (loadMoreBtn) {
    loadMoreBtn.classList.add('is-hidden');
  }
}
