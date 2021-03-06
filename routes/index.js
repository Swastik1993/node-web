//Routes

exports.home = function(request, response) {
    response.render("index", {
        title : "Sorry but I think you got the wrong link"
    });
    //response.send("Server response from home page");
};

exports.cnn = function(request, response) {
    response.render("cnn_notebook", {
        title : "Basic CNN using Keras"
    });
};

exports.dotPlot = function(request, response) {
    response.render("dot-plot", {
        title : "Basic Dot-plot representation"
    });
};

exports.lstm = function(request, response) {
    response.render("lstm-rnn", {
        title : "LSTM - RNN network for testing addition"
    });
};

exports.kmeans = function(request, response) {
    response.render("kmeans", {
        title : "K-Means algorithm"
    });
};

exports.opencv = function(request, response) {
    response.render("opencv-python", {
        title : "Instructions to install OpenCV with Python"
    });
};

exports.blog = function(request, response) {
    return response.redirect(200, "http://blog.swastikbiswas.me/");
};

exports.notFound = function(request, response) {
    response.send("This page does not exist");
};
