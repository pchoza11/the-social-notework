let db = require('../models');

module.exports = (app) => {


app.get("/", function (req, res) {
  res.render("layouts/home-login");
})

app.get("/userdash/", function (req, res) {
  res.render("layouts/user-dashboard");
})

};