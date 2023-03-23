const appId = 'sGPblqXwvYvemdbE1QYB'; 
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const postComment = async (itemId) => {
  const requestBody = { item_id: itemId };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
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

