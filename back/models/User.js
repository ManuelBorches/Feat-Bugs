const { DataTypes, Model } = require("sequelize");
const database = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue('firstName') + " " + this.getDataValue('lastName');
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msj: "must be a valid email address",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userType: {
      type: DataTypes.ENUM("owner", "user"), 
      defaultValue: "user"
    },
    salt: {
      type: DataTypes.STRING,
    },

  },
  {
    sequelize: database,
    modelName: "user",
});

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
