let fs = require('fs');
let http = require('http');

http.createServer((request, response) => {
  response.writeHead(200);
  fs.readFile('../water.txt',
    (er, contents) => {
      response.write(contents);
      response.end();
    });
}).listen(8080);
