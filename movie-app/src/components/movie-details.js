import defaultImg from '../assets/images/default-img.jpg';
import { API_IMG_URL } from '../utils/variable.js';

class MovieDetails extends HTMLElement {
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

  render() {
    const { genres, release_date, title, tagline, vote_average, videos, popularity, overview, production_companies, imdb_id, credits: { cast } } = this.$movie;

    const videoUrl = videos.results.length > 0 ? videos.results.map((video) => video.type.toUpperCase() === 'TRAILER' ? `https://www.youtube.com/embed/${video.key}` : `https://www.youtube.com/embed/${video.key}`) : null;

    this.className = 'movie-details-wrapper';
    this.innerHTML = `
      <div class="w-full">
        ${videoUrl === null ? '<h3 class="movie-detail-title">No trailer found for this movie</h3>' : `
          <iframe class="movie-trailer" src="${videoUrl[0]}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        `}

        <div class="flex items-center justify-between mt-4 w-full">
          <h3 class="movie-detail-title w-6/12">${title} - ${videos.results.length > 0 ? videos.results[0].type : ''}</h3>

          <div class="w-6/12 button-group">
            ${imdb_id ? `
              <a href="https://www.imdb.com/title/${imdb_id}" target="_blank" class="btn-primary">IMDB</a>
            ` : ''}
            <a href="/?page=discover" class="btn-secondary">Go to Home</a>
          </div>
        </div>
      </div>

      <div class="w-full">
        <h3 class="movie-detail-title">Overview</h3>
        <p class="movie-detail-desc">${overview}</p>

        <h3 class="movie-detail-title">Genres</h3>
        <p class="movie-detail-desc">${genres.map((genre) => genre.name).join(', ')}</p>

        <h3 class="movie-detail-title">Release Date</h3>
        <p class="movie-detail-desc">${this.convertToDate(release_date)}</p>

        <h3 class="movie-detail-title">Tagline</h3>
        <p class="movie-detail-desc">${tagline}</p>

        <h3 class="movie-detail-title">Vote Average</h3>
        <p class="movie-detail-desc">${vote_average} of 10</p>

        <h3 class="movie-detail-title">Popularity</h3>
        <p class="movie-detail-desc">${popularity}</p>

        <h3 class="movie-detail-title">Production Companies</h3>
        <p class="movie-detail-desc">${production_companies.map((company) => company.name).join(', ')}</p>

        <h3 class="movie-detail-title">Cast</h3>
        <div class="swiper-drag">
          ${cast.map((actor) => `
            <div class="actor-bio">
              <img src="${actor.profile_path ? `${API_IMG_URL}${actor.profile_path}` : defaultImg}" alt="${actor.name}" class="actor-image">
              <p class="movie-detail-desc">${actor.name} ${actor.character === '' ? '' : `as ${actor.character}`}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

customElements.define('movie-details', MovieDetails);