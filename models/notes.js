module.exports = (sequelize,DataTypes)=>{
  let Note = sequelize.Define(`Note`,{
    topic : {
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        len : [1,200]
      }
    },
    note_body : {
      type : DataTypes.TEXT,
      allowNull : false,
      validate : {
        len:[1]
      }
    }
  });
  Note.associate = (models)=>{
    Note.belongsTo(models.User,{
      foreignKey : {
        allowNull : false
      }
    });
  };

return Note;
};