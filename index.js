
const CONTROLLER_IP = '197.13.10.162';
const PORT = '8043';
const CONTROLLER_ID = '35d07bdb43a76fb05c263e52f09c9aae';
// Example usage
const OPERATOR_USERNAME = 'Relead';
const OPERATOR_PASSWORD = 'releadpassword';


function submitAuth() {
    event.preventDefault();
    alert(params.clientMac);
    loginOperator(OPERATOR_USERNAME, OPERATOR_PASSWORD)
    //loginGuest(params.clientMac, params.apMac, params.ssidName, params.radioId, params.site, params.time)
}


// Function to extract query parameters from the current URL
function getQueryParams() {
    let params = new URLSearchParams(window.location.search);
    return {
        clientMac: params.get('clientMac'),
        clientIp: params.get('clientIp'),
        t: params.get('t'),
        site: params.get('site'),
        redirectUrl: decodeURIComponent(params.get('redirectUrl')),
        apMac: params.get('apMac'),
        ssidName: params.get('ssidName'),
        radioId: params.get('radioId')
    };
}

// Extracted parameters from the current URL
const params = getQueryParams();

// Display parameters on the HTML page
document.getElementById('clientMac').textContent = params.clientMac;
document.getElementById('clientIp').textContent = params.clientIp;
document.getElementById('t').textContent = params.t;
document.getElementById('site').textContent = params.site;
document.getElementById('redirectUrl').textContent = params.redirectUrl;
document.getElementById('apMac').textContent = params.apMac;
document.getElementById('ssidName').textContent = params.ssidName;
document.getElementById('radioId').textContent = params.radioId;

// Define the login function
async function loginOperator(username, password) {
    // Define the URL to which the POST request will be sent
    const url = `https://${CONTROLLER_IP}:${PORT}/${CONTROLLER_ID}/api/v2/hotspot/login`;  // Replace with the actual login URL

    // Define the data to be sent in the POST request
    const loginData = {
        name: username,
        password: password
    };
    alert(JSON.stringify(loginData))
    try {
        // Send the POST request using fetch
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',  // Ensure the Content-Type is set to application/json
                'Accept': 'application/json'  // This is optional but recommended if the server returns JSON
            },
            body: JSON.stringify(loginData)  // Convert the data to JSON format
        });

        // Check if the response is successful (status code 200-299)
        if (response.ok) {
            // Parse the JSON response
            const data = await response.json();
            alert('Login successful:', data);
            // Handle the successful login response here (e.g., redirect, store token)
        } else {
            alert('Login failed:', response.statusText);
            // Handle the error response here
        }
    } catch (error) {
        alert('Error:', error);
        // Handle network errors here
    }
}

async function loginGuest(clientMac, apMac, ssidName, radioId, site, time) {
    // Define the URL to which the POST request will be sent
    const url = `https://${CONTROLLER_IP}:${PORT}/${CONTROLLER_ID}/api/v2/hotspot/extPortal/auth`;  // Replace with the actual login URL

    // Define the data to be sent in the POST request
    const loginData = {
        clientMac: clientMac,
        apMac: apMac,
        ssidName: ssidName,
        radioId: radioId,
        site: site,
        time: time,
        authType: '1'
    };

    try {
        // Send the POST request using fetch
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Specify the request content type
            },
            body: JSON.stringify(loginData)  // Convert the data to JSON format
        });

        // Check if the response is successful (status code 200-299)
        if (response.ok) {
            // Parse the JSON response
            const data = await response.json();
            alert('Login successful:', data);
            // Handle the successful login response here (e.g., redirect, store token)
        } else {
            alert('Login failed:', response.statusText);
            // Handle the error response here
        }
    } catch (error) {
        alert('Error:', error);
        // Handle network errors here
    }
}
