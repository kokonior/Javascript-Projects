import '../components/movie-card.js';
import axios from 'axios';
import { getCurrentPage } from './pagination.js';
import { API_URL, API_KEY } from './variable.js';

const getDiscoverMovies = async () => {
  if (document.getElementById('discover-list').innerHTML === '') {
    try {
      const response = await axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${getCurrentPage()}&region=id`);
      const movies = response.data.results;
      movies.forEach((movie) => {
        const movieCardElement = document.createElement('movie-card');
        movieCardElement.movie = movie;
        document.getElementById('discover-list').append(movieCardElement);
      });
    } catch (error) {
      console.error(error);
    }
  }
};

export default getDiscoverMovies;
