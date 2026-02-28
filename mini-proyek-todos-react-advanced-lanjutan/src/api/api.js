import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/todos";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;