const http = require('http');

// Create HTTP server
const app = http.createServer((req, res) => {
  // set header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
}).listen(1245);

// Export the app for external use
module.exports = app;
