// Create a small HTTP server using Node's HTTP module
const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url('/')) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  }
}).listen(1245);

module.exports = app;
