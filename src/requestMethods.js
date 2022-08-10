import axios from "axios";

const BASE_URL = "http://localhost:3003/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWM0NGRjMmMzOWU3MjYxNDAxNGYzMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDAyMjM4MCwiZXhwIjoxNjYwMjgxNTgwfQ.SSTyfBc9l2CbX3uIbxQYO-WT_kO0y7S4dPutHpcJfBI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: TOKEN,
  },
});
