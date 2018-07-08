module.exports = (sequelize,DataTypes)=>{
  let note = sequelize.define('note',{
    category : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : [1]
      }
    },
    title : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len : [1]
      }
    },
    body : {
      type : DataTypes.TEXT,
      allowNull : false,
      validate : {
        len : [1]
      }
    }
  });

  note.associate = (models)=>{
    note.belongsTo(models.user,{
      foreignKey  :{
        allowNull : false
      }
    });
  };
  return note;
};