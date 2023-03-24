const appId = 'sGPblqXwvYvemdbE1QYB'; 
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;


const getComments = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
// const commentList = document.querySelector('.comments')
const commentTitle = document.querySelector('.comment-title');

const displayComments = async () => {
  const comments = await getComments();
    comments.forEach((comment) => {
      const li = document.createElement('li');
      li.className = 'usercomments';
      li.innerHTML = `<span class="date">|${comment.creation_date}|</span>📽️<span class="date">${comment.username}: </span><span class="date">"${comment.comment}"</span>`;
      commentList.appendChild(li);
    });

    const numComments = commentCounter();
    commentTitle.innerHTML = `Comments (${numComments})`;
};


const addComment = async (itemId, name, comment) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username: name,
      comment,
    }),
  });
  const data = await response.text();
  displayComments(itemId);
  return data || null;
};

const createComment = () => {
  const usernameField = document.querySelector('#your-name');
  const commentField = document.querySelector('#your-insights');
  const username = usernameField.value;
  const comment = commentField.value;

  addComment( username, comment);

  usernameField.value = '';
  commentField.value = '';
};



export { createComment }