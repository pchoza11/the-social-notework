
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,255]
        }
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: "email",
        allowNull: false,
        validate: {
        len: [1,255]
          }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,255]
        }
      },

    });
    return user;
  };