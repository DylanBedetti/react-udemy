import axios from "axios";

const KEY = "AIzaSyB4tGn1bcn7lYTbFKzYabxzbi5I9ZTaEyY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
