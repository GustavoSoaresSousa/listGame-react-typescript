import axios from "axios";

function authenticate(){
  const token = window.localStorage.getItem('tokenUserAuthenticate');
  if (token) {
    const headers ={ ['x-access-token'] : token };
    return headers;
  }
}

const headers = authenticate();

export const myAPI = axios.create({
  baseURL: 'https://animelist.fly.dev',
  headers: {
    ...headers,
  },
})