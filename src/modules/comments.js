const involvementId = 'sGPblqXwvYvemdbE1QYB';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;

const postCommentBtn = document.querySelectorAll('#post-comment');
// const displayPopUp = document.querySelector('#popup');
// const moviesPost = () => {
//   postComment = async (index, username, comment) => {
//     await fetch(commentUrl, {
//       method: 'POST',
//       body: JSON.stringify({
//         item_id: index,
//         username,
//         comment,
//       }),
//       headers: { 'content-Type': 'application/json; charset=UTF-8' },
//     });
//   }
//    getComment = async (index) => {
//      const response = await fetch(`${commentUrl}?item_id=${index}`);
//      const user = await response.json();
//      return user;
//    };
// }

const commentLayout = (movie) => {
    return ` <div class="container-fluid popup p-5 mt-5">
       <div class="row">
           <div class="col col-12 img-section">
               <div class="row">
                   <div class="col col-11 d-flex justify-content-center">
                       <img id="popup-img" src="${movie.image.medium}" alt="" srcset="">
                   </div>
                   <div class="col col-1 mt-3">
                       <i class="fa-solid fa-xmark fa-2xl"></i>
                   </div>
               </div>
           </div>
           <div class="col col-12 pt-3 title-section">
               <div class="row">
                   <div class="col col-12 d-flex justify-content-center">
                       <h2>Arrow Season ${movie.number}</h2>
                   </div>
                   <div class="col col-6 ps-4">${movie.endDate}</div>
                   <div class="col col-6 ps-5">${movie.premiereDate}</div>
                   <div class="col col-12 pt-1 ps-4">${movie.summary}</div>
               </div>
           </div>
           <div class="col col-12 pt-3 mt-4 comments-section">
               <div class="row">
                   <div class="col col-12 d-flex justify-content-center">
                       <h5>Comments (2)</h5>
                   </div>
                   <div class="col col-12 ps-4">03/11/2021 Alex: I'd love to buy it!</div>
                   <div class="col col-12 ps-4">03/12/2021 Mia: I love</div>
               </div>
           </div>
           <div class="col col-12 comment-section mt-4 pt-3">
               <div class="col col-12 d-flex justify-content-center">
                   <h5 class="mb-">Add a comment</h5>
               </div>
               <div>
                   <form>
                       <div class="mt-3 ps-4">
                       <label for="Your name"hidden>Your name</label>
                       <input type="text" class="form-control" id="your-name" placeholder="Your name">
                       </div>
                       <div class="mt-3 ps-4">
                       <label for="Your insights"hidden>Your insights</label>
                       <textarea type="text" class="form-control" id="your-insights" placeholder="Your insights"></textarea>
                       </div>
                       <div class=" mt-3 ps-4">
                           <button type="submit" class="btn btn-outline-light">Submit</button>
                       </div>
                   </form>
               </div>
           </div>
       </div>
       </div>
       `
   }

 export { commentLayout };