import jsonPlaceholder from "../apis/jsonPlaceholder";

// changed syntax a bit
// defining a function that is going to return a function
export const fetchPosts = async () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatchEvent({ type: "FETCH_POSTS", payload: response });
};
