import './styles/style.scss';
import layout from './modules/display.js';
import { like, getLikes } from './modules/shows.js';
import moviesCounter from './modules/itemsCounter.js';
import logo from './assets/KANBAN.png';
import { commentLayout, closePopup, commentBtn } from './modules/comments';

const image = document.querySelector('#logo');
image.setAttribute('src', logo);

const movies = [];

const arrow = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/4/seasons', {
    method: 'GET'
  });
  const data = await response.json();
  for (let i = 0; i < data.length; i++){
    movies.push(data[i]);
   }
  return movies;
};

document.addEventListener('DOMContentLoaded', () => {
  arrow().then((movies) => {
      movies.forEach((movie, index) => {
      layout(movie, index);
    });
    moviesCounter(movies);
    getLikes();
    like();
    commentLayout();
    commentBtn(movies);
    closePopup();
  });
});