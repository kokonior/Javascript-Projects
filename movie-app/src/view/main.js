import logo from '../assets/images/logo.png';
import icon from '../assets/images/Movie_App.png';
import route from '../utils/route.js';

const toggleTheme = () => {
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
  }

  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', () => {

    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  });
};

const main = async () => {
  document.getElementById('hero-img').setAttribute('src', 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg');
  document.getElementById('logo-img').src = logo;
  const favicon = document.createElement('link');
  favicon.setAttribute('rel', 'shortcut icon');
  favicon.setAttribute('href', icon);
  favicon.setAttribute('type', 'image/x-icon');
  document.head.appendChild(favicon);

  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const navigation = document.querySelectorAll('#navigation a');
  const currentPage = new URL(window.location.href).searchParams.get('page');

  if (currentPage) {
    navigation.forEach((nav) => {
      if (nav.getAttribute('href').includes(currentPage)) {
        nav.classList.remove('nav-link');
        nav.classList.add('nav-link-active');
      } else {
        nav.classList.remove('nav-link-active');
        nav.classList.add('nav-link');
      }
    });
  } else {
    navigation.forEach((nav) => {
      if (nav.getAttribute('href').includes('discover')) {
        nav.classList.remove('nav-link');
        nav.classList.add('nav-link-active');
      } else {
        nav.classList.remove('nav-link-active');
        nav.classList.add('nav-link');
      }
    });
  }

  toggleTheme();

  await route();
};

export default main;