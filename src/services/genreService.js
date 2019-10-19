import http from "./httpService";
import { config } from "../config";

export function getGenres() {
  return http.get(config.apiUrl + "/genres");
}
