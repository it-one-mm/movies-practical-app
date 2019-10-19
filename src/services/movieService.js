import http from "./httpService";
import { config } from "../config";

export function getMovies() {
  return http.get(config.apiUrl + "/movies");
}
