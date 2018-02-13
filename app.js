var express = require('express');
var app = express();

var server_port = process.env.PORT || 8080;
//app.use(express.static(__dirname));

//Routes
//home page route
app.get('/', function(request, response) {
    response.send("Server response from home page");
});

app.get('/blog', function(request, response) {
    return response.redirect(200, "http://blog.swastikbiswas.me/");
});

app.listen(server_port, function() {
    console.log("Application running on http://localhost:"+server_port);
});
