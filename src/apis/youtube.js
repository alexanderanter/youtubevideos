//import axios
import axios from "axios";

const KEY = "AIzaSyAdWkgk8000oSw4kRk0P5N9IFR3QJtNdrw";
// "AIzaSyAdWkgk8000oSw4kRk0P5N9IFR3QJtNdrw";
// create KEY variabel with the value of  AIzaSyD03QBYCOYhU20442sEXyu8ENstOHYOiFQ
// create a function thats exported by default and call the axios.create method

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

// place in https://www.googleapis.com/youtube/v3 as the baseURL, add in a params object with part snippet, type video, maxResults 5,key KEY
