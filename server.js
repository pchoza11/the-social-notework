var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

const encrypt = require("./encryption.js")

var app = express();
var PORT = process.env.PORT || 3000;

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

app.use(session({
    secret: "whateverwewant",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto", maxAge: 99999 }
}));

app.get("/", function (req, res) {
    if (req.session.user) {
        res.send(`Welcome back, ${req.session.user.name}. Are you still ${req.session.user.age} years old?`)
    }
    else if (req.cookie) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].token === req.cookie.token) {
                req.session.user = users[i];
                return res.redirect("/");
            }
        }
    }
    else {
        res.send(`
      <form method='POST' action='/login'>
        <input type='text' name='username' />
        <input type='password' name='password' />
        <input type='submit' value='Submit' />
      </form>
    `);
    }
});



app.post("/login", function (req, res) {

    for (var i = 0; i < users.length; i++) {

        var dbPassword = users[i].password;
        var deCrypyPw = encrypt.decrypt(dbPassword);

        if (users[i].name === req.body.username && deCrypyPw === req.body.password) {
            var token = "t" + Math.random();
            users[i].token = token;

            res.cookie("token", token);
            req.session.user = users[i];

            return res.redirect("/");
        }
        else {
            return res.send("Account not found.");
        }
    }

});

app.get("/other", function (req, res) {
    if (req.session.user) {
        res.send(`Oh hi~ it's ${req.session.user.name} again!`);
    }
    else {
        res.redirect("/");
    }
})

app.get("/logout", function (req, res) {
    res.clearCookie("token");
    req.session.destroy();
    res.redirect("/");
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});