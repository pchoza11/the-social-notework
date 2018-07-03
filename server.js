
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var db = require("./models");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/user-routes.js")(app);
require("./routes/note-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  
