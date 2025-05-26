import axiox from 'axios';

export async function getImagesByQuery(query, page) {
  const baseURL = 'https://pixabay.com/api/';
  const apiKey = '50347658-285688eb76e59c705e33623f4';

  const params = {
    key: API_KEY,
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

// const baseURL = 'https://pixabay.com/api/';
// const apiKey = '50347658-285688eb76e59c705e33623f4';

// export async function getImagesByQuery(query, page) {

//   try {
//     const response = await axios.get(BASE_URL, { params });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     throw error;
//   }
// }
