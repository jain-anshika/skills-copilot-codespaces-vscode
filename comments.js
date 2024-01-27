// Create web server
http.createServer(function (req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body "Hello World"
    res.end('Hello World\n');
}) // Add closing parenthesis here
