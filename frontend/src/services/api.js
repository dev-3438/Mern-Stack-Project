import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-stack-project-1-7ue1.onrender.com/",
});

export default API;