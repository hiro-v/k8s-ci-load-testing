// Importing the http and sleep modules from k6
import http from "k6/http";
import { sleep } from "k6";

// Setting up the test configuration 
// Configuring to run the test with 1 virtual user for a duration of 3 seconds
export let options = {
  vus: 1, // Setting the number of virtual users (vus) to 1
  duration: "3s", // Setting the test duration to 3 seconds
};

// Defining the main function for our load test
export default function () {
  // Getting the URL from environment variable 'MY_URL' 
  // Default to "http://localhost:5678/" if not set
  let url = __ENV.MY_URL || "http://localhost:5678/";

  // Sending a GET request to the specified URL
  http.get(url);

  // Pausing execution for 1 second before the next iteration
  sleep(1);
}
