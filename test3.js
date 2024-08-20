process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "TPEAP_SESSIONID=4e15a4d5e809486c91677987b03c886c");

const raw = JSON.stringify({
  name: "Relead",
  password: "releadpassword"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://197.13.10.162:8043/35d07bdb43a76fb05c263e52f09c9aae/api/v2/hotspot/login", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));