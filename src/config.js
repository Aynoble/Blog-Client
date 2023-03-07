import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://water-maddening-calculator.glitch.me/api/",
});
