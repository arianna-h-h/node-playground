let http = require('http');

http.createServer((request, response) => {
  response.writeHead(200);
  response.write('Hello, this is dog');
  response.end();
}).listen(8080);
console.log('Listening on port 8080...');
