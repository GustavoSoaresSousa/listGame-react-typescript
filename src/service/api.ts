import axios from "axios";
const headers = { 'Content-Type': 'application/json' };

//implementar token aqui token aqui salvando  no local storege
  // if (token) {
  //   headers['x-access-token'] = token;
  // }
export const myAPI = axios.create({
  baseURL: 'https://animelist.fly.dev',
  headers: {
    ...headers,
  },
})