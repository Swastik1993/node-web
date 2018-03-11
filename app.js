//Express
var express = require('express');
var app = express();

//Engine
app.set("view engine", "ejs");

var server_port = process.env.PORT || 8080;

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

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


// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'swastikbiswas2016@gmail.com',
  from: 'mail@swastikbiswas.me',
  subject: 'Testing mail from SendGrid WebAPI',
  text: 'Sending mails is easy to do anywhere, even with Node.js',
  html: '<strong>Mail is sent with Node.js as backend</strong>',
};
sgMail.send(msg);

