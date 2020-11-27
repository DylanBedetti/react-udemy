import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID S9o4ZIGCdjdGZn4DPiPfbS_kNh3xZ94VetuvRcpCCP0",
  },
});
