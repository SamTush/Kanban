const layout = (movie, index) => {
  const movieSection = document.querySelector('.movies');
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
  <button id="${movie.id}" data-movies="${index}" type="button" class="comments-btn">Comments</button>
  <button type="button">Reservations</button>
  `;

  movieSection.appendChild(movieItem);
}

export default layout 