import axios from 'axios';

const API_KEY = '29712298-ddd919f271590c853974eaf22';

export const fetchImages = async (query, page, perPage) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}&safesearch=true`
  );
  return response.data;
};
