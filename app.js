var express = require('express');
var app = express();

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
