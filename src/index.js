import './styles/style.sass';

fetch('https://api.tvmaze.com/shows',{
    method: "GET",
})
  .then((response) => response.json())
  .then((data) => console.log(data))