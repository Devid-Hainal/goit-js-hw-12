import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import { refs } from './js/render-functions';
const {
  container,
  formElement,
  inputElement,
  buttonElement,
  galleryListElement,
  loaderElement,
  loaderButtonElement,
} = refs;

formElement.addEventListener('submit', event => {
  event.preventDefault();

});
