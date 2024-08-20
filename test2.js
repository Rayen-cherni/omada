// The URL to which the POST request will be sent
const CONTROLLER_IP = '197.13.10.162';
const PORT = '8043';
const CONTROLLER_ID = '35d07bdb43a76fb05c263e52f09c9aae';
// Example usage
const OPERATOR_USERNAME = 'Relead';
const OPERATOR_PASSWORD = 'releadpassword';

const url = `http://${CONTROLLER_IP}:${PORT}/${CONTROLLER_ID}/api/v2/hotspot/login`;

const url2 = "http://localhost:8080/api/consumer/create";

// The data to be sent in the POST request
const data = {
  name: 'Relead',
  password: 'releadpassword'
};
const data2 = {
  ageTranch: "INF18",
  gender: "MALE",
  mac: "dd:dd:dd:dd:dd"
};
// Sending the POST request using fetch
fetch(url2, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',  // Set the content type to JSON
  },
  body: JSON.stringify(data2)  // Convert the data object to a JSON string
})
  .then(response => {
    console.log(response.status)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();  // Parse the JSON response
  })
  .then(data => {
    console.log('Success:', data);  // Handle the response data
  })
  .catch(error => {
    console.error('Error:', error);  // Handle any errors
  });