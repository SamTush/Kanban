const moviesCounter = (movies) => {
    const seasons = document.querySelector('.home');
    seasons.insertAdjacentHTML('beforeend', `
     <span>(${movies.length})</span>`)
}

export default moviesCounter