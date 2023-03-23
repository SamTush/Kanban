import './styles/style.scss';
import layout from './modules/display';
import { like, getLikes } from './modules/shows';
import moviesCounter from './modules/itemsCounter';
import logo from './assets/KANBAN.png';
import { commentLayout } from './modules/comments';

const image = document.querySelector('#logo');
image.setAttribute('src', logo); 
const nav = document.querySelector('.navigation');

let movies = [];

const arrow = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/4/seasons', {
    method: "GET"
  });
  const data = await response.json();
  for(let i=0; i < data.length; i++){
    movies.push(data[i]);
  }
  return movies;
 };

 document.addEventListener('DOMContentLoaded', () => {
    arrow().then((movies) => {
      movies.forEach((movie) => layout(movie));
      moviesCounter(movies);
      getLikes();
      like();
      const buttons = document.querySelectorAll('.comments-btn');
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
          const popup = document.createElement('div');
          popup.innerHTML = commentLayout(movies[index], popup);
          nav.insertAdjacentElement('beforebegin', popup);
  
          const exitButton = popup.querySelector('.exit-btn');
          exitButton.addEventListener('click', () => {
            popup.style.display = 'none';
          });
        });
      });      
    });
  });

