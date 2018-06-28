module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [255]
        }
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: "email",
        validate: {
        len: [255]
          }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [255]
        }
      },

    });
    return user;
  };
  