import axios from "axios";

export const myAPI = axios.create({
  baseURL: 'https://animelist.fly.dev',
})