import axios from "axios";

const KEY = "AIzaSyCd1LYVDeGevvZZHSaof92l_XTkKFE31W0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
