import { commentsCounter } from "./commentsCounter";

const involvementId = 'sGPblqXwvYvemdbE1QYB';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;
const nav = document.querySelector('.navigation');
const commentLayout = (index) => {
  nav.insertAdjacentHTML('afterend', ` <div class="container-fluid popup p-5 mt-5" id="popup-${index}">
  <div class="row main-row">
  <div class="col col-12 img-section">
      <div class="row image-row">
          <div class="col col-11 d-flex justify-content-center">
              <div class="img-div">
                <img id="popup-img" src="" alt="" srcset="">
              </div>
          </div>
          <button class="col col-1 mt-3 btn close">
              <i class="fa-solid fa-xmark fa-2xl exit-btn"></i>
          </button>
      </div>
  </div>
  <div class="col col-12 pt-3 title-section">
      <div class="row title-row">
          <div class="col col-12 d-flex justify-content-center">
              <h2>Arrow Season </h2>
          </div>
          <div class="col col-12 ps-4"></div>
          <div class="col col-6 ps-5"></div>
          <div class="col col-12 pt-1 ps-4"></div>
      </div>
  </div>
  <div class="col col-12 pt-3 mt-4 comments-section" id="comments-${index}">
      <div class="row coments-container comments-row">
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
      <div class="col col-12 form-section">
          <form id="form-submit-comment" class="comment-form">
              <div class="mt-3 ps-4">
              <label for="Your name"hidden>Your name</label>
              <input type="text" class="form-control name-input" id="your-name" placeholder="Your name" required>
              </div>
              <div class="mt-3 ps-4">
              <label for="Your insights"hidden>Your insights</label>
              <textarea type="text" class="form-control review-input" id="your-insights" placeholder="Your insights" required></textarea>
              </div>
              <div class=" mt-3 ps-4">
                  <button type="submit" id="form-submit" class="btn btn-outline-light">comment</button>
              </div>
          </form>
      </div>
  </div>
</div>
    </div>
    `);
};

const getComment = async (itemId) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments?item_id=${itemId}`);
    const commentUser = await response.json();
    return commentUser;
  } catch (error) {
    return error;
  }
};

const postComment = async (itemId, name, comment) => {
  const response = await fetch(
    commentUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
        username: name,
        comment,
      }),
    },
  );
  const data = await response.text();
  getComment(itemId);
  return data || null;
};

const commentBtn = async (movies) => {
  const commentPopUp = document.querySelectorAll('.comments-btn');
  const popup = document.querySelector('.popup');
  commentPopUp.forEach((button) => {
    button.addEventListener('click', async () => {
      const index = parseInt(button.dataset.movies, 10);
      const movie = movies[index];
      const imgSrc = movie.image.original;
      const { summary } = movie;
      const season = movie.number;
      document.getElementById('popup-img').setAttribute('src', imgSrc);
      document.querySelector('.title-section h2').textContent = `Arrow Season ${season}`;
      document.querySelector('.title-section .ps-4').innerHTML = summary;
      popup.classList.add('active');
      commentsCounter(movie.id);
      const commentFrom = document.querySelector('#form-submit-comment');
      const commentList = document.querySelector('.commentsList');
      commentFrom.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formName = document.querySelector('#your-name');
        const formComment = document.querySelector('#your-insights');
        const movieIndex = movies[index];
        const movieId = movieIndex.id;
        await postComment(movieId, formName.value, formComment.value);
        formComment.value = '';
        formName.value = '';
        commentsCounter(movieId);
        const getAllComment = await getComment(movieId);
        let html = '';
        getAllComment.forEach((element) => {
          html += `<li>${element.creation_date} - ${element.username}: ${element.comment}</li>`;
        });
        commentList.innerHTML = html;
      });
      const movieIndexGet = movies[index];
      const movieIdGet = movieIndexGet.id;
      const getAllComment = await getComment(movieIdGet);
      let html = '';
      getAllComment.forEach((element) => {
        html += `<li>${element.creation_date} - ${element.username}: ${element.comment}</li>`;
      });
      commentList.innerHTML = html;
    });
  });
};

const closePopup = () => {
  document.querySelector('.exit-btn').addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    popup.classList.remove('active');
    location.reload();
  });
};
  
export { commentLayout, commentBtn, closePopup, getComment, postComment };