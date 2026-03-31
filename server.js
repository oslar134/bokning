var http = require('http');
var fs = require('fs');
var path = require('path');

const PORT = 3000;

http.createServer(function (request, response) {

    let filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    let extname = path.extname(filePath);

    let contentType = 'text/html';
    if (extname == '.css') {
        contentType = 'text/css';
    }
    if (extname == '.js') {
        contentType = 'text/javascript';
    }

    fs.readFile(filePath, function(err, content) {
        if (err) {
            response.writeHead(404);
            response.end("File not found");
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content);
        }
    });

}).listen(PORT, "0.0.0.0", () => {
    console.log("Servern körs på:");
    console.log("http://localhost:" + PORT);
});