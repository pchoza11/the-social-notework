
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(express.static("public"));

  // DONT CHANGE ANYTHING ABOVE THIS LINE 

<<<<<<< HEAD

=======
  
require("./routes/api-routes.js")(app);
>>>>>>> ae97a95e5d5b00763bd43147ac8524c6f2771659
require("./routes/html-routes.js")(app);
require("./routes/user-routes.js")(app);
require("./routes/note-routes.js")(app);

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
<<<<<<< HEAD


// force: true
=======
>>>>>>> ae97a95e5d5b00763bd43147ac8524c6f2771659
