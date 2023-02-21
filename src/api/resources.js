import axios from "./index";

export function uploadPodcast(body) {
  return axios.post("/podcast", body);
}

