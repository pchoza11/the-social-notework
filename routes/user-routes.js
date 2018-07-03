let db = require('../models');

  module.exports = (app) => {
    app.get('/api/users', (req, res) => {
      db.user.findAll({
        include: [db.note]
      }).then((dbUser) => {
        res.json(dbUser);
      });
    });

    app.get('/api/users/:name', (req,res)=>{
      db.user.findOne({
        where : { name : req.params.name },
        include: [db.note]
      }).then((dbUser)=>{
        res.json(dbUser);
      });
    });

    app.post('/api/users', (req, res) => {
      db.user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then((dbUser) => {
        res.json(dbUser);
      });
    });



  };
