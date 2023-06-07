const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((request, response) => {

    let path = './views/';
    switch(request.url) {
        case        '/'                 :   path += 'index.html';
                                            break;
        case        '/about'            :   path += 'about.html';
                                            break;
        case        '/about-node.js'    :   response.statusCode = 301;
                                            response.setHeader('Location', '/about');
                                            response.end();
                                            break;
        case        '/500'              :   path += '500.html';
                                            break;
        default                         :   path += '404.html';
                                            response.statusCode = 404;
                                            break;
    }

    response.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err, data) => {
        if (err) { 
            console.log(err);
            response.statusCode = 502;
            response.end();
        } else  {
            response.end(data.toString());
        }
    });
    
});

server.listen(8888, () => {
    console.log("Listenging for requests on port 8888");
});
