import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com/users/renanb12/",
  timeout: 1000,
});
