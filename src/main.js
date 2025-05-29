  import iziToast from 'izitoast';
  import { getImagesByQuery } from './js/pixabay-api';
  import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
    formElement,
    refs,
  } from './js/render-functions';

  const { inputElement, loaderButtonElement, galleryListElement } = refs;

  let query = '';
  let page = 1;
  const perPage = 15;

  // Обробка форми пошуку
  formElement.addEventListener('submit', async event => {
    event.preventDefault();

    const newQuery = inputElement.value.trim();
    if (!newQuery) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search term',
        position: 'topRight',
      });
      return;
    }

    if (newQuery !== query) {
      query = newQuery;
      page = 1;
      clearGallery();
      hideLoadMoreButton();
    }

    await fetchImages();
  });

  // Обробка кнопки "Load more"
  loaderButtonElement.addEventListener('click', async () => {
    page += 1;
    await fetchImages();
  });

  // Основна функція запиту та рендеру
  async function fetchImages() {
    try {
      showLoader();

      const data = await getImagesByQuery(query, page, perPage);

      hideLoader();

      if (data.hits.length === 0) {
        hideLoadMoreButton();
        iziToast.info({
          title: 'Info',
          message: 'No images found. Try another search term.',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
      showLoadMoreButton();

      // Перевірка на кінець колекції
      const totalPages = Math.ceil(data.totalHits / perPage);
      if (page >= totalPages) {
        hideLoadMoreButton();
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }

      // Плавне прокручування
      if (page > 1) {
        const { height: cardHeight } =
          galleryListElement.firstElementChild.getBoundingClientRect();
        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      hideLoader();
      hideLoadMoreButton();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
      console.error('Fetch error:', error);
    }
  }
