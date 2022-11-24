/* 
  Simple web app using http module to compare with Express

  Try the following adresses:
  http://127.0.0.1:3000/
  http://127.0.0.1:3000/index.html
  http://127.0.0.1:3000/img/picture.jpg
  Can you see the difference?
*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  console.log(`Request: ${req.method} ${req.url}`);
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});