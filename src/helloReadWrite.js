const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200);
  request.pipe(response);
}).listen(8080);
