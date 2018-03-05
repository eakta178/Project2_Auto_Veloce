//var path = require("path");
//var request = require('request');
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(methodOverride('_method'));

var routes = require("./controllers/cars_controller.js");
app.use(routes);

var PORT = process.env.PORT || 3300;
db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
})