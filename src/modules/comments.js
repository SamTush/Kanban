const nav = document.querySelector('.navigation');
const commentLayout = (index) => {
  nav.insertAdjacentHTML('afterend', ` <div class="container-fluid popup p-5 mt-5" id="popup-${index}">
    <div class="row main-row">
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
                    <h2>Arrow Season </h2>
                </div>
                <div class="col col-6 ps-4"></div>
                <div class="col col-6 ps-5"></div>
                <div class="col col-12 pt-1 ps-4"></div>
            </div>
        </div>
        <div class="col col-12 pt-3 mt-4 comments-section" id="comments-${index}">
            <div class="row coments-container">
                <div class="col col-12 d-flex count-comments justify-content-center">
                </div>
                <div class="col col-12 ps-4">
                 <ul class="commentsList">
                 </ul>
                </div>
            </div>
        </div>
        <div class="col col-12 comment-section mt-4 pt-3">
            <div class="col col-12 d-flex justify-content-center">
                <h5 class="mb-">Add a comment</h5>
            </div>
            <div>
                <form id="form-submit-comment" class="comment-form">
                    <div class="mt-3 ps-4">
                    <label for="Your name"hidden>Your name</label>
                    <input type="text" class="form-control" id="your-name" placeholder="Your name" required>
                    </div>
                    <div class="mt-3 ps-4">
                    <label for="Your insights"hidden>Your insights</label>
                    <textarea type="text" class="form-control" id="your-insights" placeholder="Your insights" required></textarea>
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
    button.addEventListener('click', async () => {
      const index = parseInt(button.dataset.movies);
      const movie = movies[index];
      const imgSrc = movie.image.medium;
      const summary = movie.summary;
      const season = movie.number;
      document.getElementById('popup-img').setAttribute('src', imgSrc);
      document.querySelector('.title-section h2').textContent = `Arrow Season ${season}`;
      document.querySelector('.title-section .ps-4').innerHTML = summary;
      popup.classList.add('active');
      const commentFrom = document.querySelector('#form-submit-comment');
      const commentList = document.querySelector('.commentsList');
      commentFrom.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formName = document.querySelector('#your-name');
        const formComment = document.querySelector('#your-insights');
        const movieIndex = movies[index];
        const movieId = movieIndex.id;
        const results = await postComment(movieId, formName.value, formComment.value);
        formComment.value = '';
        formName.value = '';
        const getAllComment = await getComment(movieId);
        let html = '';
        getAllComment.forEach((element) => {
          html += `<li>${element.creation_date} --- ${element.comment} --- ${element.username}</li>`; 
        });
        commentList.innerHTML = html;
        const countComment = document.querySelector('.count-comments');
        countComment.innerHTML = `<h5>Comments (${getAllComment.length})</h5>`;
      });
      const movieIndexGet = movies[index];
      const movieIdGet = movieIndexGet.id;
      const getAllComment = await getComment(movieIdGet);
      let html = '';
      getAllComment.forEach((element) => {
        html += `<li>${element.creation_date} --- ${element.comment} --- ${element.username}</li>`; 
      });
      commentList.innerHTML = html;
      const countCommentTwo = document.querySelector('.count-comments');
      countCommentTwo.innerHTML = `<h5>Comments (${getAllComment.length})</h5>`;
    });
  });
};  

const closePopup = () => {
  document.querySelector('.exit-btn').addEventListener('click', () =>{
    const popup = document.querySelector('.popup');
    popup.classList.remove('active');
  })
};

const involvementId = 'sGPblqXwvYvemdbE1QYB';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;  

const postComment = async (item_id , name, comment) => {
  const data = {
    "item_id": item_id,
    "username": name,
    "comment": comment
  };
  const response = await fetch(
    commentUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  return response;
};
  
const getComment = async (item_id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments?item_id=${item_id}`);
    const commentUser = await response.json();
    return commentUser;
  } catch (error) {
    return error;
  }
};
  
export { commentLayout, commentBtn, closePopup, getComment, postComment };