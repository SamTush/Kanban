const involvementId = 'sGPblqXwvYvemdbE1QYB';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;
const nav = document.querySelector('.navigation');

const commentLayout = () => {
    nav.insertAdjacentHTML('afterend',` <div class="container-fluid popup p-5 mt-5">
       <div class="row">
           <div class="col col-12 img-section">
               <div class="row">
                   <div class="col col-11 d-flex justify-content-center">
                       <img id="popup-img" src="" alt="" srcset="">
                   </div>
                   <button class="col col-1 mt-3">
                       <i class="fa-solid fa-xmark fa-2xl exit-btn"></i>
                   </button>
               </div>
           </div>
           <div class="col col-12 pt-3 title-section">
               <div class="row">
                   <div class="col col-12 d-flex justify-content-center">
                       <h2></h2>
                   </div>
                   <div class="col col-6 ps-4"></div>
                   <div class="col col-6 ps-5"></div>
                   <div class="col col-12 pt-1 ps-4"></div>
               </div>
           </div>
           <div class="col col-12 pt-3 mt-4 comments-section">
               <div class="row comments-container">
                   <div class="col col-12 d-flex justify-content-center">
                       <h5>Comments (0)</h5>
                       <ul class="comments"></ul>
                   </div>
               </div>
           </div>
           <div class="col col-12 comment-section mt-4 pt-3">
               <div class="col col-12 d-flex justify-content-center">
                   <h5 class="mb-">Add a comment</h5>
               </div>
               <div>
                   <form onsubmit="return false" action="POST" class="form">
                       <div class="mt-3 ps-4">
                       <label for="Your name"hidden>Your name</label>
                       <input type="text" class="form-control" id="your-name" placeholder="Your name">
                       </div>
                       <div class="mt-3 ps-4">
                       <label for="Your insights"hidden>Your insights</label>
                       <textarea type="text" class="form-control" id="your-insights" placeholder="Your insights"></textarea>
                       </div>
                       <div class=" mt-3 ps-4">
                           <button type="submit" id="form-submit" class="btn btn-outline-light">Submit</button>
                       </div>
                   </form>
               </div>
           </div>
       </div>
       </div>
       `);
  };

  const commentBtn = async (movies) => {
    const commentPopUp = document.querySelectorAll('.comments-btn');
    const popup = document.querySelector('.popup');
    commentPopUp.forEach((button) => {
      button.addEventListener('click', () => {
        const index = parseInt(button.dataset.movies);
        const movie = movies[index];// get the index of the movie element from the button's data-ref attribute
        const imgSrc = movie.image.medium; // get the image src from the movie element
        const summary = movie.summary; // get the summary from the movie element
        const season = movie.number; // get the season number from the movie element
        document.getElementById('popup-img').setAttribute('src', imgSrc);
        document.querySelector('.title-section h2').textContent = `Arrow Season ${season}`;
        document.querySelector('.title-section .ps-4').innerHTML = summary;
        popup.classList.add('active');
      });
    });
  };
  
  const closePopup = () => {
    document.querySelector('.exit-btn').addEventListener('click', () =>{
      const popup = document.querySelector('.popup');
      popup.classList.remove('active');
    })
  }
  
 export { commentLayout, commentBtn, closePopup };