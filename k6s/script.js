import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 1, // 1 virtual users
  duration: "10s", // for 30 seconds
};

export default function () {
  let url = __ENV.MY_URL || "http://localhost:5678/";
  http.get(url);
  sleep(1);
}
