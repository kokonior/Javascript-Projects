import getDiscoverMovies from './getDiscoverMovies.js';
import getTrendingMovies from './getTrendingMovies.js';
import getUpcomingMovies from './getUpcomingMovies.js';

export let max_pages = 20;

export const setCurrentPage = (page) => {
  document.getElementById('pagination').setAttribute('data-page', page);
};

export const getCurrentPage = () => document.getElementById('pagination').getAttribute('data-page');

const createPagination = (listID) => {
  document.getElementById('pagination').innerHTML = '';

  for (let i = 1; i <= max_pages; i += 1) {
    const pageElement = document.createElement('li');
    pageElement.classList.add('page-item');
    const pageButton = document.createElement('button');
    pageButton.className = i == 1 ? 'pagination-button active' : 'pagination-button';
    pageButton.innerText = i;
    if (i == 1) pageButton.setAttribute('aria-current', 'page');
    pageButton.addEventListener('click', async () => {
      setCurrentPage(i);
      document.getElementById(listID).innerHTML = '';

      if (listID === 'trending-list') {
        await getTrendingMovies();
      } else if (listID === 'discover-list') {
        await getDiscoverMovies();
      } else if (listID === 'upcoming-list') {
        await getUpcomingMovies();
      }

      const activePage = document.querySelectorAll('button[aria-current]');
      activePage.forEach((page) => {
        page.removeAttribute('aria-current');
        page.className = 'pagination-button';
      });

      pageButton.setAttribute('aria-current', 'page');
      pageButton.className = 'pagination-button active';
    });

    pageElement.append(pageButton);
    document.getElementById('pagination').append(pageElement);
  }
};

export default createPagination;