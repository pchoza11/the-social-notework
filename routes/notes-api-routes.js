const db = require('./models');

module.exports = (app)=>{
  app.get('/api/notes',(req,res)=>{
    let query  = {};
    if (req.query.user_id){
      quiery.UserId = req.query.user_id;
    }
    
    db.Note.findAll({
      where : query,
      include : [db.User]
    }).then((dbNote)=>{
      res.json(dbNote);
    });
  });

  
}