module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,255]
        }
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: "email",
        allowNull: true,
        validate: {
        len: [1,255]
          }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,255]
        }
      }

    });
    user.associate=function(models){
      user.hasMany(models.note, {
        onDelete : "cascade"
      });
    };
    return user;
  };
  