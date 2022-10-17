import '../components/movie-card.js';
import axios from 'axios';
import { API_KEY, API_URL } from './variable.js';
import { getCurrentPage } from './pagination.js';

const getUpcomingMovies = async () => {
  document.getElementById('upcoming-list').innerHTML = '';

  try {
    const response = await axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${getCurrentPage()}&region=id`);
    const { results } = response.data;

    results.forEach((movie) => {
      const movieCardElement = document.createElement('movie-card');
      movieCardElement.movie = movie;
      document.getElementById('upcoming-list').append(movieCardElement);
    });
  } catch (error) {
    console.error(error);
  }
};

export default getUpcomingMovies;