const moviesCounter = (movies) => {
  const itemsCounter = movies.length;
  const seasons = document.querySelector('.home');
  seasons.insertAdjacentHTML('beforeend', `<span>${itemsCounter}</span>`);
};

export default moviesCounter;