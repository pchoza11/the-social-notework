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

// const encrypt = require("./encryption.js")


var users = [
    {
        id: 1,
        name: "clark",
        age: 21,
        password: "e5f13243f6ad1355ba8dd3c298466667:e20984835647c172afd953a3588e9ace"
    },
    {
        id: 2,
        name: "peter",
        age: 42,
        password: "test123"
    }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use(session({
    secret: "whateverwewant",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto", maxAge: 99999 }
}));

app.get ("/", function(req,res){
    res.render("layouts/home-login");
})

app.get ("/userdash", function(req,res){
    res.render("layouts/user-dashboard");
})


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});