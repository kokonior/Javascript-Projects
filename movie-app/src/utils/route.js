import '../components/movie-card.js';
import discover from '../pages/discover.html';
import search from '../pages/search.html';
import details from '../pages/details.html';
import trending from '../pages/trending.html';
import upcoming from '../pages/upcoming.html';
import createPagination from './pagination.js';
import getMovieDetails from './getMovieDetails.js';
import getTrendingMovies from './getTrendingMovies.js';
import axios from 'axios';
import { API_KEY, API_URL } from './variable.js';
import getDiscoverMovies from './getDiscoverMovies.js';
import getUpcomingMovies from './getUpcomingMovies.js';

const route = async () => {
  const urlParams = new URL(window.location.href);
  const page = urlParams.searchParams.get('page');
  const mainContent = document.getElementById('main-content');

  if (page === 'discover') {
    mainContent.innerHTML = discover;
    await getDiscoverMovies();
    createPagination('discover-list');
  } else if (page === 'search') {
    mainContent.innerHTML = search;

    document.querySelectorAll('#search-movie').forEach((form) => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        document.getElementById('search-list').innerHTML = '';

        try {
          const query = form.children[0].value;

          const response = await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false&region=id`);

          const { results } = response.data;

          if (results.length === 0) {
            document.getElementById('search-list').className = 'flex items-center justify-center h-24 w-full mt-4';
            document.getElementById('search-list').innerHTML = `
              <h1 class="text-2xl font-bold text-gray-500 dark:text-gray-400">
                No results found for "${query}"
              </h1>
            `;

            return;
          }

          results.forEach((movie) => {
            const movieCardElement = document.createElement('movie-card');
            movieCardElement.movie = movie;
            document.getElementById('search-list').append(movieCardElement);
          });
        } catch (error) {
          console.error(error);
        }
      });
    });
  } else if (page === 'details') {
    mainContent.innerHTML = details;
    await getMovieDetails();
  } else if (page === 'trending') {
    mainContent.innerHTML = trending;
    await getTrendingMovies();
    createPagination('trending-list');
  } else if (page === 'upcoming') {
    mainContent.innerHTML = upcoming;
    await getUpcomingMovies();
  } else {
    mainContent.innerHTML = discover;
    await getDiscoverMovies();
    createPagination('discover-list');
  }
};

export default route;