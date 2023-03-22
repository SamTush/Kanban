import './styles/style.scss';
import layout from './modules/display';
import { like, getLikes } from './modules/shows';
import moviesCounter from './modules/itemsCounter';
import logo from './assets/KANBAN.png';

const image = document.querySelector('#logo');

image.setAttribute('src', logo); 

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
    })
})


