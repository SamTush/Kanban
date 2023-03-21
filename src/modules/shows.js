export default class Shows {
    static arrow = async () => {
       await fetch('https://api.tvmaze.com/shows/4/seasons',{
        method: "GET"
      })
      .then((response) => response.json())
      .then((data) => {
          localStorage.setItem('movies', json.stringify(data))
      }) 
    } 
}