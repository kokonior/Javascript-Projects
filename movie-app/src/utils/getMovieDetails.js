import '../components/movie-details.js';
import getMovieID from './getMovieID.js';
import axios from 'axios';
import { API_URL, API_KEY } from './variable.js';

const getMovieDetails = async () => {
  const movieID = getMovieID();

  if (movieID) {
    document.querySelector('#movie-details-list').innerHTML = '';

    try {
      const response = await axios.get(`${API_URL}/movie/${movieID}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits`);
      const movie = response.data;
      const movieDetailsElement = document.createElement('movie-details');
      movieDetailsElement.movie = movie;
      document.querySelector('#movie-details-list').append(movieDetailsElement);
    } catch (error) {
      console.error(error);
    }
  }
};

export default getMovieDetails;