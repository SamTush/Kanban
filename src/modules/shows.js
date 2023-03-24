const appId = 'sGPblqXwvYvemdbE1QYB';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

const postLike = async (itemId) => {
  const requestBody = { item_id: itemId };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  };
  try {
    const response = await fetch(url, options);
    if (response.status === 201) {
      return ('Like recorded successfully!');
    }
  } catch (error) {
    return ('Error recording like:', error);
  }
};

const getLikes = async () => {
  try {
    const response = await fetch(url);
    const likes = await response.json();
    likes.forEach((like) => {
      const itemId = like.item_id;
      const itemImg = document.querySelector(`img[src="${itemId}"]`);
      if (itemImg) {
        const item = itemImg.parentNode;
        const likeBtn = item.querySelector('.like-btn');
        const likesCount = like.likes;
        const likesText = likesCount === 1 ? '1 like' : `${likesCount} likes`;
        const likesDisplay = item.querySelector('.likes');
        if (likesDisplay) {
          likesDisplay.innerText = likesText;
        } else {
          likeBtn.insertAdjacentHTML('afterend', `<span class="likes">${likesText}</span>`);
        }
      }
    });
  } catch (error) {
    alert('Error getting likes:', error);
  };
};

const like = () => {
  const likeBtn = document.querySelectorAll('.like-btn');
  likeBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.parentNode.parentNode.parentNode.querySelector('img').getAttribute('src');
      postLike(itemId);
      button.disabled = true;
      const likesDisplay = button.parentNode.querySelector('.likes');
      if (likesDisplay) {
        const likesCount = parseInt(likesDisplay.innerText) + 1;
        likesDisplay.innerText = likesCount === 1 ? '1 like' : `${likesCount} likes`;
      } else {
        button.insertAdjacentHTML('afterend', '<span class="likes">1 like</span>');
      };
    });
  });
};

const movies = [];

const arrow = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/4/seasons', {
    method: 'GET',
  });
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    movies.push(data[i]);
  }
  return movies;
};

export { like, getLikes, arrow };