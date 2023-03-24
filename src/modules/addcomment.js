const appId = 'sGPblqXwvYvemdbE1QYB'; 
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const postComment = async (itemId, name, comment) => {
  const requestBody = { item_id: itemId };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody, name, comment),
  };
  try {
    const response = await fetch(url, options);
    if (response.status === 201) {
      console.log('Comment Added successfully!');
    }
  } catch (error) {
    console.error('Error adding comment:', error);
  }
}

const formSubmit = () => {
    const submit = document.querySelector('#form-submit');
    submit.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#your-name').value;
            const comment = document.querySelector('#your-insights').value;
            const itemId = submit.previousElementSibling.querySelector('img').getAttribute('src');
            postComment(itemId, name, comment)
        });
}


export { formSubmit }