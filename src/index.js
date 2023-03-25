import './styles/style.scss';
import layout from './modules/display.js';
import { like, getLikes, arrow } from './modules/shows.js';
import moviesCounter from './modules/itemsCounter.js';
import logo from './assets/KANBAN.png';
import { commentLayout, closePopup, commentBtn } from './modules/comments.js';


const image = document.querySelector('#logo');
image.setAttribute('src', logo);

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