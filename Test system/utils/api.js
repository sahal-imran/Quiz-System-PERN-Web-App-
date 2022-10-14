import axios from "axios";
// http://localhost:5000/api
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:5000/",
});

export default api;
