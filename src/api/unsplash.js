import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID w8o1lQ3Fx1KQP_VI6LNUWYkHcAw3cEnRhIQqq3Wbfbg",
  },
});
