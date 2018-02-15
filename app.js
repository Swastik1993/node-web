var express = require('express');
var app = express();

app.set("view engine", "ejs");

var server_port = process.env.PORT || 8080;
app.use(express.static(__dirname));

//Routes
//home page route
app.get('/', function(request, response) {
    response.render("index", {
        title : "Sorry but I think you got the wrong link"
    });
    //response.send("Server response from home page");
});

app.get('/cnn', function(request, response) {
    response.render("cnn_notebook", {
        title : "Basic CNN using Keras"
    });
    //response.send("Server response from home page");
});

app.get('/blog', function(request, response) {
    return response.redirect(200, "http://blog.swastikbiswas.me/");
});

app.get('*', function(request, response) {
    response.send("This page does not exist");
});

app.listen(server_port, function() {
    console.log("Application running on http://localhost:"+server_port);
});
