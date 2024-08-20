process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const CONTROLLER_IP = '197.13.10.162';
const PORT = '8043';
const CONTROLLER_ID = '35d07bdb43a76fb05c263e52f09c9aae';
// Example usage
const OPERATOR_USERNAME = 'Relead';
const OPERATOR_PASSWORD = 'releadpassword';

// Define the login function
async function loginOperator(username, password) {
    // Define the URL to which the POST request will be sent
    const url = `http://${CONTROLLER_IP}:${PORT}/${CONTROLLER_ID}/api/v2/hotspot/login`;  // Replace with the actual login URL

    // Define the data to be sent in the POST request
    const loginData = {
        name: username,
        password: password
    };
    console.log(JSON.stringify(loginData))
    try {
        // Send the POST request using fetch
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Ensure the Content-Type is set to application/json
                'Cookie': 'TPEAP_SESSIONID=4e15a4d5e809486c91677987b03c886c'
            },
            redirect:"follow",
            body: JSON.stringify(loginData)  // Convert the data to JSON format
        });
        // Check if the response is successful (status code 200-299)
        if (response.ok) {
            // Parse the JSON response
            const data = await response.json();
            console.log('Login successful:', data);
            // Handle the successful login response here (e.g., redirect, store token)
        } else {
            console.log('Login failed:', response.status);
            // Handle the error response here
        }
    } catch (error) {
        console.log('Error:', error);
        // Handle network errors here
    }
}


loginOperator(OPERATOR_USERNAME,OPERATOR_PASSWORD)
