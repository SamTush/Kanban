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

const layout = (movie) => {
  const movieSection = document.querySelector('#movie-list');
  const movieItem = document.createElement('div');

  movieItem.innerHTML = `
  <div>
      <img src="${movie.image.original}" alt="" >
      <span>
      <h2>Arrow Season ${movie.number}</h2>
      <button type="button"></button>
      </span>     
  </div>
  <button type="button" >Comments</button>
  <button type="button" >Reservations</button>
  `;

  movieSection.appendChild(movieItem);
}


document.addEventListener('DOMContentLoaded', () => {
    arrow().then((movies) => {
    movies.forEach((movie) => layout(movie));
    })
})

  