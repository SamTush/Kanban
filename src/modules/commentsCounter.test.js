import { commentsCounter } from "./commentsCounter.js";
import { getComment } from "./comments.js";
import { JSDOM } from "jsdom";

jest.mock("./comments.js", () => ({
  getComment: jest.fn(),
}));

describe("commentsCounter function", () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM("<!DOCTYPE html><div class='count-comments'></div>");
    global.document = dom.window.document;
  });

  afterEach(() => {
    jest.resetAllMocks();
    global.document = undefined;
    dom.window.close();
  });

  it("should update the comment count in the HTML element", async () => {
    const itemId = "123";
    const comments = [
      { id: "1", body: "Comment 1" },
      { id: "2", body: "Comment 2" },
    ];
    getComment.mockResolvedValueOnce(comments);

    await commentsCounter(itemId);

    expect(getComment).toHaveBeenCalledWith(itemId);
    expect(document.querySelector(".count-comments").innerHTML).toEqual(
      "<h5>Comment(2)</h5>"
    );
  });

  it("should handle errors from getComment", async () => {
    const itemId = "123";
    const error = new Error("Failed to fetch comments");
    getComment.mockRejectedValueOnce(error);

    await commentsCounter(itemId);

    expect(getComment).toHaveBeenCalledWith(itemId);
    expect(document.querySelector(".count-comments").innerHTML).toEqual(
      "<h5>Comment(0)</h5>"
    );
  });
});
