let db =  require('../models');

module.exports = (app)=>{

  app.get('/api/notes/',(req,res)=>{
    db.note.findAll({
      include: [db.routes]
    }).then((dbNote)=>{
      res.json(dbNote);
    });    
  });

  app.get('/api/notes/:topic',(req,res)=>{
    db.note.findOne({
      where : {
        topic : req.params.topic
      },
      include: [db.routes]
    }).then((dbNote)=>{
      res.json(dbNote);
    });
  });

  app.post('/api/notes/',(req,res)=>{
    db.note.create({
      topic : req.body.topic,
      body : req.body.body
    }).then((dbNote)=>{
      res.json(dbNote);
    });
  });

  app.put('/api/notes',(req,res)=>{
    db.note.update(req.body,
    {
      where : {
        id : req.body.id
      }
    }).then((dbNote)=>{
      res.json(dbNote);
    });
  });

}