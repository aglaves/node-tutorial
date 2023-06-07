const http = require('http');

const server = http.createServer((request, response) => {
    console.log("Request received.")
    console.log(request);
});

server.listen(8888, 'localhost', () => {
    console.log("Listenging for requests on port 8888");
});
