var express = require('express');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

//Routes
//home page route
app.get('/', function(request, response) {
    response.send("Server response from home page");
});

app.get('/blog', function(request, response) {
    return response.redirect(200, "http://blog.swastikbiswas.me/");
});

app.listen(3000, function() {
    console.log("Application running on http://localhost:3000");
});
