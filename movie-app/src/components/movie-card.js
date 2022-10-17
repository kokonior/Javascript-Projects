import defaultBackdrop from '../assets/images/default-img.jpg';
import { API_IMG_URL } from '../utils/variable.js';

class MovieCard extends HTMLElement {
  constructor() {
    super();
  }

  set movie(movie) {
    this.$movie = movie;
    this.render();
  }

  convertToDate(date) {
    const newDate = new Date(date);
    const month = newDate.getMonth();
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${monthName[month]} ${day}, ${year}`;
  }

  getCurrentPage() {
    return new URL(window.location.href).searchParams.get('page');
  }

  render() {
    const { overview, release_date, title, popularity, vote_average, backdrop_path, id } = this.$movie;

    const backdropImg = backdrop_path ? `${API_IMG_URL}${backdrop_path}` : defaultBackdrop;
    this.innerHTML = `
      <div class="movie-card">
        <a href="/?page=details&id=${id}">
          <img src="${backdropImg}" alt="${title}">
        </a>
        <div class="movie-cardbody">
          <a href="/?page=details&id=${id}">
            <h5 class="movie-cardtitle">
              ${title}
            </h5>
          </a>
          <p class="movie-carddesc">
            ${overview.length >= 100 ? `${overview.substring(0, 100)}...` : overview}
          </p>
          <div class="flex items-center justify-between">
            <div class="flex flex-col">
              <span class="movie-cardtext">
                ${this.getCurrentPage() === 'upcoming' ? `Will be released on ${this.convertToDate(release_date)}` : `Release Date: ${this.convertToDate(release_date)}`}
              </span >

              <span class="movie-cardtext">
                Popularity: ${popularity}
              </span>

              <span class="movie-cardtext">
                Vote Average: ${vote_average} of 10
              </span>
            </div >
          </div >
        </div >
      </div >
      `;
  }
}

customElements.define('movie-card', MovieCard);