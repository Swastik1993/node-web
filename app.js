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
});

app.get('/dot-plot', function(request, response) {
    response.render("dot-plot", {
        title : "Basic Dot-plot representation"
    });
    //response.send("Server response from home page");
});

app.get('/lstm', function(request, response) {
    response.render("lstm-rnn", {
        title : "LSTM - RNN network for testing addition"
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
