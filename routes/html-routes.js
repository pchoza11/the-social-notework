
let db = require('../models');

module.exports = (app) => {


  app.get("/", function (req, res) {
    res.render("layouts/home-login");
  })

  app.get("/userdash/:userid", function (req, res) {
    var id=req.params.userid;
    console.log("hey this is the ID" +id+ "end of ID var");
    db.user.findOne({
      where: { id: req.params.userid }
    }).then((dbUser) => {
      console.log("this is dbUser: ", dbUser, "end of dbuser")
      var userdata = dbUser.dataValues;
      res.render("user-dashboard", {userdata});
    }); //pull user info from database through id


  })

  app.get("/userdash/:userid/create-notes", function (req, res) {
    var id = req.params.userid;
    db.user.findOne({
      where: { id: req.params.userid }
    }).then((dbUser) => {
      console.log("this is dbUser: ", dbUser.dataValues, "end of dbuser")
      var userdata = dbUser.dataValues;
      res.render("create-notes-form", { userdata });
    }); //pull user info from database through id


  })

};