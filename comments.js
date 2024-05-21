// Create web server
// 1. Create a web server
// 2. Read the file content of 'comment.html'
// 3. Send the content to the client
// 4. When the client requests a comment, send the comment to the client

var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// 1. Create a web server
http.createServer(function(request, response) {
	// 2. Read the file content of 'comment.html'
	if(request.url === '/') {
		fs.readFile('comment.html', function(error, data) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		});
	} else if(request.url === '/comment') {
		// 4. When the client requests a comment, send the comment to the client
		// Get the query string
		var query = url.parse(request.url, true).query;
		// Get the comment
		var comment = query.comment;
		// Print the comment on the console
		console.log(comment);
		// Send the comment to the client
		response.end('<html><head></head><body>' + comment + '</body></html>');
	}
}).listen(52273, function() {
	console.log('Server running at http://