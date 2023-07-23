import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 1, // 1 virtual users
  duration: "3s", // for 3 seconds
};

export default function () {
  let url = __ENV.MY_URL || "http://localhost:5678/";
  http.get(url);
  sleep(1);
}
