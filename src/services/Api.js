import axios from 'axios';
import { POSTS_PER_PAGE } from 'constants/constans';

const KEY = '38422491-d3a7349da138a845748c14ac1';

const instance = axios.create({
  baseURL: `https://pixabay.com/api`,
  params: {
    page: 1,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: POSTS_PER_PAGE,
  },
});

export const requestGalleryList = async (category, page) => {
  const { data } = await instance.get(`/`, {
    params: { q: category, page: page },
  });
  return data;
};
