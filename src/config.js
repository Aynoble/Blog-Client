import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://blog-murex-five.vercel.app/api/",
});
