import axios from "./index";

function getNuxtAuthLocalToken() {
  return localStorage.getItem("auth._token.local");
}

export function authHeaders() {
  return {
    headers: {
      Authorization: getNuxtAuthLocalToken(),
    },
  };
}

export default function uploadPodcast(body) {
  return axios.post("/podcast", 
    body,
    authHeaders(),
  );
}

