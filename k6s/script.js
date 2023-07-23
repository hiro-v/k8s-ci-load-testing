import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 10, // 10 virtual users
  duration: "30s", // for 30 seconds
};

export default function () {
  let url = __ENV.MY_URL || "http://localhost:5678/";
  http.get(url);
  sleep(1);
}
