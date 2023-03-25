import { getComment } from "./comments.js";

const commentsCounter = async (itemId) => {
  try {
    const getLength = await getComment(itemId);
    const commentTitle = document.querySelector(".count-comments");
    commentTitle.innerHTML = `<h5>Comment(${getLength.length})</h5>`;
  } catch (error) {
    console.error(error);
    const commentTitle = document.querySelector(".count-comments");
    commentTitle.innerHTML = `<h5>Comment(0)</h5>`;
  }
};

export { commentsCounter };
