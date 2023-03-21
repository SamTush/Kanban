import './styles/style.scss';

fetch('https://api.tvmaze.com/shows/163',{
    method: "GET",
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  