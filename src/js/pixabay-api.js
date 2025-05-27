import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const baseURL = 'https://pixabay.com/api/';
  const apiKey = '50347658-285688eb76e59c705e33623f4';

  const params = {
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };
  const headers = {};

  const response = await axios.get(baseURL, { params });
  return response.data;
}

