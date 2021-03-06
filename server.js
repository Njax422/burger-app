// you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). 

var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = 3000;

var app = express();

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.listen(port);
