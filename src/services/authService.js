import http from "./httpService";
import { config } from "../config";

const apiEndpoints = config.apiUrl + "/auth";

export function login(email, password) {
  return http.post(apiEndpoints, {
    email,
    password
  });
}
