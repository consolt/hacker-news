import api from './api';


const fetchStoryIds = () => {
  return api.get('topstories.json');
};


const fetchStoryById = (id) => {
  return api.get(`item/${id}.json`);
};

const HackerNewsService = {
  fetchStoryIds,
  fetchStoryById
};

export default HackerNewsService;
