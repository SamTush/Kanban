import { getComment } from "./comments.js";

const commentsCounter = async (itemId) => {
  const getLength = await getComment(itemId)
  const commentTitle = document.querySelector('.count-comments');
  commentTitle.innerHTML = `<h5>Comment(${getLength.length})</h5>`
}

export { commentsCounter }