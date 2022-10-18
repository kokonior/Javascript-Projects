import '../components/movie-card.js';
import axios from 'axios';
import { API_KEY, API_URL } from './variable.js';
import { getCurrentPage } from './pagination.js';

const getTrendingMovies = async () => {
  document.getElementById('trending-list').innerHTML = '';

  try {
    const response = await axios.get(`${API_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${getCurrentPage()}`);
    const { results } = response.data;

    results.forEach((movie) => {
      const movieCardElement = document.createElement('movie-card');
      movieCardElement.movie = movie;
      document.getElementById('trending-list').append(movieCardElement);
    });
  } catch (error) {
    console.error(error);
  }
};

export default getTrendingMovies;