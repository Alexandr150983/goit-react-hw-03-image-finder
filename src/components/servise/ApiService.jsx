import axios from 'axios';

const apiKey = '38906051-b75951c25e9106fdf3cf1ae5b';
const perPage = 12;

export const getImages = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
};
