const express = require("express");
const app = express();

// Define a dictionary of HTTP status codes and their meanings
const statusMessages = {
  200: "OK: The request has succeeded.",
  201: "Created: The request has been fulfilled and a new resource has been created.",
  204: "No Content: The server successfully processed the request but is not returning any content.",
  400: "Bad Request: The request cannot be processed due to client-side errors.",
  401: "Unauthorized: The request requires authentication.",
  403: "Forbidden: The server understands the request but refuses to authorize it.",
  404: "Not Found: The server has not found anything matching the request URI.",
  405: "Method Not Allowed: The HTTP method is not allowed for this resource.",
  429: "Too Many Requests: The user has sent too many requests in a given time.",
  500: "Internal Server Error: The server encountered an unexpected condition.",
  502: "Bad Gateway: The server received an invalid response from the upstream server.",
  503: "Service Unavailable: The server is currently unable to handle the request.",
  504: "Gateway Timeout: The server did not receive a timely response from the upstream server.",
};

// API Endpoint to get status code information
app.get("/status-info", (req, res) => {
  const statusCode = parseInt(req.query.code);

  // Check if the provided status code exists in the dictionary
  if (!statusCode || !statusMessages[statusCode]) {
    return res.status(400).json({
      status: 400,
      message: "Invalid status code. Please provide a valid HTTP status code.",
    });
  }

  res.json({
    status: statusCode,
    message: statusMessages[statusCode],
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the HTTP Status Code API! Use /status-info?code=<status_code> to get status details.");
});
