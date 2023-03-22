const layout = (movie) => {
  const movieSection = document.querySelector('#movie-list');
  const movieItem = document.createElement('div');

  movieItem.innerHTML = `
  <div>
      <img src="${movie.image.original}" alt="" >
      <span>
      <h2>Arrow Season ${movie.number}</h2>
      <button type="button" class="like-btn"><i class="fa-solid fa-heart btn btn-secondary btn-sm  text-xl font-bold"></i></button>
      <span class="likes"> 0 likes </span>
      </span>     
  </div>
  <button type="button">Comments</button>
  <button type="button">Reservations</button>
  `;

  movieSection.appendChild(movieItem);
}

export default layout 