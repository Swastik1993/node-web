//Express
var express = require('express');
var app = express();

//Engine
app.set("view engine", "ejs");

var server_port = process.env.PORT || 8080;
app.use(express.static(__dirname));

//Routes
var routes = require("./routes")

app.get('/', routes.home);
app.get('/cnn', routes.cnn);
app.get('/dot-plot', routes.dotPlot);
app.get('/lstm', routes.lstm);
app.get('/opencv-python', routes.opencv);
app.get('/blog', routes.blog);
app.get('*', routes.notFound);

app.listen(server_port, function() {
    console.log("Application running on http://localhost:"+server_port);
});
