import axios from "axios";


const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyCbKZJl8XiyV79lmDcRXag_A3YXu6RWYhw",
  },
});

export default request